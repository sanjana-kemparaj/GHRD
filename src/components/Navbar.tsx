"use client"

import Link from "next/link"
import { useState } from "react";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/../public/logo.png";

const navLinks = [
    {href:"/", label:"Home"},
    {href:"/about", label:"About"},
    {href:"/services", label:"Services"},
    {href:"/chapters", label:"Chapters"},
    {href:"/events", label:"Events"},
    {href:"/contact", label:"Contact"},
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
 
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between"> {/* Increased height for better spacing */}
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            {/* Replace with your actual logo */}
                            <Image
                                src={logo} //  <<<<<===== IMPORTANT: Place your logo in the `public` folder (e.g., public/ghrd-logo.png)
                                alt="GHRD Logo"
                                width={120} // Adjust as needed
                                height={40} // Adjust as needed
                                className="h-30 w-auto top-0" // Adjust based on your logo's aspect ratio
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
                        <div className="flex items-baseline space-x-6"> {/* Increased space-x */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Get Membership Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/membership"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-md text-sm transition-colors duration-150"
                        >
                            Get Membership
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu, show/hide based on menu state */}
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/membership"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-blue-600 hover:bg-blue-700 text-white block w-full text-center font-semibold mt-4 py-2.5 px-6 rounded-md text-sm transition-colors duration-150"
                        >
                            Get Membership
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar


