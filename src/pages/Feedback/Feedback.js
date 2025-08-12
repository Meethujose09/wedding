import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgImage from "../../assets/love.jpeg";

// Function to limit text length
const truncateText = (text, maxLength = 200) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const SHEETY_URL = "https://api.sheety.co/8d2dd45668eb354076d11d33b5381723/friendswishes/sheet1";

const Feedback = () => {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetch(SHEETY_URL)
      .then((res) => res.json())
      .then((data) => {
        // Assuming Sheety response structure: { sheet1: [ {name, wishes}, ... ] }
        setWishes(data.sheet1 || []);
      })
      .catch((err) => {
        console.error("Error fetching wishes:", err);
      });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Blurred background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)", // reduced blur for better visibility
          transform: "scale(1.03)",
          zIndex: 0,
        }}
      ></div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 px-4 py-16 flex flex-col justify-center items-center z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1
            className="text-[36px] sm:text-[48px] md:text-[60px] text-[#f2c49b] font-[Rallocate] drop-shadow-lg"
            style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
            data-aos="fade-down"
          >
            Friends' Wishes
          </h1>
          <p
            className="text-[#e6d7ca] font-elegist italic mt-4 text-base sm:text-lg max-w-xl mx-auto"
            data-aos="fade-up"
          >
            Words from the heart — blessings, laughter, and love from our dear friends.
          </p>
        </div>

        {/* Swiper */}
        <div className="w-full max-w-6xl bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            speed={600}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {wishes.length > 0 ? (
              wishes.map((wishObj, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-6 shadow-xl flex flex-col justify-between h-[300px] hover:scale-105 transition-transform duration-300 ease-out"
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={i * 100}
                  >
                    <p className="text-[#e6d7ca] italic mb-4 leading-relaxed text-base sm:text-lg overflow-hidden">
                      “{truncateText(wishObj.wishes || "", 200)}”
                    </p>
                    <h3 className="text-[#f2c49b] font-bold text-lg text-right mt-auto">
                      — {wishObj.name || "Anonymous"}
                    </h3>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-white text-center py-10">Loading wishes...</p>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
