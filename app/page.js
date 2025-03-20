import Image from "next/image";
import ServiceHomeGrid from "./components/ServiceHomeGrid";

export default function Home() {
  return (
    <section className="page-content mx-auto py-16 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Textbereich (links) */}
        <div className="order-2 md:order-1">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-color-primary)]">
              Willkommen bei Meister Installations GmbH
            </h1>
          </div>
          <div data-aos="fade-up-right">
            <p className="mt-4 md:mt-6 text-base md:text-lg text-[var(--text-color-secondary)] leading-relaxed max-w-2xl">
              Ihr zuverlässiger Partner für alle Installations- und
              Sanitärarbeiten. Professionell, termingerecht und immer für Sie da –
              auch im Notfall.
            </p>
          </div>
          <div className="mt-6 md:mt-8 flex flex-wrap gap-3" data-aos="fade-up-right">
            <a href="/kontakt" className="custom-btn text-base md:text-lg">
              Termin vereinbaren
            </a>

            <a href="tel:08912345679" className="custom-btn text-base md:text-lg">
              Notdienst anrufen
            </a>
          </div>
        </div>

        {/* Bildbereich (rechts) */}
        <div className="order-1 md:order-2 relative w-full h-[300px] md:h-[550px] home-image" data-aos="fade-left">
          <Image
            src="/images/home-2.jpg"
            alt="Unsere Fachhandwerker bei der Arbeit"
            fill
            className="object-cover md:object-contain"
            priority
          />
        </div>
      </div>

      {/* ServiceHomeGrid mit angepasstem Abstand */}
      <div className="mt-8 md:mt-16">
        <ServiceHomeGrid />
      </div>
      </div>
    </section>
  );
}