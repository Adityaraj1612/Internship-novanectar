import React, { useState } from 'react';
import faqIcon from '../../assets/Vector.png';

const ContactForm = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full">
      <div className="flex items-center mb-3">
        <span className="flex items-center bg-white shadow px-3 py-1 rounded-full">
          <img src={faqIcon} alt="FAQ Icon" className="w-4 h-4" />
          <span className="text-sm font-medium ml-2">Send Us Message</span>
        </span>
      </div>

      <h3 className="text-5xl font-bold mb-6">Need Help? Message.</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Enter your first name" className="border border-gray-300 text-sm p-3 rounded focus:outline-none" />
        <input type="text" placeholder="Enter your last name" className="border border-gray-300 text-sm p-3 rounded focus:outline-none" />
        <input type="tel" placeholder="Enter your phone number" className="border border-gray-300 text-sm p-3 rounded focus:outline-none" />
        <input type="email" placeholder="Enter your email address" className="border border-gray-300 text-sm p-3 rounded focus:outline-none" />
      </div>

      <input type="text" placeholder="Enter subject" className="border border-gray-300 text-sm p-3 rounded w-full mb-4 focus:outline-none" />
      <input type="text" placeholder="Enter your address" className="border border-gray-300 text-sm p-3 rounded w-full mb-4 focus:outline-none" />

      {/* ✅ Image Upload Field */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border border-gray-300 text-sm p-3 rounded w-full mb-4 focus:outline-none"
      />

      {/* ✅ Image Preview */}
      {imagePreview && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">Image Preview:</p>
          <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded border" />
        </div>
      )}

      <textarea placeholder="Type message here…" className="border border-gray-300 text-sm p-3 rounded w-full mb-6 focus:outline-none" rows="4" />

      <button type="submit" className="bg-[#296AD2] text-white text-sm font-semibold px-81 py-3 rounded-md hover:bg-black transition duration-300">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
