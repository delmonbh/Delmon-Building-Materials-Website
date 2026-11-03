import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import contactCommunicationImg from '@/assets/contact-communication-still-life.jpg';

export default function ContactPage() {
  usePageSetup();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: new URLSearchParams(window.location.search).get('subject') ?? '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>(() =>
    new URLSearchParams(window.location.search).get('inquiry') === 'submitted'
      ? 'success'
      : 'idle'
  );
  const [website, setWebsite] = useState('');
  const returnUrl = new URL(`${import.meta.env.BASE_URL}contact?inquiry=submitted`, window.location.origin).href;

  useEffect(() => {
    // Browsers can restore this page, including React state, when visitors go back.
    const restoreSubmission = (event: PageTransitionEvent) => {
      if (event.persisted) setStatus('idle');
    };
    window.addEventListener('pageshow', restoreSubmission);
    return () => window.removeEventListener('pageshow', restoreSubmission);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (status === 'sending' || website) {
      e.preventDefault();
      return;
    }
    // Native form navigation does not need cross-origin fetch permission.
    // Keep the fields enabled so the browser includes them in the POST body.
    setStatus('sending');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dismissConfirmation = () => {
    setStatus('idle');
    const url = new URL(window.location.href);
    url.searchParams.delete('inquiry');
    window.history.replaceState(window.history.state, '', url);
    requestAnimationFrame(() => {
      document.querySelector<HTMLButtonElement>('[data-testid="button-submit-inquiry"]')?.focus();
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pb-16 md:pb-24">
        
        <PageHeader 
          subtitle="Contact Us"
          title={<>Request a <br /><span className="italic text-muted-foreground">Quote</span></>}
          description="Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs. We respond promptly with detailed material availability and pricing."
          image={contactCommunicationImg}
        />

        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            <div className="lg:col-span-5">
              <FadeIn delay={150} className="lg:h-full">
                <div className="bg-neutral-50 border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-10 relative overflow-hidden lg:h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-foreground text-xl mb-2">Headquarters</h4>
                      <address className="not-italic text-muted-foreground leading-relaxed text-base">
                        P.O. Box 20069<br />
                        Manama, Kingdom of Bahrain<br />
                        CR No. 56425
                      </address>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-border/60"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-foreground text-xl mb-2">Phone & Fax</h4>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        Tel: <a href="tel:+97317400508" className="hover:text-primary transition-colors">+973 17400508</a> / <a href="tel:+97317400509" className="hover:text-primary transition-colors">17400509</a><br />
                        Fax: +973 17400507
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-border/60"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-foreground text-xl mb-2">Email</h4>
                      <a href="mailto:delmon@jalal.com" className="text-muted-foreground hover:text-primary transition-colors text-base break-all">
                        delmon@jalal.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={300} className="lg:h-full">
                <div className="bg-white border border-border rounded-2xl overflow-hidden p-6 md:p-8 shadow-xl shadow-black/5 relative lg:h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  
                  <h3 className="text-2xl font-display font-medium text-foreground mb-5">Send an Inquiry</h3>
                  
                  <form action="https://formsubmit.co/delmon@jalal.com" method="POST" onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_replyto" value={formData.email} />
                    <input type="hidden" name="_subject" value={`${formData.subject}: Delmon website inquiry from ${formData.name}`} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={returnUrl} />
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Leave this field blank</label>
                      <input id="website" name="_honey" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
                    </div>
                    <fieldset className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-11 px-3 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Company</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-11 px-3 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                          required
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Your Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required maxLength={254}
                        className="w-full h-11 px-3 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                        data-testid="input-email" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Material Required / Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-3 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                        required
                        data-testid="input-subject"
                      />
                    </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
                      <textarea 
                        id="message"
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-3 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base resize-y rounded-none"
                        required
                        data-testid="input-message"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <Button type="submit" disabled={status === 'sending'} className="rounded-xl h-10 px-7 bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-none" data-testid="button-submit-inquiry">
                        {status === 'sending' ? 'Sending…' : 'Submit'}
                      </Button>
                    </div>
                    </fieldset>
                    {status === 'sending' && <p role="status" className="text-sm text-muted-foreground">Opening secure submission. Complete any verification shown to send your inquiry.</p>}
                  </form>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
      <Dialog open={status === 'success'} onOpenChange={open => { if (!open) dismissConfirmation(); }}>
        <DialogContent className="max-w-sm rounded-2xl p-8 text-center" data-testid="dialog-inquiry-success">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
          <DialogTitle className="font-display text-3xl font-medium">Thank you!</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            Thank you for submitting your inquiry. Our team will respond as soon as possible.
          </DialogDescription>
          <Button onClick={dismissConfirmation} className="mx-auto rounded-xl px-8" data-testid="button-dismiss-inquiry-success">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
