import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Truck, Info, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { usePageSetup } from '@/hooks/use-page-setup';

import heroBg from '@/assets/hero-bg.jpg';
import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-slate-100 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          <div className="max-w-xl order-2 lg:order-1">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                  Est. 1974 &mdash; Kingdom of Bahrain
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={150}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6 tracking-tight">
                Building Bahrain's Future, <br className="hidden md:block"/>
                <span className="text-primary italic">Precisely.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                A major industrial supplier backing national developments and serious contractors with deformed steel, welded wire mesh, and premium wood products for five decades.
              </p>
            </FadeIn>

            <FadeIn delay={450} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-sm h-12 px-8 text-sm font-semibold group rounded-md" asChild data-testid="hero-button-materials">
                <Link href="/products">
                  Explore Materials
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 text-foreground border-slate-200 shadow-sm h-12 px-8 text-sm font-semibold rounded-md" asChild data-testid="hero-button-contact">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </FadeIn>
          </div>
          
          <div className="relative w-full order-1 lg:order-2">
            <FadeIn delay={200}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl aspect-[16/10] lg:aspect-[4/3] max-h-[500px]">
                <img 
                  src={heroBg} 
                  alt="Bahrain Construction Skyline" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden md:block" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section className="bg-white py-16 md:py-28" data-testid="section-heritage">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-20 items-start">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-semibold tracking-wider text-xs uppercase">Our Heritage</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.12] mb-7">
              Built on experience.<br /><span className="italic text-muted-foreground">Rooted in Bahrain.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Since 1974, Delmon Building Materials has supported construction across Bahrain with essential structural materials. As a division of Mohamed Jalal &amp; Sons, our long-standing relationships help us respond to varied project needs.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group" data-testid="link-home-about">
              Explore Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-10 md:p-12 overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border border-white/10 pointer-events-none" />
              <div className="relative">
                <span className="text-xs font-semibold tracking-[.18em] uppercase text-white/60">The Delmon story</span>
                <div className="mt-8 mb-9 border-b border-white/20 pb-9 flex items-end gap-4">
                  <span className="font-display text-7xl sm:text-8xl leading-none text-white">1974</span>
                  <span className="text-sm text-white/70 pb-2">Established<br />in Bahrain</span>
                </div>
                <div className="space-y-0">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 border-b border-white/15">
                    <span className="font-display text-xl text-rose-300">01</span>
                    <div><h3 className="font-display text-xl mb-1">Dependable supply</h3><p className="text-sm leading-relaxed text-white/70">Materials selected for construction needs.</p></div>
                  </div>
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                    <span className="font-display text-xl text-rose-300">02</span>
                    <div><h3 className="font-display text-xl mb-1">Regional connections</h3><p className="text-sm leading-relaxed text-white/70">Backed by established sourcing relationships.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Package,
      title: "Material Supply",
      description: "Consistent, high-volume supply of essential structural materials."
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Leveraging our profound global network to source specific grades."
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Warehousing and delivery coordination aligned with project requirements."
    },
    {
      icon: Info,
      title: "Expert Guidance",
      description: "Providing experienced insights on material specifications."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary text-white selection:bg-white/30" data-testid="section-services">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-white/50"></div>
                  <span className="text-white/90 font-semibold tracking-wider text-xs uppercase">
                    Capabilities
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight text-white mb-6">
                  Industrial Supply <br/><span className="italic text-white/80">Engineered for Scale</span>
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-8">
                  Comprehensive procurement and logistics solutions tailored for serious contractors. We handle the complexity of global sourcing so you can focus on building.
                </p>
                <Link href="/services" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-semibold text-sm hover:bg-slate-100 transition-colors shadow-sm" data-testid="link-home-services">
                  View All Services
                </Link>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10 lg:mt-16">
            {services.map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 100}>
                <div className="group border-t border-white/20 pt-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start transition-colors duration-500 hover:border-white/40">
                  <div className="w-14 h-14 shrink-0 bg-black/10 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <srv.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2">{srv.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Products() {
  const categories = [
    {
      title: "Deformed Steel",
      description: "High-yield deformed steel rebar for structural reinforcement.",
      image: steelImg,
    },
    {
      title: "Welded Wire Mesh",
      description: "Precision-welded wire mesh providing superior tensile strength.",
      image: meshImg,
    },
    {
      title: "Wood, Plywood & MDF",
      description: "Premium woods tailored for formwork, scaffolding, and finishes.",
      image: woodImg,
    }
  ];

  return (
    <section className="bg-slate-50 relative py-16 md:py-24" data-testid="section-products">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                Inventory
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight text-foreground">
              Core Materials for <br/><span className="italic text-muted-foreground">Serious Construction</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <Button variant="outline" className="border-slate-300 text-foreground hover:bg-slate-100" asChild data-testid="link-home-products">
              <Link href="/products">View All Inventory</Link>
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 150}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white" data-testid="section-promise">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl shadow-black/10">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <FadeIn className="max-w-2xl relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground mb-4">
              A Partner, Not Just A Supplier.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We understand that in construction, delays and sub-standard materials cost more than just money—they cost reputation. Our operation is built to ensure you never have to worry about your supply chain.
            </p>
          </FadeIn>
          <FadeIn delay={200} className="shrink-0 w-full md:w-auto relative z-10">
            <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-md font-semibold px-8 h-12 shadow-sm" asChild data-testid="link-home-promise">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageSetup("Delmon Building Materials | Kingdom of Bahrain", "A major industrial supplier backing Bahrain's developments and contractors with deformed steel, welded wire mesh, white wood, plywood and MDF since 1974.");

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Services />
        <Products />
        <Promise />
      </main>
      <Footer />
    </div>
  );
}
