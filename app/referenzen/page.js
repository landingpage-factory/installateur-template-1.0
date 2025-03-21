// app/references/page.js
import Testimonials from '../components/Testimonials';
import ReferencesGrid from '../components/ReferencesGrid';
import WhyChooseUs from '../components/WhyChooseUs';

export default function References() {
  return (
    <section className="page-content mx-auto px-4 py-16 md:py-24 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Kundenstimmen */}
        <div className="mx-auto">
          <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
            Was unsere Kunden sagen
            <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
          </h1>
          <Testimonials/>
          <ReferencesGrid/>
        </div>
        

        {/* Referenzen */}
        <div className="mx-auto">
          <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
            Warum uns wählen?
            <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
          </h1>
          <WhyChooseUs/>
        </div>
      </div>
    </section>
  );
}
