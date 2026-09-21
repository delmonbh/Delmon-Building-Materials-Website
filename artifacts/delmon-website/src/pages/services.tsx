import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Package, Truck, Info, Globe, ArrowRight } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';

export default function ServicesPage() {
  usePageSetup("Services | Delmon Building Materials", "Comprehensive procurement and logistics solutions tailored for serious contractors in Bahrain.");

  const services = [
    {
      icon: Package,
      title: "Material Supply",
      description: "Consistent, high-volume supply of essential structural materials including deformed steel, welded wire mesh, and premium woods. We ensure your site is never waiting on the basics.",
      details: [
        "Supply planning for varied project volumes",
        "Coordination across core material categories",
        "Clear communication on material availability"
      ]
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Leveraging our profound global network to source specific grades, ensuring competitive pricing and scale. When your project requires specialized specifications, we find it.",
      details: [
        "Established international sourcing relationships",
        "Procurement focused on suitability and value",
        "Support for specific material requirements"
      ]
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Extensive warehousing and robust regional transport networks guarantee materials are delivered exactly when and where they are needed, maintaining your project's critical path.",
      details: [
        "Delivery coordination for construction sites",
        "Scheduling aligned with project requirements",
        "Warehousing support for material supply"
      ]
    },
    {
      icon: Info,
      title: "Expert Guidance",
      description: "Providing experienced insights on material specifications, regional compliance, and optimal selection for challenging environments to protect your structural integrity.",
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
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
        
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-16 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                Capabilities
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
              Industrial Supply <br />
              <span className="italic text-muted-foreground">Engineered for Scale</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We provide comprehensive procurement and logistics solutions tailored for contractors who cannot afford delays. We handle the complexity of the global supply chain so you can focus entirely on building.
            </p>
          </FadeIn>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" data-testid="section-services-list">
            {services.map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 100}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 h-full flex flex-col hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300" data-testid={`service-card-${srv.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-8 shadow-sm">
                    <srv.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl font-display font-medium text-foreground mb-4">{srv.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {srv.description}
                  </p>
                  
                  <ul className="space-y-3 pt-6 border-t border-slate-200 mt-auto">
                    {srv.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0"></div>
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20 md:mt-24">
          <FadeIn>
            <div className="bg-primary text-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">Ready to streamline your supply chain?</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Engage with our procurement specialists to discuss your upcoming project timeline and volume requirements.
                </p>
              </div>
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Button asChild size="lg" className="w-full md:w-auto bg-white hover:bg-slate-100 text-primary rounded-md font-semibold px-8 h-12 shadow-sm" data-testid="button-services-contact">
                  <Link href="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 w-4 h-4" />
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
