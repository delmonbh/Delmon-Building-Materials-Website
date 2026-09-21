import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
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
      <main className="flex-grow pb-16 md:pb-24">
        
        <PageHeader 
          subtitle="Inventory"
          title={<>Materials for <br /><span className="italic text-muted-foreground">Serious Construction</span></>}
          description="We stock and supply essential materials for industrial and commercial construction, including deformed steel, welded wire mesh, white wood, plywood, and MDF."
          image={steelImg}
        />

        <section className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-24 md:space-y-32" data-testid="section-products-list">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`} data-testid={`product-section-${cat.id}`}>
              
              <div className="w-full lg:w-1/2 relative">
                <FadeIn delay={100}>
                  <div className="relative rounded-none bg-slate-50 overflow-hidden shadow-2xl shadow-black/5 aspect-[4/3] group border-[8px] border-white">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
                  </div>
                  {/* Architectural box accent */}
                  <div className={`absolute -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'} w-32 h-32 bg-primary/5 -z-10`}></div>
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
                  
                  <ul className="space-y-3 mb-10">
                    {cat.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-primary mt-2.5 shrink-0"></div>
                        <span className="text-foreground/90 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8 text-sm font-semibold tracking-wide" data-testid={`button-inquire-${cat.id}`}>
                    <Link href={`/contact?subject=${encodeURIComponent(cat.title)}`}>
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
