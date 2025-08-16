import React from 'react'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LOGO from '../assets/logo.png'

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm flex justify-between items-center p-2 mx-auto">
            <div className="flex items-center">
                <a href="#home">
                    <img src={LOGO} alt="logo" className='h-14 w-auto bg-cover' />
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
                <a href="#home" className="hover:text-gray-900 transition-colors text-sm lg:text-base">Home</a>
                <a href="#" className="hover:text-gray-900 transition-colors text-sm lg:text-base">Listing</a>
                <a href="#" className="hover:text-gray-900 transition-colors text-sm lg:text-base">Let's move</a>
                <a href="#" className="hover:text-gray-900 transition-colors text-sm lg:text-base">About us</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden border-t border-gray-100">
                    <nav className="flex flex-col p-4 space-y-3">
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-2">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-2">Listing</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-2">Let's move</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors py-2">About us</a>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header