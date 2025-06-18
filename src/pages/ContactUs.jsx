// Fix the function name to match the export
const ContactUS = () => {
  return (
    <>
      <section id="Contact" className="bg-white py-16 px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-l text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Novanectar Courses, we’re here to help you at every step of your learning journey. Whether you have questions, feedback, or need support, feel free to reach out—we’re just a message away.
        </p>
      </section>

      <TransformCTA />
    </>
  );
};

export default ContactUS;
import React from 'react';
import TransformCTA from '../components/Home_page_components/TransformCTA'; 