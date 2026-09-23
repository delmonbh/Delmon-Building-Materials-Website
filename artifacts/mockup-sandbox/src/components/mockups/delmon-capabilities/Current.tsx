import { Package, Globe, Truck, Info } from 'lucide-react';
import './_group.css';

const services = [
  { icon: Package, title: 'Material Supply', description: 'Consistent, high-volume supply of essential structural materials.' },
  { icon: Globe, title: 'Global Sourcing', description: 'Leveraging our profound global network to source specific grades.' },
  { icon: Truck, title: 'Reliable Logistics', description: 'Warehousing and delivery coordination aligned with project requirements.' },
  { icon: Info, title: 'Expert Guidance', description: 'Providing experienced insights on material specifications.' },
];

export function Current() {
  return (
    <section className="min-h-screen bg-primary py-5 md:py-10 font-sans">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 rounded-2xl bg-[#f2f2f2] px-6 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight text-[#414141] mb-6">
                Industrial Supply <br/><span className="italic text-primary">Engineered for Scale</span>
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed max-w-md mb-8">
                Comprehensive procurement and logistics solutions tailored for serious contractors. We handle the complexity of global sourcing so you can focus on building.
              </p>
              <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm shadow-sm">
                View All Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-7 md:gap-8 lg:mt-12">
            {services.map((srv) => (
              <div key={srv.title} className="group border-t border-[#d0d0d0] pt-7 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">
                <div className="w-14 h-14 shrink-0 bg-white border border-[#e2e2e2] rounded-xl flex items-center justify-center">
                  <srv.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#414141] mb-2">{srv.title}</h3>
                  <p className="text-[#555555] text-base leading-relaxed">{srv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}