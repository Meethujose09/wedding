import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Contact from './pages/Contact/contact';
import Products from './pages/Products/product';
import Partners from './pages/Partners/Partners';
import Team from './pages/Team/team';
import About from './pages/About/about';
import Contactmail from './pages/Contact/contactmail';
import Service from './pages/Services/service';
import Susnet from './pages/Susnet/Susnet';
import Selwell from './pages/Selwell/Selwell';
import Secuall from './pages/Secuall/Secuall';
import Knomed from './pages/Knomed/Knomed';
import Depth from './pages/Depth/Depth';
import Aimarcom from './pages/Aimarcom/Aimarcom';
import AI4Physio from './pages/AI4Physio/AI4Physio';
import data from "./data.json";
import { FaRobot } from 'react-icons/fa'; 
import ActiveExperts from './pages/ActiveExperts';
function App() {
    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const servicesRef = useRef(null);
    const updatesRef = useRef(null);
    const partnersRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);
    const aboutRef = useRef(null);

    // Add a function to handle chatbot click
    const handleChatbotClick = () => {
        // alert("Chatbot clicked! Implement chatbot functionality here.");
    };

    return (
        <div className="App">
            <Header
                homeRef={homeRef}
                productsRef={productsRef}
                servicesRef={servicesRef}
                updatesRef={updatesRef}
             
                teamRef={teamRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />
            {/* Define Routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div ref={homeRef}><Home /></div>
                            <div ref={aboutRef}><About /></div>
                            {/* <div ref={partnersRef}><Partners /></div> */}
                            {/* <div ref={teamRef}><Team sliderData={data} /></div> */}
                            <div ref={contactRef}><Contact /></div>
                        </>
                    }
                />
                <Route path='/susnet' element={<Susnet />} />
                <Route path='/selwell' element={<Selwell />} />
                <Route path='/secuall' element={<Secuall />} />
                <Route path='/knomed' element={<Knomed />} />
                <Route path='/depth' element={<Depth />} />
                <Route path='/aimarcom' element={<Aimarcom />} />
                <Route path='/ai4physio' element={<AI4Physio />} />
                <Route path='/contact' element={<Contactmail />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path="/active-experts" element={<ActiveExperts />} />
            </Routes>

            {/* Floating Chatbot Icon */}
            {/* <div className="fixed bottom-6 right-6 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg cursor-pointer transition-colors duration-300" onClick={handleChatbotClick}>
                <FaRobot className="text-2xl" />
                <span className="hidden md:inline-block font-semibold">chat</span>
            </div> */}
        </div>
    );
}

export default App;
