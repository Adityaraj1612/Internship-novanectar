import React from 'react';
import ContactHero from '../components/Contact_page_components/ContactHero';
import ContactForm from '../components/Contact_page_components/ContactForm';
import ContactCard from '../components/Contact_page_components/ContactCard';
import GoogleMapEmbed from '../components/Contact_page_components/GoogleMapEmbed';

const ContactUs = () => {
  return (
    <div className="pt-20">
      <section className="text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          At Novanectar Courses, we’re here to help you at every step of your learning journey. Whether you have questions, feedback, or need support, feel free to reach out — we’re just a message away.
        </p>
      </section>

      <ContactHero />

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start py-10 px-4">
        <ContactForm />
        <img src="/assets/support-boy.jpg" alt="Support" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>

      <ContactCard />

      <GoogleMapEmbed />

    </div>
  );
};

export default ContactUs;
