import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services | Appalachian Roofing',
  description: 'Explore roof replacement, repair, inspection, and storm restoration services from Appalachian Roofing.'
};

const detailedServices = [
  {
    title: 'Roof Replacement',
    description:
      'When your roof reaches the end of its lifespan, we provide complete tear-off and replacement with premium asphalt shingles and metal roofing options.',
    image:
      'https://media.istockphoto.com/id/2218821546/photo/morning-aerial-view-of-residential-community-in-utah-usa.jpg?s=2048x2048&w=is&k=20&c=q0wcacLumZ2Ih_COrXZKQl1lpkpWwiz8Pj0Qgbz92QA='
  },
  {
    title: 'Roof Repair',
    description:
      'From missing shingles to flashing failures, our technicians quickly identify problem areas and perform durable repairs to prevent costly damage.',
    image:
      'https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Roof Inspection',
    description:
      'Our detailed inspections include structural review, material condition checks, moisture risk evaluation, and documented recommendations.',
    image:
      'https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Storm Damage Repair',
    description:
      'After severe weather, we provide emergency tarping, fast damage assessments, and complete restoration support to secure your property.',
    image:
      'https://images.unsplash.com/photo-1634853982486-c06f0e17940f?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <section className="section-container py-16 md:py-20">
      <h1 className="text-4xl font-bold text-brand-navy">Professional Roofing Services</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        We deliver dependable roofing services designed for long-term performance, curb appeal, and property protection.
      </p>

      <div className="mt-12 space-y-10">
        {detailedServices.map((service, index) => (
          <article key={service.title} className="grid items-center gap-8 rounded-2xl border border-slate-200 p-6 md:grid-cols-2">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image src={service.image} alt={service.title} fill className="object-cover" unoptimized />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">{service.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
