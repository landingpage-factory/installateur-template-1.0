// app/components/Header.js
'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import EmergencyBanner from "../components/EmergencyBanner";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header-Container mit EmergencyBanner und Nav */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* EmergencyBanner oben */}
        <EmergencyBanner />

        {/* Header mit Hintergrundfarbe */}
        <header
          className={`bg-gray-950 opacity-95 shadow-md transition-all duration-300 ${
            isScrolled ? "py-1" : "py-4"
          }`}
        >
          <div className="container mx-auto p-4 flex justify-between items-center">
            {/* Logo/Link zur Startseite */}
            <Link href="/" className="text-2xl font-bold anker-link">
              Meister Installations GmbH
            </Link>

            {/* Navigation mit Hintergrundfarbe */}
            <nav className="hidden md:flex bg-gray-950 p-2 rounded-lg">
              <Link href="/" className="anker-link mr-4 text-xl">
                Startseite
              </Link>
              <Link href="/services" className="anker-link mr-4 text-xl">
                Dienstleistungen
              </Link>
              <Link href="/referenzen" className="anker-link mr-4 text-xl">
                Referenzen
              </Link>
              <Link href="/about" className="anker-link mr-4 text-xl">
                Über uns
              </Link>
              <Link href="/contact" className="anker-link text-xl">
                Kontakt
              </Link>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white hover:cursor-pointer">
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-900 p-4">
              <Link
                href="/"
                className="block anker-link mb-2 text-lg"
                onClick={closeMobileMenu}
              >
                Startseite
              </Link>
              <Link
                href="/services"
                className="block anker-link mb-2 text-lg"
                onClick={closeMobileMenu}
              >
                Dienstleistungen
              </Link>
              <Link
                href="/referenzen"
                className="block anker-link mb-2 text-lg"
                onClick={closeMobileMenu}
              >
                Referenzen
              </Link>
              <Link
                href="/about"
                className="block anker-link mb-2 text-lg"
                onClick={closeMobileMenu}
              >
                Über uns
              </Link>
              <Link
                href="/contact"
                className="block anker-link text-lg"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;