import React from "react";
import "./Location.css";
import Footer from "../../components/Footer/Footer"; // Add this if it's in the same directory
import image from '../../assets/lock.jpg';

const Location = () => {
  return (
    <section
      className="relative locationSection min-h-screen text-white bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`
      }}
      id="location"
    >
      {/* Background dim overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] tracking-wide leading-tight mb-6"
          style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
          data-aos="fade-down"
        >
          Ceremony Locations
        </h1>

        <p
          className="text-[#e6d7ca] font-elegist italic text-base sm:text-lg max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
        >
          Join us in celebrating these special moments at two beautiful churches filled with love and blessings.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Engagement */}
          <div
            className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 shadow-xl"
            data-aos="fade-right"
          >
            <h3
              className="text-3xl text-[#f2c49b] font-[Rallocate] tracking-wide mb-4"
              style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
            >
              Engagement
            </h3>
            <p className="text-[#e6d7ca] font-elegist leading-relaxed mb-4">
              <span className="font-semibold text-[#f2c49b]">Date:</span> September 10, 2025 <br />
              <span className="font-semibold text-[#f2c49b]">Time:</span> 12:00 PM <br />
              <span className="font-semibold text-[#f2c49b]">Venue:</span> St. Thomas Forane Church, Anakkara
            </p>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              {/* Engagement Map */}
              <iframe
                title="Engagement Location"
                src="https://www.google.com/maps?q=9.666371688781455,77.16108323362074&z=17&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Wedding */}
          <div
            className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 shadow-xl"
            data-aos="fade-left"
          >
            <h3
              className="text-3xl text-[#f2c49b] font-[Rallocate] tracking-wide mb-4"
              style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
            >
              Wedding
            </h3>
            <p className="text-[#e6d7ca] font-elegist leading-relaxed mb-4">
              <span className="font-semibold text-[#f2c49b]">Date:</span> September 13, 2025 <br />
              <span className="font-semibold text-[#f2c49b]">Time:</span> 11:00 AM <br />
              <span className="font-semibold text-[#f2c49b]">Venue:</span> St. Mary's Syro Malabar Church, Mekkad Karakkattukunnu
            </p>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              {/* Wedding Map */}
              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps?q=10.167064737619608,76.35439516694355&z=17&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
