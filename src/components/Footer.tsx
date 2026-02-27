import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-brand-navy py-12 text-slate-200">
      <div className="section-container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Reliable roofing solutions for homes and businesses across the Appalachian region.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.address}</li>
            <li className="pt-3">
              <div className="flex gap-3">
                <a href="#" className="hover:text-white" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="hover:text-white" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="hover:text-white" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
