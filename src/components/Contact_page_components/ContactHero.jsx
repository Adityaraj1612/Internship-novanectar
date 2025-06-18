import React from 'react';

const ContactHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 mt-10 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Transform Your Future with Excellence in Education</h2>
        <ul className="list-none space-y-2 text-gray-700">
          <li>✅ Unlock your potential with expert guidance.</li>
          <li>✅ Achieve your academic and personal goals.</li>
          <li>✅ Empower yourself with lifelong learning skills.</li>
        </ul>
      </div>
      <img src="/assets/hero-girl.png" alt="Hero Girl" className="w-64 mt-6 md:mt-0" />
    </div>
  );
};

export default ContactHero;
