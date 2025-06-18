import React from 'react';

const ContactCard = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h3 className="text-2xl font-semibold text-center mb-8">Clear guidance, quick responses — every time</h3>
      <div className="grid md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2">Dehradun Office</h4>
          <p>GMS Road Dehradun,<br />Uttarakhand, India</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2">Call Us</h4>
          <p>+91 897 989 1703</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2">Email Us</h4>
          <p>info@novanectar.co.in</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2">Visit Our Website</h4>
          <p><a href="https://www.novanectar.com" className="text-blue-600">novanectar.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
