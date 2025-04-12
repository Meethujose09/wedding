import React from 'react';
import f6sLogo from '../../assets/f6s-logo.45780d2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css'; // Ensure you include your CSS file for styling

export default function Contact() {
  return (
    <footer className="footer bg-[#081944] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <p className="text-sm">
              SuperSet<br />
              Sandyford, Dublin 18<br />
              Dublin, Ireland
            </p>
            <p className="mt-3 text-sm">
              <FontAwesomeIcon icon={faPhone} /> <span className="ml-2">+353 89 983 2147</span>
            </p>
          </div>

          {/* Product and Service Queries */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Queries</h4>
            <div className="flex flex-col space-y-2">
              <div className="query-section">
                <h5 className="text-md font-semibold">Product Related Queries</h5>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                  <a href="mailto:products@hitoai.ai" className="underline hover:text-blue-400">products@SuperSet.ai</a>
                </p>
              </div>
              <div className="query-section">
                <h5 className="text-md font-semibold">Service Related Queries</h5>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                  <a href="mailto:services@hitoai.ai" className="underline hover:text-blue-400">services@SuperSet.ai</a>
                </p>
              </div>
              <div className="query-section">
                <h5 className="text-md font-semibold">General Inquiries</h5>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                  <a href="mailto:info@hitoai.com" className="underline hover:text-blue-400">info@SuperSet.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition duration-200">About</a></li>
              <li><a href="/updates" className="hover:text-blue-400 transition duration-200">Updates</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-follow flex justify-center mt-8">
          
          <a href="linkedin.com/in/abhinav-sebastian-7b0460254" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200 mx-4">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200 mx-4">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          {/* Hide Twitter and Instagram icons */}
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200 mx-4">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200 mx-4">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a> */}
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center mt-8 text-sm bg-[#081944]">
          <p>&copy; 2025 SuperSet - All Rights Reserved.</p>
          <p className="mt-2 text-xs">
            &copy; INTELLECTUAL PROPERTY RIGHTS: All The Videos, Demos, Drawings, Graphics And Text Are The Works Of SuperSet Limited And Are Protected By Copyright. No Part Of These Works May Be Reproduced Without Permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
