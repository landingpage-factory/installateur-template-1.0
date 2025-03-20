// app/components/ReferencesGrid.js
'use client';

export default function ReferencesGrid() {
  const testimonials = [
    {
      id: 1,
      title: 'Familie Becker, München',
      subtitle: 'Wasserschaden Notdienst',
      text: `"Nach einem Wasserschaden an einem Sonntag war das Team innerhalb einer Stunde bei uns. Schnell, kompetent und freundlich - besser geht es nicht! Die Reparatur wurde sauber durchgeführt, ohne zusätzlichen Schmutz."`,
    },
    {
      id: 2,
      title: 'Wohnungsbaugesellschaft Süd GmbH',
      subtitle: 'Langjähriger Partner',
      text: `"Seit über 10 Jahren vertrauen wir auf die Meister Installations GmbH für alle unsere 200+ Wohneinheiten. Die Zuverlässigkeit und Qualität der Arbeit ist außergewöhnlich. Absolut empfehlenswert!"`,
    },
    {
      id: 3,
      title: 'Hotel Mustermann, Mustersee',
      subtitle: 'Komplettsanierung Sanitär',
      text: `"Die komplette Erneuerung unserer Sanitäranlagen wurde termingerecht und im Budget abgeschlossen. Während der gesamten Bauphase konnte unser Hotelbetrieb ohne Störungen weiterlaufen."`,
    },
  ];

  return (
    <section className="mx-auto overflow-hidden home-image mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-left">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-950 p-6 shadow-lg">
            <h3 className="text-xl font-semibold">
              {testimonial.title}
            </h3>
            <p className="text-lg font-medium text-[var(--color-primary)]">
              {testimonial.subtitle}
            </p>
            <p className="mt-2 text-[var(--text-color-secondary)]">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}