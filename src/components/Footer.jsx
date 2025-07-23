import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white pt-10 pb-4 z-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Shortalytics</h2>
          <p className="text-sm text-gray-200">
            Simplifying URL shortening for efficient sharing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/features" className="hover:underline">Features</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Centered Copyright */}
      <div className="mt-10 text-center">
        <p className="text-xs text-gray-300">
          &copy; 2025 Shortalytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
