import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Öffnungszeiten */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2">
              <li>Montag - Freitag: 08:00 - 17:00 Uhr</li>
              <li>Samstag: 09:00 - 13:00 Uhr</li>
              <li>Notdienst: 24/7 erreichbar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center anker-link">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@meister-installation.de"
                  className="transition-colors duration-300"
                >
                  info@meister-installation.de
                </a>
              </li>
              <li className="flex items-center anker-link hover:cursor-pointer">
                <FaEnvelope className="mr-2" />
                <span>+49 123 456 789</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="anker-link transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="anker-link transition-colors duration-300"
              >
                <FaSquareXTwitter  size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="anker-link transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="anker-link transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Meister Installations GmbH | Alle
            Rechte vorbehalten.
          </p>
          <p className="mt-2 text-sm">
            <a
              href="/impressum"
              className="hover:text-white transition-colors duration-300"
            >
              Impressum
            </a>{" "}
            |{" "}
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors duration-300"
            >
              Datenschutz
            </a>{" "}
            |{" "}
            <a
              href="/agb"
              className="hover:text-white transition-colors duration-300"
            >
              AGB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
