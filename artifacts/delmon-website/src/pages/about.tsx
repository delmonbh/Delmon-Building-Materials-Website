import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { ShieldCheck, Scale, History, Building2 } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import heroBg from '@/assets/hero-bg.jpg';

export default function AboutPage() {
  usePageSetup("About Us | Delmon Building Materials", "Learn about Delmon Building Materials, a proud division of Mohamed Jalal & Sons supporting Bahrain's monumental construction projects since 1974.");

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
        
        {/* Header Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                    Our Heritage
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                  Quietly Supporting <br />
                  <span className="italic text-muted-foreground">the Nation's Growth</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Established in 1974, Delmon Building Materials has supported construction activity across the Kingdom of Bahrain for five decades. We have grown as a dependable supplier to contractors and developments throughout the country.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in the procurement and provision of high-yield deformed steel, precision welded wire mesh, and premium structural woods, ensuring that serious contractors have the exact materials they need, precisely when they need them.
                </p>
              </FadeIn>
            </div>
            
            <div className="relative">
              <FadeIn delay={200}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={heroBg} 
                    alt="Bahrain Construction Skyline" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Corporate Relationship */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 text-center max-w-4xl mx-auto">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                  A Division of Mohamed Jalal & Sons
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  As a division of Mohamed Jalal & Sons, Delmon benefits from an established regional presence and broad sourcing relationships. This backing helps us support demanding material requirements with dependable procurement and supply.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Pillars of Operation
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our approach to industrial supply is governed by three unyielding principles.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="section-values">
            <FadeIn delay={100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow" data-testid="value-card-reliability">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 border border-slate-100">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Absolute Reliability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In construction, material delays affect progress. Our supply and logistics approach is built around dependable coordination and clear commitments.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 border border-slate-100">
                  <Scale className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Industrial Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our sourcing and supply capabilities are designed to support projects with varied material and volume requirements.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 border border-slate-100">
                  <History className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Legacy of Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Five decades of industry experience guide how we assess products, suppliers, and material requirements.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
