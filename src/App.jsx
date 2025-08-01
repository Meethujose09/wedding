import React, { useRef, useEffect } from 'react';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUS';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
import GuestNotes from './pages/GuestNotes/GuestNotes';
import Gallery from './pages/Gallery/Gallery';
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

  return (
    <div className="App scroll-smooth">

      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 text-white p-4 flex gap-6 justify-center shadow-md backdrop-blur-md">
        <button onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition">Home</button>
        <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition">About</button>
        <button onClick={() => locationRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition">Location</button>
        <button onClick={() => guestnotesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition"> Send wishes</button>
        <button onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition">Contact</button>
        <button onClick={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#f2c49b] transition">Gallery</button>

      </nav>

      {/* Add top padding to offset fixed navbar */}
      <div ref={homeRef} id="home">
        <Home />
      </div>

      <div ref={aboutRef} id="aboutus">
        <AboutUs />
      </div>
      <div ref={galleryRef} id="contact">
        <Gallery />
      </div>
      <div ref={locationRef} id="location">
        <Location />
      </div>
      <div ref={guestnotesRef} id="location">
        <GuestNotes />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>

      <footer className="py-6 text-center text-[#e6d7ca] bg-black">
        <p className="font-elegist text-sm italic">
          Made with ❤️ by Meethu & Akhil | © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
