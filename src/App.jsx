import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';  // import your navbar component

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUS';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
import GuestNotes from './pages/GuestNotes/GuestNotes';
import Gallery from './pages/Gallery/Gallery';
import FeedBack from './pages/Feedback/Feedback';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'; // Optional: global styles like scroll-smooth

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);
  const guestnotesRef = useRef(null);
  const galleryRef = useRef(null);
  const feedbackRef = useRef(null);
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always scroll to top on load
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();  // Disable right-click anywhere
    };
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Function to handle scroll from Navbar
  const scrollToSection = (section) => {
    switch (section) {
      case 'home': homeRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'about': aboutRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'location': locationRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'contact': contactRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'guestnotes': guestnotesRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'gallery': galleryRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'feedback': feedbackRef.current?.scrollIntoView({ behavior: 'smooth' }); break;
      default: break;
    }
  };

  return (
    <div className="App scroll-smooth">
      {/* Pass the scroll function as prop to Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Sections */}
      <div ref={homeRef} id="home"><Home /></div>
      <div ref={aboutRef} id="aboutus"><AboutUs /></div>
       <div ref={galleryRef} id="gallery"><Gallery /></div>
      <div ref={locationRef} id="location"><Location /></div>
      <div ref={guestnotesRef} id="guestnotes"><GuestNotes /></div>
      <div ref={feedbackRef} id="gallery"><FeedBack /></div>
      <div ref={contactRef} id="contact"><Contact /></div>
     

      <footer className="py-6 text-center text-[#e6d7ca] bg-black">
        <p className="font-elegist text-sm italic">
          Made with ❤️ by Meethu & Akhil | © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
