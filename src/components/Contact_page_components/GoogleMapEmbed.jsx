import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-96 mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7649715423054!2d78.001234!3d30.316495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b733e7418b%3A0xd1f49e41f0ad2c89!2sDehradun!5e0!3m2!1sen!2sin!4v1718712000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map Location"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
