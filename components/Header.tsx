"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              webuild.ge
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#examples"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Examples
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </a>
          </nav>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 font-medium hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
