import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Wrench, SearchCheck, CloudRain } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/data/site';

const services = [
  {
    title: 'Roof Replacement',
    description: 'High-quality full roof replacements using premium materials and manufacturer-backed warranties.',
    icon: ShieldCheck
  },
  {
    title: 'Roof Repair',
    description: 'Targeted repair solutions for leaks, damaged shingles, flashing issues, and aging roofs.',
    icon: Wrench
  },
  {
    title: 'Roof Inspection',
    description: 'Detailed roof assessments for maintenance planning, storm readiness, and real estate transactions.',
    icon: SearchCheck
  },
  {
    title: 'Storm Damage Repair',
    description: 'Rapid response and restoration after hail, wind, or heavy rain damage.',
    icon: CloudRain
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-brand-navy text-white">
        <Image
          src="https://images.unsplash.com/photo-1635424710918-d5c138981922?q=80&w=1600&auto=format&fit=crop"
          alt="Professional roofer working on residential roof"
          fill
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="section-container relative z-10 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Appalachian Roofing</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Reliable Roofing Built for Appalachian Weather
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Protect your home with expert craftsmanship, durable materials, and dependable service from trusted local roofing professionals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Our Recent Roofing Work</h2>
          <p className="text-slate-600">See the quality and care we bring to every project.</p>
        </div>
        <ImageCarousel />
      </section>

      <section className="bg-brand-gray py-20">
        <div className="section-container">
          <h2 className="text-center text-3xl font-bold text-brand-navy">Our Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <h2 className="text-center text-3xl font-bold text-brand-navy">What Homeowners Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <div className="section-container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Need roofing help now?</h2>
            <p className="mt-2 text-slate-100">Book your free inspection and estimate today.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-slate-100">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
