import React, { useState } from 'react';
import Image1 from '../../assets/AI4physio/prescription_9340158.png';
import Image2 from '../../assets/AI4physio/timeline_9303793.png'; // replace with your image paths
import Image3 from '../../assets/AI4physio/diagram_1018716.png';
import Image4 from '../../assets/AI4physio/order-tracking_8378149.png';
import Image5 from '../../assets/AI4physio/chatbot_6667598.png';
import Image6 from '../../assets/AI4physio/hospital_4639208.png';
import Image7 from '../../assets/AI4physio/chatbot_6667598.png';
import Image8 from '../../assets/AI4physio/headache_16779854.png';
import Image9 from '../../assets/AI4physio/tuning_2254573.png';
import Image10 from '../../assets/AI4physio/monitoring_8756660.png';
import Image11 from '../../assets/AI4physio/smartwatch.png';

export default function AI4Physio() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardContents = [
    {
      title: "Personalized Treatment Plans",
      description: " AI4Physio creates tailored treatment programs that adapt dynamically to the specific needs and progress of each patient, ensuring individualized care.  ",
      image: Image1,
    },
    {
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and assessment of patient activities allow for precise data collection and timely interventions, improving the effectiveness of treatments.",
      image: Image2,
    },
    {
      title: "Predictive Analytics",
      description: "Utilizing AI-driven predictive analytics, AI4Physio forecasts patient outcomes and optimizes rehabilitation processes for more efficient",
      image: Image3, 
    },
    {
      title: "Automated Progress Tracking",
      description: "Streamlined progress tracking simplifies the evaluation of patient improvement, enabling therapists to adjust treatment plans based on real-time data.   ",
      image: Image4,
    },
    {
      title: "Virtual Assistants and Chatbots",
      description: "AI4Physio provides 24/7 support through virtual assistants and chatbots, assisting patients with their queries and guiding them through exercises, enhancing patient engagement.   ",
      image: Image5,
    },
    {
      title: "Remote Rehabilitation",
      description: " Patients can undergo effective rehabilitation from the comfort of their homes, with AI4Physio supporting remote treatment through real-time monitoring and guided therapy  ",
      image: Image6,
    },
    {
      title: "Motion Analysis",
      description: "AI-powered motion analysis identifies movement patterns and areas of concern, offering precise recovery strategies for optimized results.   ",
      image: Image7,
    },
    {
      title: "Pain Management",
      description: " AI4Physio introduces innovative, targeted interventions designed to alleviate pain and promote healing, improving overall patient wellbeing  ",
      image: Image8,
    },
    {
      title: "Adaptive Learning",
      description: " Advanced AI algorithms adapt to each patient’s progress, ensuring that care remains personalized and continually optimized for better outcomes.  ",
      image: Image9,
    },
    {
      title: "Enhanced Diagnostics",
      description: " With machine learning powered diagnostics, AI4Physio improves the identification of symptoms and recommends the most effective treatment  ",
      image: Image10,
    },
    {
      title: "Integration with Wearables",
      description: " AI4Physio seamlessly integrates with wearable devices, allowing for comprehensive monitoring and data collection to support more informed treatment decisions.  ",
      image: Image11,
    },
  ];

  return (
    <div className="min-h-screen text-black flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between p-10 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-center md:text-left">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white animate-fadeIn" style={{ fontFamily: 'Playfair Display, serif' }}>
            AI4Physio
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-200 animate-fadeIn" style={{ fontFamily: 'Playfair Display, serif' }}>
            Revolutionizing Physiotherapy with AI
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            AI4Physio is pioneering the future of physiotherapy by harnessing the power of advanced AI technologies to deliver innovative, personalized patient care.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={require('../../assets/Secuall/camera-3376230_1280.jpg')} // Replace with the appropriate image for AI4Physio
            alt="AI4Physio"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#081944' }}>Our Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContents.map((card, index) => (
            <div 
              key={index}
              className="text-black p-6 rounded-tl-3xl rounded-br-3xl border-4 border-black hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => toggleCard(index)}>
              <img src={card.image} alt={card.title} className="w-16 h-16 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Last Section */}
      <div className="py-16 px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Request a Demo</h2>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm">
            <label htmlFor="email" className="block text-left text-sm font-medium mb-2">Your Email Address</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button className="w-full p-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
