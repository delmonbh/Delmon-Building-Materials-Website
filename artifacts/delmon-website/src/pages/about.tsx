import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Building2 } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import heroBg from '@/assets/hero-bg.jpg';

export default function AboutPage() {
  usePageSetup("About Us | Delmon Building Materials", "Learn about Delmon Building Materials, a proud division of Mohamed Jalal & Sons supporting Bahrain's monumental construction projects since 1974.");

  const pillars = [
    {
      title: "Absolute Reliability",
      description: "In construction, material delays affect progress. Our supply and logistics approach is built around dependable coordination and clear commitments."
    },
    {
      title: "Industrial Scale",
      description: "Our sourcing and supply capabilities are designed to support projects with varied material and volume requirements."
    },
    {
      title: "Legacy of Quality",
      description: "Five decades of industry experience guide how we assess products, suppliers, and material requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pb-16 md:pb-24">
        
        <PageHeader 
          subtitle="Our Heritage"
          title={<>Quietly Supporting <br /><span className="italic text-muted-foreground">the Nation's Growth</span></>}
          description="Established in 1974, Delmon Building Materials has supported construction activity across the Kingdom of Bahrain for five decades. We specialize in the procurement and provision of high-yield deformed steel, precision welded wire mesh, and premium structural woods."
          image={heroBg}
        />

        {/* Corporate Relationship */}
        <section className="bg-slate-50 border-y border-border py-16 md:py-24 mb-24 md:mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
              <div className="bg-white rounded-none p-8 md:p-16 border-l-4 border-l-primary shadow-[10px_10px_0px_0px_rgba(0,0,0,0.03)] border border-border max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="w-20 h-20 bg-slate-50 border border-border flex items-center justify-center shrink-0">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                      A Division of Mohamed Jalal & Sons
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      As a division of Mohamed Jalal & Sons, Delmon benefits from an established regional presence and broad sourcing relationships. This backing helps us support demanding material requirements with dependable procurement and supply.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Values / Pillars */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                    Pillars of Operation
                  </h2>
                  <div className="w-12 h-1 bg-primary mb-6"></div>
                  <p className="text-muted-foreground text-lg">
                    Our approach to industrial supply is governed by three unyielding principles.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-3 border-t-2 border-border" data-testid="section-values">
                {pillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className="group border-b border-border py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 transition-all duration-500 hover:bg-slate-50/50 px-4 -mx-4 md:px-8 md:-mx-8"
                    data-testid={`value-row-${idx}`}
                  >
                    <div className="text-5xl md:text-6xl font-display font-light text-muted/40 group-hover:text-primary transition-colors duration-500 w-24 shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3 group-hover:translate-x-2 transition-transform duration-500">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </div>
  );
}
