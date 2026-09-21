import React, { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShieldCheck, Scale, MapPin, Target, Zap, Building2, Phone, Package, Truck, Info, Mail } from 'lucide-react';

import heroBg from '@/assets/hero-bg.jpg';
import steelImg from '@/assets/steel.jpg';
import woodImg from '@/assets/wood.jpg';
import meshImg from '@/assets/mesh.jpg';

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-foreground">
      {/* Dynamic Background with Grid & Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Bahrain Construction Skyline" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Est. 1974 &mdash; Kingdom of Bahrain
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={150}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Building Bahrain's Future, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
                Precisely.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-sans font-light">
              A major industrial supplier backing national developments and serious contractors with deformed steel, welded wire mesh, and premium wood products for five decades.
            </p>
          </FadeIn>

          <FadeIn delay={450} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-base font-semibold group w-full sm:w-auto" asChild>
              <a href="#products">
                Explore Materials
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/5 text-white border-white/30 rounded-none h-14 px-8 text-base font-semibold w-full sm:w-auto" asChild>
              <a href="#contact">Contact Sales</a>
            </Button>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative architectural elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-primary/10 border-l border-t border-primary/20 backdrop-blur-sm hidden lg:block" />
      <div className="absolute right-12 bottom-12 w-24 h-24 bg-primary hidden lg:block" />
    </section>
  );
}

function Heritage() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <FadeIn>
              <div className="relative z-10 bg-card border border-border p-8 md:p-12 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 mt-2">
                  Five Decades of Excellence
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  A proud division of the Mohamed Jalal & Sons group, carrying a legacy of trust and capability. We don't just supply materials; we supply certainty.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-1">1974</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Established</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-1">50+</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Years Active</div>
                  </div>
                </div>
              </div>
              
              {/* Layered geometry behind the card */}
              <div className="absolute -inset-4 bg-secondary z-0 translate-x-6 translate-y-6 hidden md:block" />
              <div className="absolute -inset-8 border border-border z-0 translate-x-12 translate-y-12 hidden md:block" />
            </FadeIn>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8 order-1 lg:order-2">
            <FadeIn delay={150}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Quietly Supporting <br/><span className="text-muted-foreground">the Nation's Growth</span>
              </h2>
            </FadeIn>
            <FadeIn delay={250}>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Since 1974, Delmon Building Materials has been the backbone of monumental construction projects across the Kingdom of Bahrain. 
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Backed by regional sister companies and robust global sourcing networks, we ensure that when you need premium deformed steel, welded wire mesh, white wood, plywood, or MDF, it is delivered to your site with industrial precision and unmatched scale.
              </p>
            </FadeIn>
            
            <FadeIn delay={450} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-card border border-border p-6 shadow-sm hover:border-primary transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Dependable</h4>
                <p className="text-sm text-muted-foreground">Decades of proven reliability for major contractors.</p>
              </div>
              <div className="bg-card border border-border p-6 shadow-sm hover:border-primary transition-colors">
                <Scale className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">At Scale</h4>
                <p className="text-sm text-muted-foreground">Capacity to fulfill the most demanding developments.</p>
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
      title: "Project Material Supply",
      description: "Consistent, high-volume supply of essential structural materials including deformed steel and premium woods tailored for formwork."
    },
    {
      icon: Globe,
      title: "Procurement & Sourcing",
      description: "Leveraging our profound global network to source specific material grades, ensuring competitive pricing and uninterrupted supply."
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Extensive warehousing and robust regional logistics networks guarantee materials are delivered to your site exactly when needed."
    },
    {
      icon: Info,
      title: "Product Guidance",
      description: "Providing experienced insights on material specifications, availability, and optimal selection for demanding construction environments."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-2xl text-white">
              Industrial Supply <br/><span className="text-white/50">Engineered for Scale</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <FadeIn key={srv.title} delay={idx * 100}>
              <div className="group bg-secondary-foreground/5 border border-secondary-foreground/10 p-8 h-full hover:bg-secondary-foreground/10 transition-colors">
                <srv.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform origin-left" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{srv.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
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
    <section id="products" className="py-24 md:py-32 bg-card relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-foreground mb-6">
              Core Materials for <br/><span className="text-primary">Serious Construction</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-muted-foreground text-lg">
              Our inventory is meticulously maintained to guarantee availability, quality, and compliance with the highest standards.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 150}>
              <div className="group relative bg-background border border-border overflow-hidden h-[450px] md:h-[550px] flex flex-col shadow-sm">
                <div className="h-1/2 md:h-[60%] overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="h-1/2 md:h-[40%] p-8 flex flex-col justify-center bg-card z-10 border-t border-border group-hover:bg-primary transition-colors duration-500">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary-foreground transition-colors duration-500">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-500">
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
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              A Partner, <br/>Not Just A Supplier.
            </h2>
            <p className="text-lg text-white/80 mb-8 font-light">
              We understand that in construction, delays and sub-standard materials cost more than just money—they cost reputation. Our entire operation is built to ensure you never have to worry about your supply chain.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none font-bold px-8 h-14" asChild>
              <a href="#contact">Discuss Your Project</a>
            </Button>
          </FadeIn>
          <FadeIn delay={200} className="relative hidden md:block">
            <div className="aspect-square border-2 border-white/20 p-12 flex flex-col justify-center relative z-10 backdrop-blur-sm bg-white/5">
              <Building2 className="w-16 h-16 text-white mb-8" />
              <h3 className="font-display font-bold text-3xl mb-4 text-white">The Delmon Commitment</h3>
              <p className="text-white/80 leading-relaxed font-light">
                Our approach to business has always been long-term. We invest in relationships, quality, and consistent delivery because that is what builds a nation.
              </p>
            </div>
            <div className="absolute -inset-4 bg-white/5 z-0 translate-x-6 translate-y-6" />
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
    
    // Construct the mailto link
    const subject = encodeURIComponent(`${formData.subject} - Inquiry from ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:delmon@jalal.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Request a Quote
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md">
                Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Headquarters</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed text-sm">
                      P.O. Box 20069<br />
                      Manama, Kingdom of Bahrain<br />
                      CR No. 56425
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Phone & Fax</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Tel: +973 17400508 / 17400509<br />
                      Fax: +973 17400507
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <a href="mailto:delmon@jalal.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      delmon@jalal.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300} className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-pattern opacity-50 translate-x-8 -translate-y-8 hidden md:block" />
            
            <div className="bg-card border border-border p-8 md:p-10 shadow-xl relative z-10">
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary focus:bg-background transition-all rounded-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary focus:bg-background transition-all rounded-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Material Required / Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary focus:bg-background transition-all rounded-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Message Details</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-4 border-b-2 border-border bg-transparent focus:outline-none focus:border-primary focus:bg-background transition-all rounded-none resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-none h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg group">
                  Send via Email Client
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Submitting this form will open your default email client addressed to <strong className="text-foreground">delmon@jalal.com</strong>.
                </p>
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