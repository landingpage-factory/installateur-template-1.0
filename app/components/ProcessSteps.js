// app/components/ProcessSteps.js
import { FaPhone, FaEnvelope, FaCalendarCheck, FaHandshake } from 'react-icons/fa';

export default function ProcessSteps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Überschrift */}
        <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
          Unsere Dienste
          <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
        </h1>

        {/* Schritte */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {/* Schritt 1: Anfrage stellen */}
          <div className="bg-gray-950 p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <FaPhone className="text-[var(--accent-color)] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Anfrage stellen</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Kontaktieren Sie uns telefonisch, per E-Mail oder über das Kontaktformular mit Ihrem Anliegen.
            </p>
          </div>

          {/* Schritt 2: Beratungsgespräch */}
          <div className="bg-gray-950 p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <FaCalendarCheck className="text-[var(--accent-color)] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Beratungsgespräch</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Wir vereinbaren einen Termin zur Beratung und Bestandsaufnahme vor Ort oder telefonisch.
            </p>
          </div>

          {/* Schritt 3: Angebot erhalten */}
          <div className="bg-gray-950 p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <FaEnvelope className="text-[var(--accent-color)] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Angebot erhalten</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Sie erhalten ein detailliertes, transparentes Angebot ohne versteckte Kosten.
            </p>
          </div>

          {/* Schritt 4: Termin vereinbaren */}
          <div className="bg-gray-950 p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <FaHandshake className="text-[var(--accent-color)] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Termin vereinbaren</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Nach Ihrer Zustimmung vereinbaren wir einen Termin zur Durchführung der Arbeiten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}