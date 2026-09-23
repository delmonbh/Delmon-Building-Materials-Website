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
                  className="group h-full bg-[#f7f0f0] rounded-[2rem] p-8 lg:p-10 border border-[#a66c76] hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-500 flex flex-col relative overflow-hidden" 
                  data-testid={`service-card-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8 relative z-10">
                    <span className="text-5xl lg:text-6xl font-display font-light text-primary">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-display font-medium text-foreground">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-1 relative z-10">
                    {srv.description}
                  </p>
                  
                  <ul className="space-y-4 bg-white/70 rounded-2xl p-6 border border-[#eadadd] relative z-10">
                    {srv.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0"></div>
                        <span className="text-sm font-medium text-slate-700 leading-relaxed">{detail}</span>
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
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">Ready to streamline your supply chain?</h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                  Engage with our procurement specialists to discuss your upcoming project timeline and volume requirements.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-slate-200 hover:bg-slate-300 text-slate-900 hover:text-slate-950 border border-slate-300 rounded-2xl font-semibold px-10 h-14 tracking-wide shadow-xl hover:-translate-y-1 transition-transform" data-testid="button-services-contact">
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
