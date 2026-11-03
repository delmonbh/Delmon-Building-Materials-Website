import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { usePageSetup } from '@/hooks/use-page-setup';
import { ProductCatalogue, ProductDetailsContent } from '@/components/product-catalogue';
import { productCatalogue } from '@/data/product-catalogue';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';
import timberImg from '@/assets/timber.jpg';
import productsHeaderImg from '@/assets/products-header.jpg';

export default function ProductsPage() {
  usePageSetup("Products | Delmon Building Materials", "Explore our inventory of deformed steel, welded wire mesh, plywood, MDF, timber, tile adhesives, wall putty, block laying mortar, and insulation and expansion boards.");

  const categories = [
    {
      id: "steel",
      title: "Deformed Steel",
      subtitle: "High-Yield Structural Reinforcement",
      description: "Deformed steel reinforcement for concrete structures, available to support projects of different scales.",
      image: steelImg,
    },
    {
      id: "mesh",
      title: "Welded Wire Mesh",
      subtitle: "Precision-Welded Reinforcement",
      description: "Welded mesh for consistent reinforcement across slabs and other concrete applications.",
      image: meshImg,
    },
    {
      id: "wood",
      title: "Wood, Plywood & MDF",
      subtitle: "Premium Formwork and Finishing Materials",
      description: "Wood, plywood, and MDF options for formwork, interior work, and a range of site requirements.",
      image: woodImg,
    },
    {
      id: "timber",
      title: "Timber, Lumber & Softwood",
      subtitle: "Timber for Construction and Site Work",
      description: "Timber, lumber, and softwood for formwork, framing, and general construction requirements.",
      image: timberImg,
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pb-16 md:pb-24">
        
        <PageHeader 
          subtitle="Inventory"
          title={<>Materials for <br /><span className="italic text-muted-foreground">Serious Construction</span></>}
          description="We stock and supply essential materials for industrial and commercial construction, including deformed steel, welded wire mesh, wood, plywood, MDF, timber, lumber, and softwood, along with wall putty, tile adhesives, block laying mortar, and insulation and expansion boards."
          image={productsHeaderImg}
        />

        <section className="max-w-[1200px] mx-auto px-4 md:px-8" data-testid="section-products-list">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, idx) => {
              const groups = productCatalogue.flatMap(group => {
                if (cat.id === 'steel' && group.id === 'reinforcement') return [{ ...group, products: group.products.filter(p => p.name !== 'Welded Wire Mesh') }];
                if (cat.id === 'mesh' && group.id === 'reinforcement') return [{ ...group, products: group.products.filter(p => p.name === 'Welded Wire Mesh') }];
                if (cat.id === 'wood' && ['plywood', 'mdf'].includes(group.id)) return [group];
                if (cat.id === 'timber' && group.id === 'solid-timber') return [group];
                return [];
              });
              return (
              <FadeIn key={cat.id} delay={idx * 150} className="flex flex-col h-full">
                <Dialog>
                <div 
                  id={cat.id}
                  data-testid={`product-section-${cat.id}`}
                  className="group flex flex-col h-full bg-neutral-50 rounded-[2rem] p-3 border border-neutral-100 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
                >
                  <DialogTrigger asChild>
                  <button type="button" aria-label={`View ${cat.title} specifications`} className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-[1.5rem] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" data-testid={`button-product-image-${cat.id}`}>
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
                  </button>
                  </DialogTrigger>

                  <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1 text-center" style={{ textAlign: 'center' }} data-testid={`text-product-description-${cat.id}`}>
                      {cat.description}
                    </p>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="self-center mb-3 rounded-xl" data-testid={`button-details-${cat.id}`}>View Product Details</Button>
                    </DialogTrigger>
                    <Button 
                      asChild 
                      className="self-center w-auto max-w-full rounded-xl min-h-12 h-auto whitespace-normal px-6 py-3 text-center bg-primary hover:bg-primary/90 text-white transition-colors" 
                      data-testid={`button-inquire-${cat.id}`}
                    >
                      <Link href={`/contact?subject=${encodeURIComponent(cat.title)}`}>
                        Inquire About {cat.title}
                      </Link>
                    </Button>
                  </div>
                </div>
                <ProductDetailsContent title={cat.title} groups={groups} />
                </Dialog>
              </FadeIn>
              );
            })}
          </div>
        </section>

        <ProductCatalogue />

      </main>
      <Footer />
    </div>
  );
}
