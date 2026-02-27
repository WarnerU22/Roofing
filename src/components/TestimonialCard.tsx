type TestimonialCardProps = {
  name: string;
  quote: string;
  location: string;
};

export function TestimonialCard({ name, quote, location }: TestimonialCardProps) {
  return (
    <article className="hover-lift rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-sm italic leading-6 text-slate-700">“{quote}”</p>
      <p className="mt-4 font-semibold text-brand-navy">{name}</p>
      <p className="text-xs text-slate-500">{location}</p>
    </article>
  );
}
