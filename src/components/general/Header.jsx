import { useState } from 'react';
import { Link } from 'react-router';
import navLogo from '/images/navbar/navLogo.svg';
import Language from '../icons/navbar/Language';
import Profile from '../icons/navbar/Profile';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <nav className="relative container">
            <div className="flex items-center justify-between px-4 py-2">
                <img src={navLogo} alt="Logo" />

                <div className="hidden lg:flex space-x-4 ml-10">
                    <Link to="/" className="text-[#101010] text-lg font-medium px-4">Home</Link>
                    <Link to="/providers" className="text-[#101010] text-lg font-medium px-4">Providers</Link>
                    <Link to="/categories" className="text-[#101010] text-lg font-medium px-4">Categories</Link>
                    <Link to="/about" className="text-[#101010] text-lg font-medium px-4">About Us</Link>
                    <Link to="/contact" className="text-[#101010] text-lg font-medium px-4">Contact Us</Link>
                </div>

                <div className="lg:flex hidden items-center gap-4 pl-12">
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
                className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:hidden`}
            >
                <div className="flex flex-col space-y-4 p-6">
                    <Link to="/providers" className="py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Providers</Link>
                    <Link to="/categories" className="py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Categories</Link>
                    <Link to="/about" className="py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    <Link to="/" className="py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Language</Link>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={toggleMenu}
                />
            )}


        </nav>
    );
};

export default Header;
