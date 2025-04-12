import React, { useState } from 'react';
import Image2 from '../../assets/Secuall/web-cam_12078628.png';
import Image3 from '../../assets/Secuall/reliability_15441499.png';
import Image4 from '../../assets/Secuall/video-marketing_1643991.png';
import Image5 from '../../assets/Secuall/prototype_3852809.png';

export default function Secuall() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-black flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between p-10 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-center md:text-left">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white animate-fadeIn" style={{ fontFamily: 'Playfair Display, serif' }}>
            Secuall
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-200 animate-fadeIn" style={{ fontFamily: 'Playfair Display, serif' }}>
            Revolutionizing Security with AI
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Secuall is an advanced, AI-powered security system designed to enhance both vehicle and home protection.
            Utilizing cutting-edge computer vision technology and predictive models, Secuall sets a new standard for surveillance and safety.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={require('../../assets/Secuall/camera-3376230_1280.jpg')}
            alt="Secuall Camera"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#081944' }}>Our Key Features</h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"> 

          {/* First Feature Card */}
          <div 
            className="text-black p-6 w-[90%] md:w-[30rem] h-80 rounded-tl-3xl rounded-br-3xl border-4 border-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center"
            onClick={() => toggleCard(0)}>
            <img src={Image2} alt="AI-Powered Dashcams" className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-center">AI-Powered Dashcams and Home Security Cameras</h3>
            <p className="text-sm text-center">Secuall integrates AI-driven dashcams and home security cameras, providing comprehensive surveillance for vehicles and residences. By leveraging advanced computer vision, the system detects and predicts suspicious activities, offering a smarter, more effective approach to security.</p>
          </div>

          {/* Second Feature Card */}
          <div 
            className="text-black p-6 w-[90%] md:w-[30rem] h-80 rounded-tl-3xl rounded-br-3xl border-4 border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center"
            onClick={() => toggleCard(1)}>
            <img src={Image3} alt="Proven Performance" className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-center">Proven Performance: 98% Recall Rate</h3>
            <p className="text-sm text-center">During the proof of concept (POC) phase, Secuall achieved a 98% recall rate, showcasing its ability to accurately identify suspicious behavior with minimal false negatives. This performance underscores the robustness of our AI algorithms and ensures reliable, real-world application.</p>
          </div>

          {/* Third Feature Card */}
          <div 
            className="text-black p-6 w-[90%] md:w-[30rem] h-80 rounded-tl-3xl rounded-br-3xl border-4 border-yellow-500 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center"
            onClick={() => toggleCard(2)}>
            <img src={Image4} alt="Advancements in Video Processing" className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-center">Advancements in Video Processing and Computer Vision</h3>
            <p className="text-sm text-center">Secuall’s state-of-the-art video processing technology enhances its detection capabilities, continuously refining threat identification through evolving predictive models. This ensures a high level of accuracy, making it an ideal solution for modern security needs.</p>
          </div>

          {/* Fourth Feature Card */}
          <div 
            className="text-black p-6 w-[90%] md:w-[30rem] h-80 rounded-tl-3xl rounded-br-3xl border-4 border-red-500 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center"
            onClick={() => toggleCard(3)}>
            <img src={Image5} alt="Final Stage Testing" className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-center">Final Stage Testing and Future Updates</h3>
            <p className="text-sm text-center">Our prototype is currently in the final stages of testing. Stay tuned for upcoming updates as we continue to improve and refine Secuall's capabilities.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
