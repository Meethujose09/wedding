import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

// Import images
import Image1 from '../../assets/selwell/finance-8154775_1280.jpg';
import Image2 from "../../assets/selwell/robo.webp";
import Image3 from "../../assets/selwell/EndToEnd.webp";
import Image4 from "../../assets/selwell/statistical.webp";


export default function Selwell() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-black flex flex-col">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between p-10 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-center md:text-left">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-6xl font-bold mb-4 text-white animate-fadeIn" style={{ fontFamily: 'Playfair Display, serif' }}>
            Selwell: Optimizing
            Trading with AI
          </h1>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Selwell is an advanced trading platform designed
            specifically for financial institutions to optimize profits
            while reducing risks associated with trading shares of
            globally recognized companies.
          </p>

          {/* Coming Soon Section */}
          <div className="md:w-full mt-10 md:mt-0 flex justify-center items-center">
            <div className="bg-white text-black py-2 px-5 rounded-lg shadow-lg max-w-xl w-full animate-fadeInUp">
              <h2 className="text-2xl font-semibold mb-4 text-center">Coming Soon: Personal Version</h2>
              <p className="text-lg text-center">A personal version of Selwell will soon be available for individual traders.</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={Image1} alt="Selwell Trading Platform" className="w-3/4 h-auto object-cover animate-fadeInUp" />
        </div>
      </div>

      <div className="container mx-auto py-12 px-6">

{/* Fully Automated Trading Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
  <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
    <div className="relative w-full h-72"> {/* Reduced height */}
      <img
        src={Image2}
        alt="Energy Service"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
    <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg text-black">
      <h2 className="text-3xl font-semibold mb-4">Fully Automated Trading</h2>
      <p className="text-lg max-w-lg"> {/* Added max-w-lg to limit paragraph width */}
        Selwell is a fully automated and AI-powered trading platform.
      </p>
    </div>
  </ScrollAnimation>
</div>

{/* Hybrid AI Models Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
  <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
    <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg text-black">
      <h2 className="text-3xl font-semibold mb-4">Hybrid AI Models</h2>
      <p className="text-lg max-w-lg"> {/* Added max-w-lg to limit paragraph width */}
        Built on top of hybrid models combining Statistical Learning/ML and Deep Learning.
      </p>
    </div>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
    <div className="relative w-full h-72">
      <img
        src={Image3}
        alt="Finance Service"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </ScrollAnimation>
</div>

{/* Personal Version Coming Soon Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
  <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
    <div className="relative w-full h-72">
      <img
        src={Image4}
        alt="Technology Service"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
    <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg text-black">
      <h2 className="text-3xl font-semibold mb-4">Personal Version Coming Soon</h2>
      <p className="text-lg max-w-lg"> {/* Added max-w-lg to limit paragraph width */}
        Secured with encryption powered by Google infrastructure, ensuring safe trading.
      </p>
    </div>
  </ScrollAnimation>
</div>

</div>



    </div>
  );
}


