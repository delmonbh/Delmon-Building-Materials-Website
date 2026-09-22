import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import meshImg from '@/assets/mesh.jpg';
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

        <section className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="space-y-0 border-t border-border" data-testid="section-services-list">
            {services.map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 100}>
                <div 
                  className="group relative py-12 md:py-20 border-b border-border transition-colors hover:bg-slate-50/50" 
                  data-testid={`service-row-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start pl-4 md:pl-8">
                    
                    {/* Service number and title */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                      <div className="flex items-end gap-4 mb-8">
                        <span className="text-6xl md:text-8xl font-display font-light leading-none text-slate-200 group-hover:text-primary transition-colors duration-500">
                          0{idx + 1}
                        </span>
                        <span className="h-px w-10 bg-primary mb-3 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {srv.title}
                      </h2>
                    </div>

                    {/* Description & Details */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 lg:gap-16 lg:mt-4">
                      <p className="flex-1 text-lg text-muted-foreground leading-relaxed">
                        {srv.description}
                      </p>
                      
                      <ul className="flex-1 space-y-4">
                        {srv.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 bg-primary/40 mt-2.5 shrink-0"></div>
                            <span className="text-base text-foreground/80 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 md:mt-32">
          <FadeIn>
            <div className="bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-display font-medium mb-4">Ready to streamline your supply chain?</h3>
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed font-light">
                  Engage with our procurement specialists to discuss your upcoming project timeline and volume requirements.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-white hover:bg-slate-100 text-primary rounded-none font-semibold px-10 h-14 tracking-wide shadow-xl hover:-translate-y-1 transition-transform" data-testid="button-services-contact">
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
