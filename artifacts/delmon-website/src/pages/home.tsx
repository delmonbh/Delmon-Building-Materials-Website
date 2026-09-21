import React, { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Scale, MapPin, Phone, Package, Truck, Info, Mail, Globe } from 'lucide-react';

import heroBg from '@/assets/hero-bg.jpg';
import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-sm h-12 px-8 text-sm font-semibold group rounded-md" asChild>
                <a href="#products">
                  Explore Materials
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 text-foreground border-slate-200 shadow-sm h-12 px-8 text-sm font-semibold rounded-md" asChild>
                <a href="#contact">Contact Sales</a>
              </Button>
            </FadeIn>
          </div>
          
          <div className="relative w-full">
            <FadeIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
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
    <section className="py-16 md:py-20 bg-white relative">
      <span id="about" className="absolute top-[-80px]" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                  Heritage
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight">
                Quietly Supporting <br/><span className="text-muted-foreground italic">the Nation's Growth</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Since 1974, Delmon Building Materials has been the backbone of monumental construction projects across the Kingdom of Bahrain. Backed by regional sister companies and robust global sourcing networks, we ensure that when you need premium deformed steel, welded wire mesh, white wood, plywood, or MDF, it is delivered to your site with industrial precision.
              </p>
            </FadeIn>
            <FadeIn delay={250} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-1">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Dependable</h4>
                <p className="text-xs text-muted-foreground">Decades of proven reliability.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-1">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">At Scale</h4>
                <p className="text-xs text-muted-foreground">Capacity for demanding developments.</p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 relative">
            <FadeIn>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm relative z-10">
                <h3 className="text-2xl font-display font-medium text-foreground mb-3">
                  Five Decades of Excellence
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  A proud division of the Mohamed Jalal & Sons group, carrying a legacy of trust and capability. We don't just supply materials; we supply certainty.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-3xl font-display font-medium text-primary mb-1">1974</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Established</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-medium text-primary mb-1">50+</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Years Active</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
      description: "Consistent, high-volume supply of essential structural materials including deformed steel and premium woods."
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Leveraging our profound global network to source specific grades, ensuring competitive pricing and scale."
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Extensive warehousing and robust regional networks guarantee materials are delivered exactly when needed."
    },
    {
      icon: Info,
      title: "Expert Guidance",
      description: "Providing experienced insights on material specifications and optimal selection for challenging environments."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight text-foreground mb-4">
              Industrial Supply <span className="italic text-primary">Engineered for Scale</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Comprehensive procurement and logistics solutions tailored for serious contractors.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((srv, idx) => (
            <FadeIn key={srv.title} delay={idx * 100}>
              <div className="bg-white rounded-xl p-6 md:p-8 h-full shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                  <srv.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">{srv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const categories = [
    {
      title: "Deformed Steel",
      description: "High-yield deformed steel rebar for structural reinforcement, sourced globally to meet strict structural requirements.",
      image: steelImg,
    },
    {
      title: "Welded Wire Mesh",
      description: "Precision-welded wire mesh providing superior tensile strength for concrete slabs and precast structures.",
      image: meshImg,
    },
    {
      title: "Wood, Plywood & MDF",
      description: "Premium white wood, structural plywood, and MDF tailored for formwork, scaffolding, and high-end finishes.",
      image: woodImg,
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <span id="products" className="absolute top-[-80px]" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="mb-12">
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
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <FadeIn className="max-w-xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
              A Partner, Not Just A Supplier.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We understand that in construction, delays and sub-standard materials cost more than just money—they cost reputation. Our operation is built to ensure you never have to worry about your supply chain.
            </p>
          </FadeIn>
          <FadeIn delay={200} className="shrink-0 w-full md:w-auto relative z-10">
            <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-md font-semibold px-8 h-12 shadow-sm" asChild>
              <a href="#contact">Discuss Your Project</a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${formData.subject} - Inquiry from ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:delmon@jalal.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <span id="contact" className="absolute top-[-80px]" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
                Request a Quote
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-md">
                Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Headquarters</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed text-sm">
                      P.O. Box 20069<br />
                      Manama, Kingdom of Bahrain<br />
                      CR No. 56425
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Phone & Fax</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Tel: +973 17400508 / 17400509<br />
                      Fax: +973 17400507
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                    <a href="mailto:delmon@jalal.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      delmon@jalal.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-11 px-3 border border-slate-200 rounded-md bg-slate-50/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-semibold text-foreground uppercase tracking-wide">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-11 px-3 border border-slate-200 rounded-md bg-slate-50/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-foreground uppercase tracking-wide">Material Required</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 px-3 border border-slate-200 rounded-md bg-slate-50/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-slate-200 rounded-md bg-slate-50/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-md h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-sm group mt-2 shadow-sm">
                  Submit
                </Button>
              </form>
            </div>
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
        <Heritage />
        <Services />
        <Products />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
