import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShieldCheck, Scale, MapPin, Target, Zap, Building2, Phone } from 'lucide-react';

// Using local asset paths instead of placeholder URLs
import heroBg from '@/assets/hero-bg.jpg';
import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Bahrain Construction Skyline" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <FadeIn>
          <span className="inline-block py-1 px-3 mb-6 border border-primary/30 bg-primary/10 text-primary-foreground font-semibold tracking-widest text-xs uppercase backdrop-blur-sm">
            Est. 1974 &mdash; Kingdom of Bahrain
          </span>
        </FadeIn>
        
        <FadeIn delay={150}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white max-w-4xl leading-[1.1] mb-6 tracking-tight">
            Building Bahrain's Future, <span className="text-primary">Precisely.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A major industrial supplier backing national developments and serious contractors with deformed steel, welded wire mesh, and premium wood products for five decades.
          </p>
        </FadeIn>

        <FadeIn delay={450} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-base font-semibold group" asChild>
            <a href="#products">
              Explore Materials
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-none h-14 px-8 text-base font-semibold backdrop-blur-sm" asChild>
            <a href="#contact">Contact Sales</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-square bg-card border border-border p-8 flex items-center justify-center relative z-10 shadow-2xl">
                <div className="text-center">
                  <div className="font-display text-8xl md:text-9xl font-bold text-primary/10 select-none">1974</div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col p-12">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Five Decades of Excellence</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A proud division of the Mohamed Jalal & Sons group, carrying a legacy of trust and capability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 border-2 border-primary/20 z-0 translate-x-4 translate-y-4" />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8">
            <FadeIn delay={150}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Quietly Supporting the Nation's Growth
              </h2>
            </FadeIn>
            <FadeIn delay={250}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 1974, Delmon Building Materials has been the backbone of monumental construction projects across the Kingdom of Bahrain. We don't just supply materials; we supply certainty. 
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backed by regional sister companies and robust global sourcing networks, we ensure that when you need premium deformed steel, welded wire mesh, white wood, plywood, or MDF, it is delivered to your site with industrial precision and unmatched scale.
              </p>
            </FadeIn>
            
            <FadeIn delay={450} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Dependable</h4>
                  <p className="text-sm text-muted-foreground">Decades of proven reliability for major contractors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">At Scale</h4>
                  <p className="text-sm text-muted-foreground">Capacity to fulfill the most demanding developments.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Legacy() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground border-y border-secondary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-secondary-foreground/10">
          <FadeIn delay={0} className="flex flex-col items-center text-center md:px-8 py-4 md:py-0">
            <Building2 className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-5xl font-display font-bold mb-2">50+</h3>
            <p className="text-secondary-foreground/70 uppercase tracking-widest text-sm font-semibold">Years of Service</p>
          </FadeIn>
          <FadeIn delay={150} className="flex flex-col items-center text-center md:px-8 py-8 md:py-0">
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-5xl font-display font-bold mb-2">Global</h3>
            <p className="text-secondary-foreground/70 uppercase tracking-widest text-sm font-semibold">Sourcing Network</p>
          </FadeIn>
          <FadeIn delay={300} className="flex flex-col items-center text-center md:px-8 py-8 md:py-0">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-5xl font-display font-bold mb-2">Tier-1</h3>
            <p className="text-secondary-foreground/70 uppercase tracking-widest text-sm font-semibold">Contractor Choice</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const categories = [
    {
      title: "Deformed Steel",
      description: "High-yield deformed steel rebar for structural reinforcement, sourced globally to meet the highest engineering standards.",
      image: steelImg,
    },
    {
      title: "Welded Wire Mesh",
      description: "Precision-welded wire mesh providing superior tensile strength for concrete slabs and precast structures.",
      image: meshImg,
    },
    {
      title: "Wood, Plywood & MDF",
      description: "Premium white wood, structural plywood, and MDF tailored for formwork, scaffolding, and high-end interior finishes.",
      image: woodImg,
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-card relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-2xl text-foreground">
              Core Materials for <br/><span className="text-primary">Serious Construction</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-muted-foreground max-w-md text-lg border-l-2 border-primary pl-4">
              Our inventory is meticulously maintained to guarantee availability, quality, and compliance with strict structural requirements.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 150}>
              <div className="group relative bg-secondary border border-border overflow-hidden h-[500px] flex flex-col justify-end">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-12 h-1 bg-primary mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed translate-y-4 transition-all duration-500 group-hover:translate-y-0">
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

function GlobalReach() {
  return (
    <section id="scale" className="py-24 md:py-32 bg-background border-y border-border scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="w-20 h-20 bg-card border border-border flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Globe className="w-10 h-10 text-primary" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Global Sourcing, Regional Strength
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our capability extends beyond Bahrain's borders. We leverage a profound network of global suppliers combined with the logistical might of our regional sister companies. This ensures uninterrupted supply chains, competitive pricing, and the capacity to tackle mega-projects without hesitation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Delmon Commitment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that in construction, delays and sub-standard materials cost more than just money—they cost reputation. Our entire operation is built to ensure you never have to worry about your supply chain.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-foreground text-lg mb-1">Rapid Deployment</strong>
                  <span className="text-muted-foreground">Extensive warehousing means materials are ready when you are, not weeks later.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-foreground text-lg mb-1">Uncompromising Standards</strong>
                  <span className="text-muted-foreground">Every ton of steel and bundle of wood is verified for structural integrity.</span>
                </div>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={200} className="relative hidden md:block">
            <div className="aspect-square bg-background border border-border p-12 shadow-xl flex flex-col justify-center relative z-10">
              <div className="text-primary font-display font-bold text-2xl mb-4">"A partner, not just a supplier."</div>
              <p className="text-muted-foreground italic">
                Our approach to business has always been long-term. We invest in relationships, quality, and consistent delivery because that is what builds a nation.
              </p>
            </div>
            <div className="absolute -inset-4 bg-primary/5 z-0 translate-x-4 -translate-y-4" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Request a Quote
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md">
                Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-2">Headquarters</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      P.O. Box 20069<br />
                      Manama, Kingdom of Bahrain<br />
                      CR No. 56425
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-2">Phone & Fax</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Tel: +973 17400508 / 17400509<br />
                      Fax: +973 17400507
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300} className="bg-card border border-border p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-display font-bold mb-6">Send an Enquiry</h3>
            <form 
              action="mailto:delmon@jalal.com" 
              method="POST" 
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-foreground">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company" 
                    className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject / Material Required</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={5}
                  className="w-full p-4 border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none resize-none"
                  required
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-none h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg">
                Send via Email Client
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                This will open your default email client addressed to delmon@jalal.com.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Legacy />
        <Products />
        <GlobalReach />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
