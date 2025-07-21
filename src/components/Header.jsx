import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Logo from '../assets/Secondary Logo 1.png';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({
    homeRef,
    productsRef,
    partnersRef,
    teamRef,
    contactRef
}) {
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav);
    };

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Query:', searchQuery);
    };

    const closeNav = () => {
        setNav(false); // Close the navigation
    };

    return (
        <div className="w-full h-24 flex justify-between items-center px-4 text-white bg-[#081944]">
            <div className="flex items-center">
                <img src={Logo} width="200px" height="200px" className="rounded-full" alt="Logo" />
                {/* <h1 className="text-3xl font-bold text-white ml-4">superset </h1> */}
            </div>
  {/* Search Bar */}
  {/* <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-full px-4 py-1 w-1/3">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow p-2 text-black rounded-l-full focus:outline-none"
                />
                <button type="submit" className="p-2 text-black">
                    <AiOutlineSearch size={20} />
                </button>
            </form> */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
            <button className="text-lg hover:text-gray-300" onClick={() => navigate('/superset')}>Home</button>
                {/* <button className="text-lg hover:text-gray-300" onClick={() => navigate('/service')}>Services</button> */}
                <button className="text-lg hover:text-gray-300" onClick={() => navigate('/about')}>About</button>
                <button className="text-lg hover:text-gray-300" onClick={() => navigate('/contact')}>Contact</button>
            </div>

          

            {/* Mobile Navigation Toggle */}
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                <AiOutlineMenu size={30} className="text-white" />
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`${
                    nav ? 'fixed left-0 top-0 w-[70%] h-full bg-[#081944] text-white shadow-xl ease-in-out duration-500 z-50' : 'fixed left-[-100%] ease-in-out duration-500 z-50'
                } md:hidden`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <img src={Logo} width="50px" height="50px" className="rounded-full" alt="Logo" />
                    <h1 className="text-2xl font-bold">Superset</h1>
                    <AiOutlineClose size={25} className="cursor-pointer" onClick={handleNav} />
                </div>

                {/* Links */}
                <ul className="text-lg font-medium space-y-6 p-4">
                    <li className="p-2 hover:bg-[#0c2e7a] rounded-md cursor-pointer transition" onClick={() => { navigate('/superset'); closeNav(); }}>
                        Home
                    </li>
                    {/* <li className="p-2 hover:bg-[#0c2e7a] rounded-md cursor-pointer transition" onClick={() => { navigate('/active-experts'); closeNav(); }}>
                    Active Experts
                    </li> */}
                    {/* <li className="p-2 hover:bg-[#0c2e7a] rounded-md cursor-pointer transition" onClick={() => { navigate('/service'); closeNav(); }}>
                        Services
                    </li> */}
                    <li className="p-2 hover:bg-[#0c2e7a] rounded-md cursor-pointer transition" onClick={() => { navigate('/about'); closeNav(); }}>
                        About
                    </li>
                    <li className="p-2 hover:bg-[#0c2e7a] rounded-md cursor-pointer transition" onClick={() => { navigate('/contact'); closeNav(); }}>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}
