import React from "react";
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <div className="contact-map-wrap">
      <iframe
        className="contact-map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.52516734999999!3d37.73761199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location"
      />
    </div>
  );
};

export default ContactMap;
