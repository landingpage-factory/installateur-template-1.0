// app/components/WhyChooseUs.js
// app/components/WhyChooseUs.js
'use client';

import { FaCheckCircle, FaUserFriends, FaAward, FaHandshake, FaClock } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section>
      <div className="container mx-auto px-4" data-aos="fade-up">
        {/* Gründe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Kundenorientierung */}
          <div className="bg-gray-950 p-6 shadow-lg">
            <FaCheckCircle className="text-[var(--accent-color)] text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Kundenorientierung</h3>
            <p className="text-gray-300">
              Ihre Zufriedenheit ist unser oberstes Ziel.
            </p>
          </div>

          {/* Qualität & Expertise */}
          <div className="bg-gray-950 p-6 shadow-lg">
            <FaAward className="text-[var(--accent-color)] text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Qualität & Expertise</h3>
            <p className="text-gray-300">
              Meisterbetrieb mit zertifizierten Fachkräften.
            </p>
          </div>

          {/* Transparenz & Fairness */}
          <div className="bg-gray-950 p-6 shadow-lg">
            <FaHandshake className="text-[var(--accent-color)] text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Transparenz & Fairness</h3>
            <p className="text-gray-300">
              Klare Kommunikation und faire Preise.
            </p>
          </div>

          {/* Zuverlässigkeit & Pünktlichkeit */}
          <div className="bg-gray-950 p-6 shadow-lg">
            <FaClock className="text-[var(--accent-color)] text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Zuverlässigkeit & Pünktlichkeit</h3>
            <p className="text-gray-300">
              Wir halten, was wir versprechen.
            </p>
          </div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Jahre Erfahrung */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[var(--accent-color)]">25+</h3>
            <p className="text-gray-300">Jahre Erfahrung</p>
            <p className="text-sm text-gray-400 mt-2">
              Über ein Vierteljahrhundert Kompetenz und Erfahrung im Installationshandwerk.
            </p>
          </div>

          {/* Zufriedene Kunden */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[var(--accent-color)]">1500+</h3>
            <p className="text-gray-300">Zufriedene Kunden</p>
            <p className="text-sm text-gray-400 mt-2">
              Privatpersonen und Unternehmen vertrauen auf unsere Expertise.
            </p>
          </div>

          {/* Fachkräfte */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[var(--accent-color)]">30+</h3>
            <p className="text-gray-300">Fachkräfte</p>
            <p className="text-sm text-gray-400 mt-2">
              Meister, Gesellen und Auszubildende mit regelmäßigen Fortbildungen.
            </p>
          </div>

          {/* Notdienst */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[var(--accent-color)]">24/7</h3>
            <p className="text-gray-300">Notdienst</p>
            <p className="text-sm text-gray-400 mt-2">
              Rund um die Uhr für Sie da, an 365 Tagen im Jahr.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}