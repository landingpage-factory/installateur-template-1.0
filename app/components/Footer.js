
// app/components/Footer.js
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Öffnungszeiten */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                Montag - Freitag: 08:00 - 17:00 Uhr
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                Samstag: 09:00 - 13:00 Uhr
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                Notdienst: 24/7 erreichbar
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[var(--accent-color)]" />
                <a
                  href="mailto:info@meister-installation.de"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@meister-installation.de
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-[var(--accent-color)]" />
                <a
                  href="tel:+49123456789"
                  className="hover:text-white transition-colors duration-300"
                >
                  +49 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[var(--accent-color)]" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                <FaSquareXTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Rechtliche Hinweise */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Rechtliche Hinweise</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/agb"
                  className="hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Meister Installations GmbH | Alle
            Rechte vorbehalten.
          </p>
          <p className="mt-2 text-sm">
            Designed by{" "}
            <a
              href="https://github.com/landingpage-factory"
              className="text-[var(--accent-color)] hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Landingpage Factory 🚀
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/landingpage-factory/restaurant-template/blob/master/LICENSE"
              className="text-[var(--accent-color)] hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lizenz & Nutzung
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}