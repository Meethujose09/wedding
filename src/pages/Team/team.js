import React from "react";
import Slider from "react-slick";
import { FaLinkedin } from 'react-icons/fa'; // Only LinkedIn icon
import "./team.css";

const TeamPage = ({ sliderData }) => {
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    const GalleryPrevArrow = ({ onClick }) => (
        <div className="custom-prevArrow" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
        </div>
    );

    const GalleryNextArrow = ({ onClick }) => (
        <div className="custom-nextArrow" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
        </div>
    );

    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-20 px-4 lg:px-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
            <Slider {...settings}>
                {sliderData.map((member, index) => (
                    <div key={index} className="team-card bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center h-[450px] overflow-hidden">
                        <img src={member.image} alt={member.name} className="team-image w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-200" />
                       
                        <div className="team-info text-center">
                            <h3 className="team-name text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="team-position text-gray-600">{member.position}</p>
                            <div className="team-description h-24 mt-2 overflow-y-auto scrollbar-hide">
                                <p className="text-gray-700">{member.description}</p>
                            </div>
                            <div className="flex space-x-3 mt-4">
                           
                                <a href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                                    <FaLinkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamPage;
