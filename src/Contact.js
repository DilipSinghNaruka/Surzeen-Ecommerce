import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28599.258456534866!2d75.93056924999999!3d26.3618599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e70b136c28c1f%3A0x88c99059f85cf890!2sNiwai%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1672659605184!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact_container">
        <form
          action="https://formspree.io/f/mzbqbrbz"
          method="post"
          className="contact_container_form"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            name="username"
            required
            autoComplete="off"
            className="input"
          />
          <textarea
            name="Message"
            cols="30"
            rows="4"
            autoComplete="off"
            placeholder="Enter You message"
            className="input"
          ></textarea>
          <button type="submit" value="send" className="contactPage_submit_btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
