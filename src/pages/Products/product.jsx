import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();
  const sliderRef = useRef(null); // Reference to the slider
  const slideRef = useRef([]); // Reference to hold slide elements

  // Slider settings for the carousel
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false, // Disabled to maintain fixed size
    arrows: true,
    autoplay: true, // Enables auto-slide
    autoplaySpeed: 4000, // Slide changes every 4 seconds
    pauseOnHover: true, // Pauses autoplay when hovered
    speed: 1000,
    fade: true,
  };

  // Effect to set the height of all slides
  useEffect(() => {
    const maxHeight = Math.max(...slideRef.current.map(slide => slide.clientHeight));
    slideRef.current.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
<div className="bg-white min-h-screen flex flex-col justify-center items-center py-0 md:py-12 px-0 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Our Products</h2> {/* Reduced bottom margin on mobile */}
      <div className="slider-container w-full max-w-[90%] justify-center items-center" style={{ height: '600px' }}> {/* Set the height here */}
        <Slider ref={sliderRef} {...settings}>
          {/* SusNet Slide */}
          <div ref={el => slideRef.current[0] = el} className="flex bg-[#009688] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">SUSNET™</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              SUSNET™ is HitoAI’s flagship AI-powered sustainable energy management system designed to optimize energy usage, ensuring efficiency and sustainability in the growing market.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/susnet')}
            >
              Learn More
            </button>
          </div>

          {/* Selwell Slide */}
          <div ref={el => slideRef.current[1] = el} className="flex bg-[#007ACC] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">SELWEL</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              SELWEL is an advanced trading platform designed specifically for financial institutions to optimize profits while reducing risks associated with trading shares of globally recognized companies.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/selwell')}
            >
              Learn More
            </button>
          </div>

          {/* Secuall Slide */}
          <div ref={el => slideRef.current[2] = el} className="flex bg-[#6A5ACD] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">SECUALL</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              SECUALL is an advanced AI-powered system comprising dashcams and home security cameras, designed to enhance security using AI and computer vision.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/secuall')}
            >
              Learn More
            </button>
          </div>

          {/* AIMARCOM Slide */}
          <div ref={el => slideRef.current[3] = el} className="flex bg-[#FF6F61] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">AIMARCOM</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              AIMARCOM offers AI-driven personalization and recommendations to boost engagement and sales.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/aimarcom')}
            >
              Learn More
            </button>
          </div>

          {/* 223D Slide */}
          <div ref={el => slideRef.current[4] = el} className="flex bg-[#4CAF50] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">223D</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              223D generates 3D assets using AI with a focus on gaming and VR applications, offering limitless creativity.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/223d')}
            >
              Learn More
            </button>
          </div>

          {/* KNOMED Slide */}
          <div ref={el => slideRef.current[5] = el} className="flex bg-[#FF5722] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">KNOMED</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              KNOMED is an AI tool for enhancing patient care and outcomes through data-driven insights.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/knomed')}
            >
              Learn More
            </button>
          </div>

          {/* AI4Physio Slide */}
          <div ref={el => slideRef.current[6] = el} className="flex bg-[#9C27B0] rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-white flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">AI4Physio</h2> {/* Reduced heading size */}
            <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 text-center overflow-hidden">
              AI4Physio is a revolutionary solution for physiotherapy, utilizing AI for personalized rehabilitation.
            </p> {/* Reduced paragraph size */}
            <button
              className="bg-[#FFB300] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#FFAA00] text-base md:text-lg mt-4"
              onClick={() => navigate('/ai4physio')}
            >
              Learn More
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
}
