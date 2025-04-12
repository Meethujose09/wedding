import React, { useState } from 'react';
import Contact from '../Contact/contact'; 

function Aimarcom() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDemoRequest = (e) => {
        e.preventDefault();
        console.log('Requesting demo for:', email);
        // Handle demo request logic here
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f0f4f8] text-gray-800">
            {/* Page split into two columns */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Left Section - Aimarcom Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center p-10 bg-[#ffffff] shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h1 className="text-5xl font-bold mb-6">AIMARCOM</h1>
                    <p className="text-lg leading-relaxed mb-4">1. Personalization and Customer Engagement</p>
                    <p className="text-lg leading-relaxed mb-4">2. Predictive Analytics and Insights</p>
                    <p className="text-lg leading-relaxed mb-4">3. Automation and AI-driven Efficiency</p>
                    <p className="text-lg leading-relaxed mb-4">4. Security and Improved Search Functionality</p>
                </div>

                {/* Right Section - Demo Request Form */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#ffffff] p-10">
                    <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Request a Demo</h2>
                        <form onSubmit={handleDemoRequest} className="flex flex-col space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            >
                                Request Demo
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Contact />
        </div>
    );
}

export default Aimarcom;
