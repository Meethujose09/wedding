import React from 'react';
import Contact from '../Contact/contact';
import Image1 from '../../assets/Sunnet/SusNet_home1.jpg';
import Image2 from '../../assets/Sunnet/artificial-intelligence_15777267.png';
import Image3 from '../../assets/Sunnet/growth-report_5329415.png';
import Image4 from '../../assets/Sunnet/component_14459238.png';
export default function SusNet() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f8] text-gray-800">
      {/* Page split into two columns, repeated twice */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section - SusNet Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left p-6 bg-white shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h1 className="text-5xl font-bold mb-2">SUSNET™</h1> {/* Reduced heading size */}
          <h2 className="text-3xl font-semibold mb-4">Empower Your Efficacy with SusNet</h2> {/* Reduced subheading size */}
          <p className="text-lg md:text-xl leading-relaxed mb-2 max-w-2xl">
            SusNet is a cutting-edge solution that integrates advanced artificial intelligence with state-of-the-art hardware to provide a comprehensive energy management system. Our network includes a variety of wireless devices that work together seamlessly to monitor, control, and optimize your energy consumption.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-6">
          <img
            src={Image1}
            alt="SusNet Home"
            className="h-auto rounded-lg shadow-lg"
            style={{ height: '350px', width: 'auto' }} // Adjusted height for a larger image
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Side: Heading and Paragraph */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left p-6 bg-white shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h1 className="text-5xl font-bold mb-4">Why Choose SusNet!</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
            Choose SusNetTM for AI-powered, fully automated energy management, offering a range of solutions designed to optimize energy usage, reduce costs, and promote sustainability.
          </p>
        </div>

        {/* Right Side: Rectangles */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6">
          <div className="flex flex-col space-y-3 w-full">
            {/* Rectangle 1 - Aligned Left */}
            <div className="border-4 border-black p-2 rounded-tl-3xl rounded-br-3xl shadow-lg w-7/12 self-start">
              <h2 className="text-center font-bold text-base mb-2">Advanced AI Algorithm</h2>
              <div className="flex mt-2">
                <div className="w-1/3 flex justify-center">
                  <img src={Image2} alt="AI Algorithm" className="h-16 w-auto rounded-lg shadow-md" />
                </div>
                <div className="w-2/3 flex items-center">
                  <p className="text-left text-xs">
                    SusNetTM is a fully automated energy management network led by AI techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Rectangle 2 - Aligned Right */}
            <div className="border-4 border-black p-2 rounded-tl-3xl rounded-br-3xl shadow-lg w-7/12 self-end">
              <h2 className="text-center font-bold text-base mb-2">Real-Time Optimization</h2>
              <div className="flex mt-2">
                <div className="w-1/3 flex justify-center">
                  <img src={Image3} alt="Real-Time Optimization" className="h-16 w-auto rounded-lg shadow-md" />
                </div>
                <div className="w-2/3 flex items-center">
                  <p className="text-left text-xs">
                    SusNetTM is enabled with global and local optimization for energy consumption via specific and highly correlational features (90%) with various IoT components.
                  </p>
                </div>
              </div>
            </div>

            {/* Rectangle 3 - Aligned Left */}
            <div className="border-4 border-black p-2 rounded-tl-3xl rounded-br-3xl shadow-lg w-7/12 self-start">
              <h2 className="text-center font-bold text-base mb-2">Easy Integration and Scalability</h2>
              <div className="flex mt-2">
                <div className="w-1/3 flex justify-center">
                  <img src={Image4} alt="Easy Integration" className="h-16 w-auto rounded-lg shadow-md" />
                </div>
                <div className="w-2/3 flex items-center">
                  <p className="text-left text-xs">
                    Easy and simple to install without any technical knowledge, featuring a simple UI to sign up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="bg-green-600 py-16 px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-white mb-8">
          Unlock Maximum Savings, Efficiency, and Sustainability with SusNet
        </h2>

        {/* Rectangles Container */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">

          {/* Rectangle 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/4 flex flex-col justify-center items-center">
            <h3 className="text-center font-bold text-xl mb-2">50% - 60%</h3>
            <p className="text-center text-sm">Energy Cost Reduction</p>
          </div>

          {/* Rectangle 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/4 flex flex-col justify-center items-center">
            <h3 className="text-center font-bold text-xl mb-2">25%</h3>
            <p className="text-center text-sm">Enhance Energy Efficiency</p>
          </div>

          {/* Rectangle 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/4 flex flex-col justify-center items-center">
            <h3 className="text-center font-bold text-xl mb-2">Up to 15%</h3>
            <p className="text-center text-sm">Reduction in Carbon Emissions</p>
          </div>
        </div>
      </div>
      <div className="py-8 px-4">
  {/* last */}
  <div className="py-16 px-4">
  {/* Heading */}
  <h2 className="text-center text-2xl font-bold mb-6">Request a Demo</h2>

  {/* Email Input and Button */}
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






      {/* Footer Component */}
      <Contact />
    </div>
  );
}
