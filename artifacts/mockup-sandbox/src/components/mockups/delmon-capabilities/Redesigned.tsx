import { ArrowUpRight, Globe, Info, Package, Truck } from 'lucide-react';
import './_group.css';

const services = [
  { icon: Package, title: 'Material Supply', description: 'Consistent, high-volume supply of essential structural materials.' },
  { icon: Globe, title: 'Global Sourcing', description: 'Leveraging our profound global network to source specific grades.' },
  { icon: Truck, title: 'Reliable Logistics', description: 'Warehousing and delivery coordination aligned with project requirements.' },
  { icon: Info, title: 'Expert Guidance', description: 'Providing experienced insights on material specifications.' },
];

export function Redesigned() {
  return (
    <section className="min-h-screen bg-[#e3e5e3] py-8 md:py-12 font-sans">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#f5f5f2]">
          <div className="grid gap-8 px-7 pb-10 pt-12 md:px-12 md:pb-12 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:px-16">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-0.5 w-8 bg-[#526b65]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#526b65]">Capabilities</span>
              </div>
              <h2 className="font-display text-4xl leading-[1.12] text-[#303936] md:text-5xl lg:text-[3.5rem]">
                Industrial Supply<br /><span className="italic text-[#697b72]">Engineered for Scale</span>
              </h2>
            </div>
            <div className="flex flex-col items-start justify-end">
              <p className="max-w-[490px] text-base leading-relaxed text-[#505b57] md:text-lg" style={{ textAlign: 'left' }}>
                Comprehensive procurement and logistics solutions tailored for serious contractors. We handle the complexity of global sourcing so you can focus on building.
              </p>
              <a href="#" onClick={(e) => e.preventDefault()} className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#8d4c4b] pb-1.5 text-sm font-semibold text-[#8d4c4b] transition-colors hover:text-[#653337]">
                View All Services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-px border-t border-[#d8dcd8] bg-[#d8dcd8] md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group flex min-h-[260px] flex-col items-center bg-white px-7 py-9 text-center transition-colors hover:bg-[#f4f7f5] md:px-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d0dad4] bg-[#e9eeea]">
                  <service.icon className="h-7 w-7 text-[#42605a]" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mb-3 mt-6 font-display text-[1.35rem] leading-tight text-[#303936]">{service.title}</h3>
                <p className="max-w-[230px] text-sm leading-relaxed text-[#59615e]" style={{ textAlign: 'center' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}