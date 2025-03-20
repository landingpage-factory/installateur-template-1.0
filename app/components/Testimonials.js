// app/components/Testimonials.js
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonials/1.jpg',
    },
    {
      id: 2,
      image: '/images/testimonials/2.jpg',
    },
    {
      id: 3,
      image: '/images/testimonials/3.jpg',
    },
    {
      id: 4,
      image: '/images/testimonials/4.jpg',
    },
    {
      id: 5,
      image: '/images/testimonials/5.jpg',
    },
  ];

  return (
    <section className="mx-auto overflow-hidden home-image mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2" data-aos="fade-right">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-950 p-6 shadow-lg relative w-full h-64">
            <Image
              src={testimonial.image}
              alt={`Testimonial ${testimonial.id}`}
              layout="fill"
              objectFit="cover"
              
            />
          </div>
        ))}
      </div>
    </section>
  );
}
