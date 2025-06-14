import React, { useEffect, useRef, useState } from 'react';

export default function StatsBar() {
  const stats = [
    { label: 'Courses', target: 50 },
    { label: 'Students', target: 20000 },
    { label: 'Certificates', target: 15000 },
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
      const increment = Math.ceil(stat.target / 50); // Adjust speed here
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
    <section ref={statsRef} className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className="text-2xl font-bold">
              {counts[i] >= 1000 ? `${(counts[i] / 1000).toFixed(1)}K+` : `${counts[i]}+`}
            </p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

