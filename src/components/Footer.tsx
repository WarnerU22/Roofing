import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-brand-navy py-12 text-slate-200">
      <div className="section-container grid gap-8 md:grid-cols-3">
        <div>
          <Image src="/images/logo.svg" alt="Appalachian Roofing LLC logo" width={220} height={64} className="h-14 w-auto rounded bg-white px-2 py-1" />
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
            <li>{siteConfig.streetAddress}</li>
            <li>{siteConfig.cityStateZip}</li>
            <li>{siteConfig.serviceArea}</li>
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
