import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowUpRight, DraftingCompass, Globe2, Layers3, Truck } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import servicesHeaderImg from '@/assets/services-header.jpg';

export default function ServicesPage() {
  usePageSetup("Services | Delmon Building Materials", "Comprehensive procurement and logistics solutions tailored for serious contractors in Bahrain.");

  const services = [
    {
      title: "Material Supply",
      icon: Layers3,
      description: "Coordinated supply of essential structural materials including deformed steel, welded wire mesh, and premium woods for varied project requirements.",
      details: [
        "Supply planning for varied project volumes",
        "Coordination across core material categories",
        "Clear communication on material availability"
      ]
    },
    {
      title: "Global Sourcing",
      icon: Globe2,
      description: "Using established international relationships to source suitable material options for specific grades, specifications, and project volumes.",
      details: [
        "Established international sourcing relationships",
        "Procurement focused on suitability and value",
        "Support for specific material requirements"
      ]
    },
    {
      title: "Reliable Logistics",
      icon: Truck,
      description: "Warehousing and delivery coordination designed to support construction schedules and site requirements across Bahrain.",
      details: [
        "Delivery coordination for construction sites",
        "Scheduling aligned with project requirements",
        "Warehousing support for material supply"
      ]
    },
    {
      title: "Expert Guidance",
      icon: DraftingCompass,
      description: "Practical support when reviewing material categories, available specifications, and suitable options for each application.",
      details: [
        "Guidance on material categories and applications",
        "Support when comparing available specifications",
        "Practical input from an experienced supply team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pb-16 md:pb-24">
        
        <PageHeader 
          subtitle="Capabilities"
          title={<>Industrial Supply <br /><span className="italic text-muted-foreground">Engineered for Scale</span></>}
          description="We provide comprehensive procurement and logistics solutions tailored for contractors who cannot afford delays. We handle the complexity of the global supply chain so you can focus entirely on building."
          image={servicesHeaderImg}
        />

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-testid="section-services-list">
            {services.map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 100} className="h-full">
                <div
                  className={`group h-full min-h-[390px] rounded-[2rem] p-8 lg:p-9 border border-white/10 hover:shadow-xl hover:shadow-[#363638]/20 transition-shadow duration-500 flex flex-col relative overflow-hidden ${
                    idx % 2 === 0
                      ? "bg-primary"
                      : "bg-[linear-gradient(150deg,#6F6F6F_0%,#707072_65%,#656668_84%,#535557_100%)]"
                  }`}
                  data-testid={`service-card-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute right-0 top-0 w-44 h-44 rounded-full bg-white/[0.04] blur-2xl pointer-events-none" />
                  <div className="absolute right-6 top-6 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] border border-white/20 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] flex items-center justify-center text-white pointer-events-none" aria-hidden="true">
                    <srv.icon className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.4]" />
                  </div>

                  <div className="flex items-center gap-3 mb-7 relative z-10 pr-16 sm:pr-20">
                    <span className="text-5xl lg:text-[3.5rem] leading-none font-display font-light text-white/80 drop-shadow-sm">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl lg:text-[1.75rem] font-display font-medium text-white leading-tight">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-8 flex-1 relative z-10 max-w-[28rem] text-left">
                    {srv.description}
                  </p>

                  <ul className="space-y-4 bg-white/[0.06] rounded-2xl p-5 sm:p-6 border border-white/25 relative z-10">
                    {srv.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4 text-left">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 shrink-0"></div>
                        <span className="text-sm font-medium text-white/90 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 md:mt-32">
          <FadeIn>
            <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,.75fr)] overflow-hidden rounded-[2rem] bg-[#f3f3f3]">
              <div className="px-8 pt-12 pb-10 sm:px-12 lg:px-16 lg:pt-16 lg:pb-0">
                <div className="flex items-center gap-3 mb-7">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Let&apos;s work together</span>
                </div>
                <h3 className="max-w-[38rem] font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground mb-6">
                  Built for the work ahead.<br />
                  <span className="italic text-primary">Let&apos;s talk supply.</span>
                </h3>
                <p className="max-w-lg text-base md:text-lg leading-relaxed text-[#595959]" style={{ textAlign: "left" }}>
                  Tell us about your project timeline and material requirements. Our procurement team is ready to discuss your options.
                </p>
              </div>

              <div className="relative flex flex-col justify-center bg-[#e5e5e5] px-8 py-10 sm:p-12 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:px-12 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" aria-hidden="true" />
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#d0d0d0] sm:-right-20 sm:-top-24 sm:h-64 sm:w-64" aria-hidden="true" />
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#d0d0d0] sm:-right-10 sm:-top-14 sm:h-44 sm:w-44" aria-hidden="true" />
                <span className="relative text-xs font-semibold uppercase tracking-[.18em] text-primary mb-6">From plan to site</span>
                <div className="relative divide-y divide-[#c8c8c8]">
                  {["Material sourcing", "Supply planning", "Delivery coordination"].map((step, index) => (
                    <div key={step} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                      <span className="font-display text-2xl text-primary">0{index + 1}</span>
                      <span className="font-display text-xl text-[#484848]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 py-10 sm:px-12 lg:col-start-1 lg:row-start-2 lg:px-16 lg:pt-9 lg:pb-16">
                <Button asChild size="lg" className="h-14 rounded-full bg-primary text-white hover:text-white hover:opacity-90 px-8 font-semibold shadow-sm transition-opacity" data-testid="button-services-contact">
                  <Link href="/contact">
                    Contact Sales
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </div>
  );
}
