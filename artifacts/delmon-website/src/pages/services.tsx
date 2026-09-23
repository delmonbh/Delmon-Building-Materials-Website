import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, DraftingCompass, Globe2, Layers3, Truck } from 'lucide-react';
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
                      ? "bg-[linear-gradient(150deg,#823d46_0%,#664449_40%,#34383b_100%)]"
                      : "bg-[linear-gradient(150deg,#747173_0%,#625d5f_40%,#34383b_100%)]"
                  }`}
                  data-testid={`service-card-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute right-0 top-0 w-44 h-44 rounded-full bg-white/[0.04] blur-2xl pointer-events-none" />
                  <div className="absolute right-6 top-6 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] border border-white/20 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] flex items-center justify-center text-[#f7e6e7] pointer-events-none" aria-hidden="true">
                    <srv.icon className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.4]" />
                  </div>

                  <div className="flex items-center gap-3 mb-7 relative z-10 pr-16 sm:pr-20">
                    <span className="text-5xl lg:text-[3.5rem] leading-none font-display font-light text-[#efdddd] drop-shadow-sm">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl lg:text-[1.75rem] font-display font-medium text-white leading-tight">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-8 flex-1 relative z-10 max-w-[28rem] text-left">
                    {srv.description}
                  </p>

                  <ul className="space-y-4 bg-[#25282b]/25 rounded-2xl p-5 sm:p-6 border border-[#d3b2b4]/70 relative z-10">
                    {srv.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4 text-left">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#edbfc2] mt-2 shrink-0"></div>
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
            <div className="bg-neutral-100 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border-2 border-[#6f6f6f]">
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Ready to streamline your supply chain?</h3>
                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-light">
                  Engage with our procurement specialists to discuss your upcoming project timeline and volume requirements.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-[#AE4951] hover:bg-[#8d343d] text-white hover:text-white border border-[#AE4951] rounded-2xl font-semibold px-10 h-14 tracking-wide shadow-sm hover:-translate-y-1 transition-transform" data-testid="button-services-contact">
                  <Link href="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 w-5 h-5" />
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
