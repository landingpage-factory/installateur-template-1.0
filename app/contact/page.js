// app/contact/page.js
import ContactForm from "../components/ContactForm";
export default function Contact() {
    return (
      <section className="page-content mx-auto px-4 py-16 md:py-24 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-semibold leading-tight mb-8 flex items-center">
          Kontaktieren Sie uns
          <span className="flex-1 h-px bg-[var(--accent-color)] max-w-[120px] ml-4"></span>
        </h1>
        <ContactForm/>
      </div>
      </section>
    );
  }