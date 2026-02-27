import { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="hover-lift rounded-xl border border-slate-200 bg-white p-6">
      <Icon className="h-10 w-10 text-brand-accent" />
      <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
