import React, { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';

export default function ContactPage() {
  usePageSetup("Contact Us | Delmon Building Materials", "Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs in Bahrain.");

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
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="mb-12 md:mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                  Contact Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
                Request a Quote
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs. We respond promptly with detailed material availability and pricing.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-10">
              <FadeIn delay={150}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Headquarters</h4>
                      <address className="not-italic text-muted-foreground leading-relaxed text-sm">
                        P.O. Box 20069<br />
                        Manama, Kingdom of Bahrain<br />
                        CR No. 56425
                      </address>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-slate-200"></div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Phone & Fax</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        Tel: <a href="tel:+97317400508" className="hover:text-primary transition-colors">+973 17400508</a> / <a href="tel:+97317400509" className="hover:text-primary transition-colors">17400509</a><br />
                        Fax: +973 17400507
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-slate-200"></div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Email</h4>
                      <a href="mailto:delmon@jalal.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                        delmon@jalal.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={300}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                  
                  <h3 className="text-2xl font-display font-medium text-foreground mb-6">Send an Inquiry</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-12 px-4 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Company</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-12 px-4 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                          required
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Material Required / Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                        required
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                      <textarea 
                        id="message"
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-4 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                        required
                        data-testid="input-message"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto rounded-md h-12 px-8 bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-sm" data-testid="button-submit-inquiry">
                      Submit
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
