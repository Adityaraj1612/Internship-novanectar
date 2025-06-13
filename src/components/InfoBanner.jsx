import React from "react";

const InfoBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Future with Us
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of learners who are unlocking their potential through our expert-led courses and community support.
          </p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <img
            src="../assets/transform.jpg"
            alt="Transform your future"
            className="rounded-2xl shadow-2xl w-full h-auto max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
