"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { id: 1, title: "Home Repair Demo", image: "/demos/repair-preview.jpg" },
    { id: 2, title: "Plumbing Demo", image: "/demos/plumbing-preview.jpg" },
    { id: 3, title: "Cleaning Demo", image: "/demos/cleaning-preview.jpg" },
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="bg-white py-20 md:pt-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Simple, Professional Websites
              <br />
              <span className="text-blue-600">for Local Businesses</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Get a mobile-friendly website that helps customers find you and
              contact you easily. No complicated setup, no hidden costs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#examples"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                See Examples
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-semibold text-center"
              >
                Contact Us
              </a>
            </div>

            {/* Simple stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  600₾
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Fixed Price
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  7 Days
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Fast Setup
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  Local
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Tbilisi Based
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Slider */}
          <div className="relative">
            <div className="relative max-w-xs mx-auto lg:max-w-sm">
              {/* Mobile frame mockup */}
              <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                {/* Screen */}
                <div className="relative bg-white rounded-2xl overflow-hidden aspect-[9/16]">
                  {/* Slider content */}
                  <div className="relative w-full h-full">
                    {heroSlides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/* Placeholder for actual screenshot */}
                        <div className="w-full h-full bg-gray-50 flex flex-col">
                          {/* Mock header */}
                          <div className="bg-white border-b border-gray-200 p-4">
                            <div className="h-3 bg-gray-900 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                          </div>

                          {/* Mock hero section */}
                          <div className="p-4 space-y-3">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div className="flex gap-2 mt-4">
                              <div className="h-7 bg-blue-600 rounded w-20"></div>
                              <div className="h-7 bg-gray-200 rounded w-16"></div>
                            </div>
                          </div>

                          {/* Mock gallery */}
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="h-24 bg-gray-200 rounded"></div>
                              <div className="h-24 bg-gray-200 rounded"></div>
                              <div className="h-24 bg-gray-200 rounded"></div>
                              <div className="h-24 bg-gray-200 rounded"></div>
                            </div>
                          </div>

                          {/* Caption */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                              <p className="text-xs font-semibold text-gray-900">
                                {slide.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider dots */}
              <div className="flex justify-center gap-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
