// app/components/ContactForm.js
"use client";

import { useState, useRef, useEffect } from "react";
import { FaSyncAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Refresh Icon

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const canvasRef = useRef(null);

  // Generiere das Captcha
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789!?";
    let code = "";
    for (let i = 0; i < 7; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(code);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px Arial";
    ctx.fillStyle = "#d1d5db";
    ctx.fillText(code, 10, 30);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaInput !== captchaCode) {
      setIsError(true);
      setIsSuccess(false);
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setIsError(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaInput("");
      generateCaptcha();
    }, 2000);
  };

  return (
    <section className="py-6">
      <div className="container mx-auto items-center relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Linke Spalte: Öffnungszeiten und Kontaktinformationen */}
          <div
            className="bg-gray-950 p-6 shadow-lg border border-gray-900 rounded-md"
            data-aos="fade-down"
          >
            {/* Öffnungszeiten */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Öffnungszeiten</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                  <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                  Montag - Freitag: 08:00 - 17:00 Uhr
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                  <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                  Samstag: 09:00 - 13:00 Uhr
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                  <span className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                  Notdienst: 24/7 erreichbar
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="mb-6 mt-6">
              <h3 className="text-2xl font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-[var(--accent-color)]" />
                  <a
                    href="mailto:info@meister-installation.de"
                    className="hover:text-gray-100 text-gray-300 text-sm sm:text-base md:text-lg transition-colors duration-300"
                  >
                    info@meister-installation.de
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-[var(--accent-color)]" />
                  <a
                    href="tel:+49123456789"
                    className="hover:text-gray-100 text-gray-300 text-sm sm:text-base md:text-lg transition-colors duration-300"
                  >
                    +49 123 456 789
                  </a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[var(--accent-color)]" />
                  <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                    Musterstraße 123, 12345 Musterstadt
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-0 pb-[25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310855.67794831534!2d12.80094306745824!3d52.50520418916426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1742475556493!5m2!1sde!2sde"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Rechte Spalte: Kontaktformular */}
          <div
            className="bg-gray-950 p-6 shadow-lg border border-gray-900 rounded-md"
            data-aos="fade-down"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Kontaktformular
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name und E-Mail nebeneinander (nur auf größeren Bildschirmen) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                    required
                  />
                </div>
              </div>

              {/* Nachricht */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                  rows="5"
                  required
                />
              </div>

              {/* Captcha */}
              <div className="mb-6">
                <label htmlFor="captcha" className="block text-gray-300 mb-2">
                  Captcha
                </label>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Captcha-Bild und Refresh-Button */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <canvas
                      ref={canvasRef}
                      width="150"
                      height="40"
                      className="bg-gray-700 text-gray-300 shrink-0"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2 text-gray-300 hover:text-[var(--accent-color)] hover:cursor-pointer transition-colors duration-300"
                    >
                      <FaSyncAlt className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Eingabefeld */}
                  <input
                    type="text"
                    id="captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-full md:flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                    required
                  />
                </div>
              </div>

              {/* Custom Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="custom-btn py-3 px-6 w-full"
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </button>

              {/* Erfolgsmeldung */}
              {isSuccess && (
                <p className="mt-4 text-green-500 text-center">
                  Ihre Nachricht wurde erfolgreich gesendet!
                </p>
              )}

              {/* Fehlermeldung */}
              {isError && (
                <p className="mt-4 text-red-500 text-center">
                  Das Captcha ist falsch. Bitte versuchen Sie es erneut.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
