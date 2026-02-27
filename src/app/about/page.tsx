import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Appalachian Roofing',
  description: 'Learn about Appalachian Roofing, our mission, values, and commitment to exceptional workmanship.'
};

const trustPoints = [
  'Licensed and insured roofing professionals',
  'Transparent estimates with clear project scopes',
  'High-quality materials built for regional weather',
  'Clean, respectful job sites and reliable timelines'
];

export default function AboutPage() {
  return (
    <section className="section-container py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold text-brand-navy">About Appalachian Roofing</h1>
          <p className="mt-6 leading-8 text-slate-600">
            Appalachian Roofing was founded with one mission: deliver durable, honest, and expertly crafted roofing solutions to local homeowners and business owners. We focus on clear communication, safe work practices, and quality that lasts.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Our team has experience across roof replacement, preventative maintenance, inspections, and storm damage restoration. We take pride in helping clients make informed decisions while protecting their most valuable investments.
          </p>
        </div>

        <aside className="rounded-2xl bg-brand-gray p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">Why Clients Trust Us</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-brand-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
