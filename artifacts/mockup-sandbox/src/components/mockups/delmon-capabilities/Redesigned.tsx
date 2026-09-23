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
    <section className="min-h-screen bg-primary py-6 md:py-10 font-sans">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#ededed]">
          <div className="grid gap-8 px-7 pb-10 pt-12 md:px-12 md:pb-12 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:px-16">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Capabilities</span>
              </div>
              <h2 className="font-display text-4xl leading-[1.12] text-[#373737] md:text-5xl lg:text-[3.5rem]">
                Industrial Supply<br /><span className="italic text-[#a44b53]">Engineered for Scale</span>
              </h2>
            </div>
            <div className="flex flex-col items-start justify-end">
              <p className="max-w-[490px] text-base leading-relaxed text-[#555] md:text-lg" style={{ textAlign: 'left' }}>
                Comprehensive procurement and logistics solutions tailored for serious contractors. We handle the complexity of global sourcing so you can focus on building.
              </p>
              <a href="#" onClick={(e) => e.preventDefault()} className="mt-7 inline-flex items-center gap-3 border-b-2 border-primary pb-1.5 text-sm font-semibold text-primary transition-colors hover:text-[#7d333e]">
                View All Services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-px border-t border-[#d1d1d1] bg-[#d1d1d1] md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.title} className="group flex min-h-[245px] flex-col bg-[#f7f7f7] px-7 py-8 transition-colors hover:bg-white md:px-8">
                <div className="mb-10 flex items-start justify-between">
                  <span className="font-display text-xl text-[#a44b53]">0{index + 1}</span>
                  <service.icon className="h-7 w-7 text-[#a44b53]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-[1.35rem] leading-tight text-[#353535]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#626262]" style={{ textAlign: 'left' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}