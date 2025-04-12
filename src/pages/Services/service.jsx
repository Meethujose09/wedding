import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Import images
import energyImage from "../../assets/energy.jpg";
import financeImage from "../../assets/finance.jpg";
import technologyImage from "../../assets/technology.jpg";

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-6">
    <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce={true}>
      <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
    </ScrollAnimation>

    {/* Energy Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
        <div className="relative w-full h-96">
          <img 
            src={energyImage} 
            alt="Energy Service" 
            className="w-full h-full object-contain rounded-lg shadow-lg" 
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Energy</h2>
          <p className="text-lg">
            We optimise energy use and reduce costs with AI-driven systems, seamlessly integrating renewables using advanced algorithms, ensuring sustainability and efficiency.
          </p>
        </div>
      </ScrollAnimation>
    </div>

    {/* Finance Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Finance</h2>
          <p className="text-lg">
            We tackle challenges in energy management by optimising usage and reducing costs with AI-driven systems, integrating renewables and enhancing reliability.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
        <div className="relative w-full h-96">
          <img 
            src={financeImage} 
            alt="Finance Service" 
            className="w-full h-full object-contain rounded-lg shadow-lg" 
          />
        </div>
      </ScrollAnimation>
    </div>

    {/* Technology Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <ScrollAnimation animateIn="fadeInLeft" duration={1.5} animateOnce={true}>
        <div className="relative w-full h-96">
          <img 
            src={technologyImage} 
            alt="Technology Service" 
            className="w-full h-full object-contain rounded-lg shadow-lg" 
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={1.5} animateOnce={true}>
        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Technology</h2>
          <p className="text-lg">
            We leverage AI to transform daily life by integrating intelligent systems into everyday processes, enhancing efficiency and driving innovation.
          </p>
        </div>
      </ScrollAnimation>
    </div>

    {/* Schedule An Appointment Section */}
    <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce={true}>
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Schedule An Appointment</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="p-4 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded border border-gray-300"
          />
          <select className="p-4 rounded border border-gray-300">
            <option>Select Service</option>
            <option>Consultancy in AI</option>
          </select>
          <textarea
            placeholder="What best characterizes your business?"
            className="col-span-2 p-4 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
          >
            Submit Now
          </button>
        </form>
      </div>
    </ScrollAnimation>
  </div>
);
};

export default Services;