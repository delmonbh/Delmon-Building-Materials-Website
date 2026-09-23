import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Package, Truck, Info, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { usePageSetup } from '@/hooks/use-page-setup';

import heroBg from '@/assets/home-hero-bahrain-materials.jpg';
import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-neutral-100 border-b border-neutral-200">
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
              <Button size="lg" variant="outline" className="bg-white hover:bg-neutral-50 text-foreground border-neutral-200 shadow-sm h-12 px-8 text-sm font-semibold rounded-md" asChild data-testid="hero-button-contact">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </FadeIn>
          </div>
          
          <div className="relative w-full order-1 lg:order-2">
            <FadeIn delay={200}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl aspect-[16/10] lg:aspect-[4/3] max-h-[500px]">
                <img 
                  src={heroBg} 
                  alt="Bahrain flag over stacks of reinforcing steel and welded mesh at a coastal materials yard"
                  className="w-full h-full object-cover object-[center_20%]"
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
        <div className="grid lg:grid-cols-[.95fr_1.05fr] gap-10 lg:gap-20 items-center">
          <FadeIn>
            <div className="rounded-3xl bg-[#f0f0f0] border border-[#dedede] p-7 sm:p-8 md:p-9 overflow-hidden relative">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[6rem] pointer-events-none" />
              <div className="relative">
                <span className="text-xs font-semibold tracking-[.18em] uppercase text-primary">The Delmon story</span>
                <div className="mt-5 pb-6 border-b border-[#d2d2d2]">
                  <span className="block font-display text-[5rem] sm:text-[6rem] leading-none tracking-tight text-[#505050]">1974</span>
                  <span className="block mt-2 text-sm font-medium uppercase tracking-[.16em] text-[#555555]">Established in Bahrain</span>
                </div>
                <div className="divide-y divide-[#d2d2d2]">
                  <div className="flex gap-5 py-4">
                    <span className="font-display text-xl text-primary">01</span>
                    <div><h3 className="font-display text-xl text-foreground mb-1">Dependable supply</h3><p className="text-sm leading-relaxed text-[#555555]">Materials selected for construction needs.</p></div>
                  </div>
                  <div className="flex gap-5 pt-4">
                    <span className="font-display text-xl text-primary">02</span>
                    <div><h3 className="font-display text-xl text-foreground mb-1">Regional connections</h3><p className="text-sm leading-relaxed text-[#555555]">Backed by established sourcing relationships.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
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
    <section className="bg-[#e3e5e3] py-8 md:py-12" data-testid="section-services">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#ededed]">
          <div className="grid gap-8 bg-primary px-7 pb-10 pt-12 md:px-12 md:pb-12 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:px-16">
            <FadeIn>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-0.5 w-8 bg-white/80" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[.18em] text-white">Capabilities</span>
              </div>
              <h2 className="font-display text-4xl leading-[1.12] text-white md:text-5xl lg:text-[3.5rem]">
                Industrial Supply<br /><span className="italic text-white/90">Engineered for Scale</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150} className="flex flex-col items-start justify-end">
              <p className="max-w-[490px] text-base leading-relaxed text-white/95 md:text-lg" style={{ textAlign: 'left' }}>
                Comprehensive procurement and logistics solutions tailored for serious contractors. We handle the complexity of global sourcing so you can focus on building.
              </p>
              <Link href="/services" className="mt-7 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90" data-testid="link-home-services">
                View All Services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
          <div className="grid gap-px bg-primary p-px md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="group flex min-h-[260px] flex-col items-center bg-[#ededed] px-7 py-9 text-center transition-colors hover:bg-[#f4f4f4] md:px-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d5d5d5] bg-white">
                    <service.icon className="h-7 w-7 text-primary" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 mt-6 font-display text-[1.35rem] leading-tight text-[#253133]">{service.title}</h3>
                  <p className="max-w-[230px] text-sm leading-relaxed text-[#465153]" style={{ textAlign: 'center' }}>{service.description}</p>
                </div>
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
    <section className="bg-neutral-50 relative py-16 md:py-24" data-testid="section-products">
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
            <Button variant="outline" className="border-neutral-300 text-foreground hover:bg-neutral-100" asChild data-testid="link-home-products">
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
    <section className="relative overflow-hidden bg-[#eeeeee] py-12 md:py-14" data-testid="section-promise">
      <div className="absolute left-0 right-0 top-0 h-1 bg-primary" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative">
        <div className="flex items-center gap-5 mb-7 md:mb-8">
          <span className="text-xs font-semibold tracking-[.18em] uppercase text-primary whitespace-nowrap">The Delmon promise</span>
          <span className="h-px w-full bg-[#d0d0d0]" aria-hidden="true" />
        </div>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-24 items-end">
          <FadeIn>
            <h2 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl leading-[1.08] text-[#414141]">
              A partner.<br />
              <span className="italic text-primary">Not just a supplier.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="border-l-2 border-primary pl-6 md:pl-8">
              <p className="text-base md:text-lg text-[#555555] leading-relaxed mb-7" style={{ textAlign: "left" }}>
                We understand that in construction, delays and sub-standard materials cost more than just money—they cost reputation. Our operation is built to ensure you never have to worry about your supply chain.
              </p>
              <Button size="lg" className="bg-primary text-white hover:text-white hover:opacity-90 rounded-full font-semibold px-7 h-12 shadow-sm" asChild data-testid="link-home-promise">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
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
        <div className="h-3 bg-primary" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
