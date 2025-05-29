import { useState } from 'react';
import { Link } from 'react-router';
import navLogo from '/images/navbar/navLogo.svg';
import Language from '../icons/navbar/Language';
import Profile from '../icons/navbar/Profile';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <nav className="relative">
            <div className="flex items-center justify-between px-4 py-2">
                <img src={navLogo} alt="Logo" />

                <div className="hidden lg:flex space-x-4 ml-10">
                    <Link to="/" className="text-[#101010] text-lg font-medium px-4">Home</Link>
                    <Link to="/providers" className="text-[#101010] text-lg font-medium px-4">Providers</Link>
                    <Link to="/categories" className="text-[#101010] text-lg font-medium px-4">Categories</Link>
                    <Link to="/about" className="text-[#101010] text-lg font-medium px-4">About Us</Link>
                    <Link to="/contact" className="text-[#101010] text-lg font-medium px-4">Contact Us</Link>
                </div>

                <div className="flex items-center gap-4 pl-12">
                    <Language />
                    <Profile />
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`absolute left-0 right-0 top-full mt-1 z-10 lg:hidden transition-all duration-300 ease-in-out bg-white shadow-md rounded-md overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col space-y-1 px-4 py-2">
                    <Link to="/dashboard" className="py-2 text-gray-800">Dashboard</Link>
                    <Link to="/team" className="py-2 text-gray-800">Team</Link>
                    <Link to="/projects" className="py-2 text-gray-800">Projects</Link>
                    <Link to="/calendar" className="py-2 text-gray-800">Calendar</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
