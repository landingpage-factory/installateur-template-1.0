// app/services/page.js
import Link from "next/link";
import ProcessSteps from "../components/ProcessSteps";

export default function Service() {
  const services = [
    {
      title: "Heizungsinstallation",
      description:
        "Wir installieren, warten und reparieren alle Arten von Heizungssystemen. Von klassischen Gasheizungen bis hin zu modernen Wärmepumpensystemen - wir beraten Sie umfassend und finden die optimale Lösung für Ihre Bedürfnisse.",
    },
    {
      title: "Sanitärarbeiten",
      description:
        "Vom tropfenden Wasserhahn bis zur kompletten Badsanierung - unsere Experten kümmern sich um alle sanitären Anlagen in Ihrem Zuhause. Wir garantieren saubere Arbeit und höchste Kundenzufriedenheit.",
    },
    {
      title: "24/7 Notdienst",
      description:
        "Rohrbruch oder Heizungsausfall? Unser Notdienst ist rund um die Uhr für Sie erreichbar. Unsere schnellen Reaktionszeiten sorgen dafür, dass Sie nicht lange im Kalten sitzen oder im Wasser stehen müssen.",
    },
    {
      title: "Wartung & Reparatur",
      description:
        "Regelmäßige Wartung verlängert die Lebensdauer Ihrer Anlagen und spart langfristig Kosten. Unsere Wartungsverträge bieten Ihnen Sicherheit und planbare Kosten.",
    },
  ];

  return (
    <section className="page-content mx-auto px-4 py-16 md:py-24 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
          Unsere Dienste
          <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eyecatcher auf der linken Seite */}
          <div className="flex flex-col justify-center p-8">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--text-color-secondary)] mb-4" data-aos="fade-right">
              Ihr Partner für Heizung & Sanitär
            </p>
            <div className="max-w-3xl" data-aos="fade-right">
              <Link href="/contact" className="mt-6 custom-btn text-center">
                Jetzt anfragen
              </Link>
            </div>
          </div>

          {/* Dienstleistungen auf der rechten Seite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-950 p-6 shadow-lg transform hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ProcessSteps />
      </div>
    </section>
  );
}
