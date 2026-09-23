import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import servicesHeaderImg from '@/assets/services-header.jpg';

export default function ServicesPage() {
  usePageSetup("Services | Delmon Building Materials", "Comprehensive procurement and logistics solutions tailored for serious contractors in Bahrain.");

  const services = [
    {
      title: "Material Supply",
      description: "Coordinated supply of essential structural materials including deformed steel, welded wire mesh, and premium woods for varied project requirements.",
      details: [
        "Supply planning for varied project volumes",
        "Coordination across core material categories",
        "Clear communication on material availability"
      ]
    },
    {
      title: "Global Sourcing",
      description: "Using established international relationships to source suitable material options for specific grades, specifications, and project volumes.",
      details: [
        "Established international sourcing relationships",
        "Procurement focused on suitability and value",
        "Support for specific material requirements"
      ]
    },
    {
      title: "Reliable Logistics",
      description: "Warehousing and delivery coordination designed to support construction schedules and site requirements across Bahrain.",
      details: [
        "Delivery coordination for construction sites",
        "Scheduling aligned with project requirements",
        "Warehousing support for material supply"
      ]
    },
    {
      title: "Expert Guidance",
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
                  className="group h-full bg-[#AE4951] rounded-[2rem] p-8 lg:p-10 border border-[#8d343d] hover:shadow-xl hover:shadow-[#8d343d]/20 transition-shadow duration-500 flex flex-col relative overflow-hidden" 
                  data-testid={`service-card-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8 relative z-10">
                    <span className="text-5xl lg:text-6xl font-display font-light text-rose-200">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-display font-medium text-white">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-lg text-rose-50 leading-relaxed mb-8 flex-1 relative z-10">
                    {srv.description}
                  </p>
                  
                  <ul className="space-y-4 bg-[#f7e9ea] rounded-2xl p-6 border border-[#e9ced1] relative z-10">
                    {srv.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-sm font-medium text-[#492c31] leading-relaxed">{detail}</span>
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
            <div className="bg-neutral-100 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-neutral-200">
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Ready to streamline your supply chain?</h3>
                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-light">
                  Engage with our procurement specialists to discuss your upcoming project timeline and volume requirements.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-neutral-300 hover:bg-neutral-400 text-neutral-900 hover:text-neutral-950 border border-neutral-400 rounded-2xl font-semibold px-10 h-14 tracking-wide shadow-sm hover:-translate-y-1 transition-transform" data-testid="button-services-contact">
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
