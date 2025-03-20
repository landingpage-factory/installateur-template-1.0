// app/components/ServiceHomeGrid.js
// app/components/ServiceHomeGrid.js
export default function ServiceHomeGrid() {
  const services = [
    {
      id: 1, // Hinzugefügte ID
      title: "Tradition trifft Innovation",
      description: "Seit über 25 Jahren sind wir Ihr zuverlässiger Partner für alle Installationsarbeiten in der Region. Unser Familienbetrieb verbindet traditionelles Handwerk mit modernster Technik und nachhaltigen Lösungen."
    },
    {
      id: 2, // Hinzugefügte ID
      title: "Höchste Qualitätsstandards",
      description: "Bei uns erhalten Sie ausschließlich Qualitätsarbeit mit erstklassigen Materialien. Unsere Meister und Gesellen bilden sich regelmäßig fort, um Ihnen stets die neuesten und effizientesten Lösungen anbieten zu können."
    },
    {
      id: 3, // Hinzugefügte ID
      title: "Rund um die Uhr für Sie da",
      description: "Ob geplante Installation oder Notfall - wir sind immer für Sie erreichbar. Unser 24/7-Notdienst garantiert schnelle Hilfe, wenn es darauf ankommt. Verlassen Sie sich auf uns!"
    },
  ];

  return (
    <section className="mx-auto overflow-hidden home-image">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-950 p-6 shadow-lg">
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>
            <p className="mt-2 text-[var(--text-color-secondary)]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}