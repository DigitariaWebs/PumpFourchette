'use client';
import React, { useState } from 'react';
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFrench, setIsFrench] = useState(true);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Québec, Canada");

  const toggleLanguage = () => {
    setIsFrench(!isFrench);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const selectLocation = (location: string) => {
    setCurrentLocation(location);
    setLocationDropdownOpen(false);
  };

  return (
    <header
      className={`w-full bg-white shadow-md border-b border-[var(--color-border)] sticky top-0 z-100 ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-3 rounded-lg hover:bg-[var(--color-pastel-neutral)] transition-colors duration-200"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-[var(--color-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Main Header Content */}
          <div
            className={`${
              menuOpen
                ? "block absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border)] shadow-lg lg:shadow-none lg:border-none lg:static lg:bg-transparent"
                : "hidden"
            } lg:flex w-full justify-between items-center lg:gap-8 p-4 lg:p-0`}
          >
            {/* Left Section with Logo and Search */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 xl:gap-12 w-full lg:w-auto">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start lg:flex-shrink-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text)] whitespace-nowrap">
                  Pump Fourchette
                </h1>
              </div>

              {/* Search Bar */}
              <div className="flex items-center bg-[var(--color-brand-light)] hover:bg-[var(--color-pastel-gold)] focus-within:bg-[var(--color-pastel-gold)] rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 transition-colors duration-200 w-full lg:w-auto lg:min-w-[500px] xl:min-w-[650px] shadow-sm border border-transparent focus-within:border-[var(--color-brand)] focus-within:shadow-md">
                <svg
                  className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Recherchez . . ."
                  className="ml-3 bg-transparent text-sm font-normal text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none flex-1"
                />
              </div>
            </div>

            {/* Right Section with Language and Location */}
            <div className="flex flex-col sm:flex-row items-center gap-18 lg:gap-16 mt-6 lg:mt-0">
              {/* Language Selector */}
              <div
                className="flex items-center gap-2 cursor-pointer hover:bg-[var(--color-pastel-neutral)] px-3 py-2 rounded-lg transition-colors duration-200 group w-24 justify-center"
                onClick={toggleLanguage}
              >
                <div className="flex items-center gap-2 w-full justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] transition-colors duration-200 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors duration-200 min-w-0">
                    {isFrench ? "Français" : "English"}
                  </span>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex items-center gap-4">
                <button className="p-1 hover:bg-[var(--color-pastel-neutral)] rounded-lg transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[var(--color-brand)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>

                <div className="flex flex-col relative">
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                    Ta localisation
                  </span>
                  <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={toggleLocationDropdown}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[var(--color-brand)] group-hover:text-black transition-colors duration-200 w-36 text-center">
                      {currentLocation}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#111827] group-hover:text-black transition-all duration-200 ${
                        locationDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </div>

                  {/* Location Dropdown */}
                  {locationDropdownOpen && (
                    <div className="absolute top-full mt-2 w-56 bg-white border border-[var(--color-border)] rounded-lg shadow-lg z-50">
                      <div className="py-1">
                        <button
                          onClick={() => selectLocation("Québec, Canada")}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-pastel-neutral)] transition-colors duration-200 ${
                            currentLocation === "Québec, Canada"
                              ? "bg-[var(--color-pastel-neutral)] text-[var(--color-brand)] font-semibold"
                              : "text-[var(--color-text)]"
                          }`}
                        >
                          Québec, Canada
                        </button>
                        <button
                          onClick={() => selectLocation("Montréal, Canada")}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-pastel-neutral)] transition-colors duration-200 ${
                            currentLocation === "Montréal, Canada"
                              ? "bg-[var(--color-pastel-neutral)] text-[var(--color-brand)] font-semibold"
                              : "text-[var(--color-text)]"
                          }`}
                        >
                          Montréal, Canada
                        </button>
                        <button
                          onClick={() => selectLocation("Toronto, Canada")}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-pastel-neutral)] transition-colors duration-200 ${
                            currentLocation === "Toronto, Canada"
                              ? "bg-[var(--color-pastel-neutral)] text-[var(--color-brand)] font-semibold"
                              : "text-[var(--color-text)]"
                          }`}
                        >
                          Toronto, Canada
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header - Navigation */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Left Navigation */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-8 mb-4 lg:mb-0">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-text)] cursor-pointer hover:text-[var(--color-brand)] px-3 py-2 rounded-lg transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link
              href="/apropre"
              className="text-sm font-semibold text-[var(--color-text)] cursor-pointer hover:text-[var(--color-brand)] px-3 py-2 rounded-lg transition-colors duration-200"
            >
              À Propos
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--color-text)] cursor-pointer hover:text-[var(--color-brand)] px-3 py-2 rounded-lg transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="#menu"
              className="text-sm font-semibold text-[var(--color-text)] cursor-pointer hover:text-[var(--color-brand)] px-3 py-2 rounded-lg transition-colors duration-200"
            >
              Menu
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold text-[var(--color-text)] cursor-pointer hover:text-[var(--color-brand)] px-3 py-2 rounded-lg transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="bg-[var(--color-brand)] rounded-2xl p-2 lg:p-3 hover:bg-[var(--color-accent)] transition-colors duration-200 transform hover:scale-105 cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                />
              </svg>
            </button>
            <button className="bg-[var(--color-pastel-neutral)] rounded-2xl p-3 lg:p-3.5 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              <svg
                className="w-5 h-5 text-[var(--color-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
