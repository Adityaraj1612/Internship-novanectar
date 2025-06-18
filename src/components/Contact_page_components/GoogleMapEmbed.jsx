import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-125 mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.2371980452856!2d78.00434786171434!3d30.309021335412258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be94375e729%3A0xc160311fe8cb82d6!2sNovaNectar%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1750245185907!5m2!1sen!2sin"
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
