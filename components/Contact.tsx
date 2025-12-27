"use client";

import { useState } from "react";

const contactMethods = [
  {
    id: 1,
    type: "Phone",
    value: "+995 555 123 456",
    href: "tel:+995555123456",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
    description: "Call us anytime",
  },
  {
    id: 2,
    type: "WhatsApp",
    value: "Message Us",
    href: "https://wa.me/995555123456",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    gradient: "from-green-500 to-green-600",
    description: "Quick response",
  },
  {
    id: 3,
    type: "Email",
    value: "hello@webuild.ge",
    href: "mailto:hello@webuild.ge",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
    description: "Send us a message",
  },
];

export default function Contact() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full mb-6">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-semibold text-blue-700">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact us today and let&apos;s discuss your business website. Choose
            whichever way is easiest for you.
          </p>
        </div>

        {/* Contact methods */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.type === "WhatsApp" ? "_blank" : undefined}
                rel={
                  method.type === "WhatsApp" ? "noopener noreferrer" : undefined
                }
                onMouseEnter={() => setHoveredId(method.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative block"
              >
                <div
                  className={`relative h-full bg-white rounded-3xl p-8 border-2 border-gray-200 transition-all duration-500 ${
                    hoveredId === method.id
                      ? "shadow-2xl shadow-gray-300/50 scale-105 -translate-y-2 border-transparent"
                      : "hover:shadow-xl"
                  }`}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      method.gradient
                    } flex items-center justify-center mb-6 transition-transform duration-500 ${
                      hoveredId === method.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <div className="text-white">{method.icon}</div>
                    {/* Pulsing ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.gradient} animate-ping opacity-0 group-hover:opacity-30`}
                    ></div>
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {method.type}
                  </div>

                  {/* Value */}
                  <div className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {method.value}
                  </div>

                  {/* Description */}
                  <div className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <span className="text-sm font-semibold">Contact now</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Response time note */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">
                  Quick Response Time
                </div>
                <div className="text-sm text-gray-600">
                  We typically respond within a few hours during business days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Or scroll up to see our work and pricing
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#examples"
              className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105"
            >
              View Examples
            </a>
            <a
              href="#pricing"
              className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
