import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { usePageSetup } from '@/hooks/use-page-setup';

import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

export default function ProductsPage() {
  usePageSetup("Products | Delmon Building Materials", "Explore our premium inventory of deformed steel, welded wire mesh, white wood, plywood, and MDF for serious contractors.");

  const categories = [
    {
      id: "steel",
      title: "Deformed Steel",
      subtitle: "High-Yield Structural Reinforcement",
      description: "Our deformed steel rebar is sourced through established international supplier relationships for structural reinforcement applications across commercial and industrial construction.",
      features: [
        "Suitable for structural reinforcement applications",
        "Deformed profile supports concrete bonding",
        "Available for varied project requirements",
        "Sourced through Delmon's global network"
      ],
      image: steelImg,
    },
    {
      id: "mesh",
      title: "Welded Wire Mesh",
      subtitle: "Precision-Welded Reinforcement",
      description: "Welded wire mesh supports reinforcement requirements for concrete slabs, flooring, and precast applications, with a regular grid format that assists efficient installation.",
      features: [
        "Regular welded grid configuration",
        "Suitable for slabs and precast applications",
        "Available for varied project specifications",
        "Practical format for site installation"
      ],
      image: meshImg,
    },
    {
      id: "wood",
      title: "Wood, Plywood & MDF",
      subtitle: "Premium Formwork and Finishing Materials",
      description: "A practical selection of white wood, plywood, and MDF for construction, formwork, scaffolding, and interior finishing applications.",
      features: [
        "Plywood options for formwork applications",
        "MDF for interior finishing and joinery",
        "White wood for general construction use",
        "Sourced to suit varied project requirements"
      ],
      image: woodImg,
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
                Inventory
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
              Materials for <br />
              <span className="italic text-muted-foreground">Serious Construction</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We stock and supply the critical components necessary for industrial and commercial development. Every material is vetted for quality, consistency, and compliance with rigorous engineering standards.
            </p>
          </FadeIn>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-24 md:space-y-32" data-testid="section-products-list">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`} data-testid={`product-section-${cat.id}`}>
              
              <div className="w-full lg:w-1/2 relative">
                <FadeIn delay={100}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] group">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none"></div>
                  </div>
                </FadeIn>
              </div>

              <div className="w-full lg:w-1/2">
                <FadeIn delay={200}>
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-2">
                    {cat.title}
                  </h2>
                  <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-6">
                    {cat.subtitle}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {cat.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-sm h-11 px-8 text-sm font-semibold rounded-md" data-testid={`button-inquire-${cat.id}`}>
                    <Link href="/contact">
                      Inquire About {cat.title}
                    </Link>
                  </Button>
                </FadeIn>
              </div>
              
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </div>
  );
}
