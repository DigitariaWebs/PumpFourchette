"use client"

import Link from "next/link";
import { useState } from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <footer className="w-full bg-global-6 py-12 lg:py-16">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-[color:var(--color-brand)] mb-8" />
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-end items-center gap-4 mb-12">
          <div className="flex items-center border border-[#e7e8e9] rounded-lg  w-full lg:w-auto lg:min-w-[400px] focus-within:border-[color:var(--color-brand)]">
            <Mail className="w-6 h-6 ml-2" />
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0 focus:outline-none px-3 py-2"
              style={{ fontFamily: "Roboto" }}
            />
          </div>
          <button
            onClick={handleEmailSubmit}
            className="bg-[color:var(--color-brand)] text-[color:var(--color-text)] font-medium text-base px-7 py-2 rounded hover:bg-[color:var(--color-accent)] hover:text-white transition-colors cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            Envoyer
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3
              className="text-[27px] font-bold leading-[34px] text-gray-800 mb-4"
              style={{ fontFamily: "Inter" }}
            >
              Pump Fourchette
            </h3>
            <p
              className="text-base font-normal leading-[28px] text-gray-700"
              style={{ fontFamily: "Inter" }}
            >
              Chez Pump Fourchette, nous créons des repas qui rassemblent les
              familles et transforment chaque occasion en un moment mémorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
              style={{ fontFamily: "Inter" }}
            >
              Liens rapides
            </h4>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Nos Services
              </Link>
              <Link
                href="#menu"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Menu
              </Link>
              <Link
                href="#contact"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
              style={{ fontFamily: "Inter" }}
            >
              Services
            </h4>
            <div className="space-y-4">
              <Link
                href="#repas-fete"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Repas de fête
              </Link>
              <Link
                href="#traiteur"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Traiteur
              </Link>
              <Link
                href="#evenements"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Événements spéciaux
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
              style={{ fontFamily: "Inter" }}
            >
              Ressources
            </h4>
            <div className="space-y-4">
              <Link
                href="#faq"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                FAQ
              </Link>
              <Link
                href="#testimonials"
                className="block text-base font-normal leading-5 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Témoignages
              </Link>
              <Link
                href="/apropre"
                className="block text-base font-normal leading-6 text-gray-700 hover:text-[color:var(--color-accent)] cursor-pointer transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                À propos
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[var(--color-brand)]">
          <p
            className="text-sm font-medium leading-[17px] text-gray-600 mb-4 sm:mb-0"
            style={{ fontFamily: "Inter" }}
          >
            Pump Fourchette 2025.
          </p>
          <div className="flex items-center gap-6">
            <Facebook className="w-6 h-6 hover:opacity-80 cursor-pointer transition-opacity" />
            <Instagram className="w-6 h-6 hover:opacity-80 cursor-pointer transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}
