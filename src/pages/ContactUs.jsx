import React from 'react';
import ContactHero from '../components/Contact_page_components/ContactHero';
import ContactForm from '../components/Contact_page_components/ContactForm';
import ContactCard from '../components/Contact_page_components/ContactCard';
import GoogleMapEmbed from '../components/Contact_page_components/GoogleMapEmbed';
import Footer from "../components/Home_page_components/Footer";

import supportImg from '../assets/Contact_Form_Image.jpg'; // ✅ Correct import

const ContactUs = () => {
  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-4 md:px-10 text-center">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          At Novanectar Courses, we’re here to help you at every step of your learning journey.
          Whether you have questions, feedback, or need support, feel free to reach out — we’re just a message away.
        </p>
      </section>

      <ContactHero />

<div className="flex flex-col lg:flex-row gap-8 justify-center items-start py-10 px-4 max-w-7xl mx-auto">
  {/* 60% width for the form */}
  <div className="w-full lg:w-4/6">
    <ContactForm />
  </div>

  {/* 40% width for the image */}
  <div className="w-full lg:w-2/6 flex justify-center">
    <img
      src={supportImg}
      alt="Support"
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>
</div>


      <ContactCard />
      <GoogleMapEmbed />
      <Footer />
    </div>
  );
};

export default ContactUs;
