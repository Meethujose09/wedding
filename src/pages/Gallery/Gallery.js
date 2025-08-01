import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import couple2 from '../../assets/handspic.jpg';
import image1 from "../../assets/gallery/1.jpeg";
import image2 from "../../assets/gallery/2.jpeg";

const Gallery = () => {
  const images = [image1, image2, image1, image2];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${couple2}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with backdrop and content */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm px-4 py-16 flex flex-col justify-center items-center">
        {/* Title and subtitle */}
        <div className="text-center mb-10">
          <h1
            className="text-[36px] sm:text-[48px] md:text-[60px] text-[#f2c49b] font-[Rallocate] drop-shadow-lg"
            style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
          >
            Our Wedding Gallery
          </h1>
          <p className="text-[#e6d7ca] font-elegist italic mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Moments of love and laughter captured forever — a glimpse into our journey.
          </p>
        </div>

        {/* Swiper container */}
        <div className="w-full max-w-6xl bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            speed={600}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },       // 👈 Ensures 1 slide on very small screens
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow-md shadow-black/40">
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
