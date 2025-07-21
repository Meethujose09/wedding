import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contactSection" id="contactUs" >
      <div className="overlay backdrop-blur-sm py-10 px-6 sm:px-12">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] tracking-wide leading-tight text-center"
          style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
        >
          Contact Us
        </h1>

        <p className="text-center text-[#e6d7ca] font-elegist italic mt-4 mb-10 text-base sm:text-lg max-w-xl mx-auto">
          Have a question or a message for us? We'd love to hear from you.
        </p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/mqalayae"
            method="POST"
            className="max-w-2xl mx-auto space-y-6"
            onSubmit={(e) => {
              setTimeout(() => setSubmitted(true), 1000); // slight delay to allow submission
            }}
          >
            <div className="flex flex-col">
              <label className="text-[#e6d7ca] font-elegist mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="p-3 rounded-lg border border-[#e6d7ca] bg-transparent text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#e6d7ca] font-elegist mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="p-3 rounded-lg border border-[#e6d7ca] bg-transparent text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#e6d7ca] font-elegist mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="p-3 rounded-lg border border-[#e6d7ca] bg-transparent text-white focus:outline-none"
              ></textarea>
            </div>
  <input type="hidden" name="_redirect" value="/thank-you" />
            <button
              type="submit"
              className="bg-[#f2c49b] text-[#3a2c27] font-bold py-2 px-6 rounded-xl hover:bg-[#ddb88c] transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-[#e6d7ca] font-elegist mt-10 text-lg">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
