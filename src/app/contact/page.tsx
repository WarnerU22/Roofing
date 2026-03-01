import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Appalachian Roofing LLC',
  description: 'Request a free roofing quote or schedule an inspection with Appalachian Roofing LLC.'
};

export default function ContactPage() {
  return (
    <section className="section-container py-16 md:py-20">
      <h1 className="text-4xl font-bold text-brand-navy">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Tell us about your roofing project and our team will follow up with a free consultation and estimate.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5 rounded-2xl border border-slate-200 p-6 shadow-soft">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-accent focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-accent focus:outline-none" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-accent focus:outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-accent focus:outline-none" />
          </div>
          <button type="submit" className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue">
            Send Message
          </button>
          <p className="text-xs text-slate-500">Form is configured for frontend collection and ready for backend integration.</p>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-brand-navy">Business Information</h2>
            <p className="mt-3 text-slate-600">{siteConfig.streetAddress}</p>
            <p className="mt-1 text-slate-600">{siteConfig.cityStateZip}</p>
            <p className="mt-1 text-slate-600">{siteConfig.phone}</p>
            <p className="mt-1 text-slate-600">{siteConfig.email}</p>
            <p className="mt-1 text-slate-600">{siteConfig.serviceArea}</p>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-brand-navy">Google Maps Placeholder</h2>
            <div className="mt-4 flex h-64 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500">
              Embed Google Maps iframe here when location profile is finalized.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
