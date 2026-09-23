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
import productsHeaderImg from '@/assets/products-header.jpg';

export default function ProductsPage() {
  usePageSetup("Products | Delmon Building Materials", "Explore our premium inventory of deformed steel, welded wire mesh, white wood, plywood, and MDF for serious contractors.");

  const categories = [
    {
      id: "steel",
      title: "Deformed Steel",
      subtitle: "High-Yield Structural Reinforcement",
      image: steelImg,
    },
    {
      id: "mesh",
      title: "Welded Wire Mesh",
      subtitle: "Precision-Welded Reinforcement",
      image: meshImg,
    },
    {
      id: "wood",
      title: "Wood, Plywood & MDF",
      subtitle: "Premium Formwork and Finishing Materials",
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
          image={productsHeaderImg}
        />

        <section className="max-w-[1200px] mx-auto px-4 md:px-8" data-testid="section-products-list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <FadeIn key={cat.id} delay={idx * 150} className="flex flex-col h-full">
                <div 
                  id={cat.id}
                  data-testid={`product-section-${cat.id}`}
                  className="group flex flex-col h-full bg-slate-50 rounded-[2rem] p-3 border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                >
                  <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                      <span className="text-white/80 font-semibold text-xs uppercase tracking-wider block mb-2">{cat.subtitle}</span>
                      <h2 className="text-3xl font-display font-medium text-white leading-tight">{cat.title}</h2>
                    </div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[1.5rem] pointer-events-none"></div>
                  </div>

                  <div className="px-2 pt-3 pb-2">
                    <Button 
                      asChild 
                      className="w-full rounded-xl h-12 bg-white hover:bg-primary text-foreground hover:text-white border border-slate-200 transition-colors" 
                      data-testid={`button-inquire-${cat.id}`}
                    >
                      <Link href={`/contact?subject=${encodeURIComponent(cat.title)}`}>
                        Inquire About {cat.title}
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
