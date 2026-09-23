import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Building2 } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import heroBg from '@/assets/about-header-bahrain-materials-wide.jpg';

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
          imageAlt="Construction materials and a Bahrain flag beside a coastal building site"
          imageClassName="object-right md:object-center"
        />

        {/* Corporate Relationship */}
        <section className="bg-neutral-50 border-y border-border py-16 md:py-24 mb-24 md:mb-32">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
              <div className="max-w-5xl mx-auto grid md:grid-cols-[.75fr_1.25fr] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60 border border-[#e9e2df]">
                <div className="bg-primary text-white p-8 sm:p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-56">
                  <div className="absolute -bottom-20 -right-12 w-64 h-64 rounded-full border-[32px] border-white/10 pointer-events-none" />
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center relative">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="relative mt-10">
                    <span className="text-xs font-semibold tracking-[.18em] uppercase text-white/75">Our foundation</span>
                    <p className="mt-3 font-display text-2xl md:text-3xl leading-tight" style={{ textAlign: 'left' }}>Connected through experience.</p>
                  </div>
                </div>
                <div className="bg-[#f4f1ed] p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                  <div className="w-10 h-[2px] bg-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-5">
                    A Division of Mohamed Jalal &amp; Sons
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: 'left' }}>
                    As a division of Mohamed Jalal &amp; Sons, Delmon benefits from an established regional presence and broad sourcing relationships. This backing helps us support demanding material requirements with dependable procurement and supply.
                  </p>
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
              
              <div className="lg:col-span-3 space-y-5" data-testid="section-values">
                {pillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-2xl border border-[#e9dfe0] bg-[#f7f0f0] p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
                    data-testid={`value-row-${idx}`}
                  >
                    <div className="text-5xl md:text-6xl font-display font-light text-primary w-20 shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-primary mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl" style={{ textAlign: 'left' }}>
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
