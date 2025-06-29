import React, { useEffect, useRef, useState } from 'react';

export default function StatsBar() {
  const stats = [
    { label: 'Courses', target: 50 },
    { label: 'Students', target: 20000 },
    { label: 'Certificates Earned', target: 15000 },
    { label: 'Instructors', target: 200 },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.target / 50);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.target);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section
      ref={statsRef}
      className="bg-[#296AD2] text-white py-10 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center relative">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative px-4 py-6 flex flex-col items-center justify-center"
          >
            {/* Stat content */}
            <p className="text-3xl font-bold">
              {counts[i] >= 1000
                ? `${(counts[i] / 1000).toFixed(1)}K+`
                : `${counts[i]}+`}
            </p>
            <p className="text-sm mt-1">{stat.label}</p>

            {/* Divider (not on last item) */}
            {i < stats.length - 1 && (
              <div className="absolute right-0 top-2 bottom-2 w-px bg-white opacity-50 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
