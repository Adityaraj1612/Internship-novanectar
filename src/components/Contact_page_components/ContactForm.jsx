import React from 'react';

const ContactForm = () => {
  return (
    <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
      <h3 className="text-2xl font-bold mb-4">Need Help? Message.</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="First Name" className="border p-2 rounded" />
        <input type="text" placeholder="Last Name" className="border p-2 rounded" />
        <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="border p-2 rounded" />
      </div>
      <input type="text" placeholder="Subject" className="border w-full p-2 rounded mb-4" />
      <input type="text" placeholder="Address" className="border w-full p-2 rounded mb-4" />
      <textarea placeholder="Message" className="border w-full p-2 rounded mb-4" rows="4" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
    </form>
  );
};

export default ContactForm;
