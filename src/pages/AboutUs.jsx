import React from "react";
import Instructors from "../components/Home_page_components/Instructors";
import Community from "../components/Home_page_components/Community";
import FAQ from "../components/Home_page_components/FAQ";
import StatsBar from "../components/Home_page_components/StatsBar";
import Testimonial from "../components/Home_page_components/Testimonial";
import WhyChooseUs from "../components/Home_page_components/WhyChooseUs";
import Footer from "../components/Home_page_components/Footer";

const AboutUs = () => {
  return (
    <>
     <section id="about" className="bg-white py-16 px-6 md:px-12 text-center">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
  <p className="text-l text-gray-600 max-w-4xl mx-auto leading-relaxed">
    At Novanectar Courses, we equip learners with practical, career-ready skills through flexible, expert-led training. Learn at your own pace, anytime and anywhere, and grow with confidence toward your professional goals.
  </p>
</section>

      <Community />
      <StatsBar />
    <WhyChooseUs />
      <Instructors />
      <FAQ />
      <Testimonial />
      <Footer />
    </>
  );
};

export default AboutUs;
