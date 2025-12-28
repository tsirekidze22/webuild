"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: t("hero-slide-repair"),
      image: "/demos/repair-preview.jpg",
    },
    {
      id: 2,
      title: t("hero-slide-plumbing"),
      image: "/demos/plumbing-preview.jpg",
    },
    {
      id: 3,
      title: t("hero-slide-cleaning"),
      image: "/demos/cleaning-preview.jpg",
    },
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="bg-white py-20 md:pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content (2/3 width) */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {t("hero-title")}
              <br />
              <span className="text-blue-600">{t("hero-subtitle")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              {t("hero-description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#examples"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                {t("hero-cta-primary")}
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-semibold text-center"
              >
                {t("hero-cta-secondary")}
              </a>
            </div>

            {/* Simple stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {t("hero-stat-price")}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {t("hero-stat-price-label")}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {t("hero-stat-time")}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {t("hero-stat-time-label")}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {t("hero-stat-local")}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {t("hero-stat-local-label")}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Slider */}
          <div className="relative">
            <div className="relative max-w-xs mx-auto lg:max-w-sm">
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                {/* Screen */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                  <div className="relative w-full h-full">
                    {heroSlides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="w-full h-full bg-gray-50 flex flex-col">
                          {/* Mock header */}
                          <div className="bg-white border-b border-gray-200 p-4 pt-8">
                            <div className="h-3 bg-gray-900 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                          </div>

                          {/* Mock content */}
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

                          {/* Caption overlay */}
                          <div className="absolute bottom-6 left-4 right-4">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-gray-100">
                              <p className="text-xs font-bold text-gray-900">
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
              <div className="flex justify-center gap-2 mt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 w-2"
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
