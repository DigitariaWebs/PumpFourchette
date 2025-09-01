"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <footer className="w-full bg-global-6 py-12 lg:py-16">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-end items-center gap-4 mb-12">
          <div className="flex items-center border border-[#e7e8e9] rounded-lg p-2 w-full lg:w-auto lg:min-w-[400px]">
            <Image 
              src="/images/img_email.svg" 
              alt="Email" 
              width={24} 
              height={24}
              className="w-6 h-6 ml-2"
            />
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0 focus:outline-none px-3 py-2"
              style={{ fontFamily: 'Roboto' }}
            />
          </div>
          <button 
            onClick={handleEmailSubmit}
            className="bg-orange-500 text-white font-medium text-base px-7 py-2.5 rounded hover:bg-orange-600 transition-colors"
            style={{ fontFamily: 'Inter' }}
          >
            Search
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-[27px] font-bold leading-[34px] text-gray-800 mb-4"
                style={{ fontFamily: 'Inter' }}>
              Pump Fourchette
            </h3>
            <p className="text-base font-normal leading-[28px] text-gray-700"
               style={{ fontFamily: 'Inter' }}>
              Chez Pump Fourchette, nous créons des repas qui rassemblent les familles et transforment chaque occasion en un moment mémorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
                style={{ fontFamily: 'Inter' }}>
              Liens rapides
            </h4>
            <div className="space-y-4">
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Accueil
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Services
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Agents
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Contact
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
                style={{ fontFamily: 'Inter' }}>
              Services
            </h4>
            <div className="space-y-4">
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Appels vocaux
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Visioconférences
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Rencontres
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold leading-[25px] text-gray-900 mb-4"
                style={{ fontFamily: 'Inter' }}>
              Ressources
            </h4>
            <div className="space-y-4">
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                FAQ
              </p>
              <p className="text-base font-normal leading-5 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Témoignages
              </p>
              <p className="text-base font-normal leading-6 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors"
                 style={{ fontFamily: 'Inter' }}>
                Comment ça marche
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm font-medium leading-[17px] text-gray-600 mb-4 sm:mb-0"
             style={{ fontFamily: 'Inter' }}>
            Pump Fourchette 2025.
          </p>
          <div className="flex items-center gap-6">
            <Image 
              src="/images/img_prime_twitter.svg" 
              alt="Twitter" 
              width={18} 
              height={18}
              className="w-[18px] h-[18px] hover:opacity-80 cursor-pointer transition-opacity"
            />
            <Image 
              src="/images/img_uil_linkedin.svg" 
              alt="LinkedIn" 
              width={24} 
              height={24}
              className="w-6 h-6 hover:opacity-80 cursor-pointer transition-opacity"
            />
            <Image 
              src="/images/img_ic_baseline_facebook.svg" 
              alt="Facebook" 
              width={24} 
              height={24}
              className="w-6 h-6 hover:opacity-80 cursor-pointer transition-opacity"
            />
            <Image 
              src="/images/img_mdi_instagram.svg" 
              alt="Instagram" 
              width={24} 
              height={24}
              className="w-6 h-6 hover:opacity-80 cursor-pointer transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
