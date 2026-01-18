import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Scent<span className="text-amber-500">-Master</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Discover premium fragrances crafted to define your personality.
            Experience luxury, elegance, and long-lasting impressions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-amber-500 transition">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Email: support@scentmaster.com</li>
            <li>Location: India</li>
            <li>Available: 24/7 Support</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Scent-Master. All rights reserved.
        <br />
        Built with ❤️ by{" "}
        <span className="text-amber-500 font-medium">
          Sonal Kumar Mandal
        </span>
      </div>
    </footer>
  );
};

export default Footer;
