import React from "react";
import './partners.css';
import ScrollAnimation from "react-animate-on-scroll";
import PartnersData from '../../partners.json';
import Investors from '../../investors.json';

export default function Partners() {
    return (
        <div className="slider-container flex flex-col min-h-screen items-center justify-center bg-gray-100 p-2"> {/* Further reduced padding */}
            <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
                <h1 className="mb-6 text-center text-4xl md:text-3xl lg:text-4xl  font-sans font-bold leading-tight text-gray-800"> {/* Further reduced text size */}
                    Our Partners
                </h1>
            </ScrollAnimation>
            <div className="hard-skills flex flex-wrap items-center justify-center mb-6"> {/* Reduced margin bottom */}
                {PartnersData.map((slide, index) => (
                    <div className="hability mx-2 mb-4" key={index}> {/* Reduced margin sizes */}
                        <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                            <div className="p-2 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"> {/* Reduced padding */}
                                <img src={slide.image} alt="Partner" className="w-24 h-24 object-contain" /> {/* Further reduced image size */}
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
            <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
                <h1 className="mb-6 text-center text-4xl md:text-3xl lg:text-4xl font-sans font-bold leading-tight text-gray-800"> {/* Further reduced text size */}
                    Our Investors and Accelerators
                </h1>
            </ScrollAnimation>
            <div className="hard-skills flex flex-wrap items-center justify-center">
                {Investors.map((slide, index) => (
                    <div className="hability mx-2 mb-4" key={index}> {/* Reduced margin sizes */}
                        <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                            <div className="p-2 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"> {/* Reduced padding */}
                                <img src={slide.image} alt="Investor" className="w-24 h-24 object-contain" /> {/* Further reduced image size */}
                            </div>
                        </ScrollAnimation>
                    </div>
                ))}
            </div>
        </div>
    );
}
