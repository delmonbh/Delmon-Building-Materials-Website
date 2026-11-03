import React, { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { usePageSetup } from '@/hooks/use-page-setup';
import contactCommunicationImg from '@/assets/contact-communication-still-life.jpg';

export default function ContactPage() {
  usePageSetup("Contact Us | Delmon Building Materials", "Connect with our procurement specialists to discuss your project requirements, specifications, and volume needs in Bahrain.");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: new URLSearchParams(window.location.search).get('subject') ?? '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || website) return;
    setStatus('sending');
    setErrorMessage('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/delmon@jalal.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `${formData.subject} - Delmon website inquiry from ${formData.name}`,
          _template: 'table',
          _honey: website,
        }),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok || !(result.success === true || result.success === 'true')) {
        throw new Error('The email service did not accept your inquiry. Please try again or contact delmon@jalal.com.');
      }
      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch {
      setErrorMessage('Your inquiry could not be submitted. Your message has been kept—please try again, or contact delmon@jalal.com.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-10">
              <FadeIn delay={150}>
                <div className="bg-neutral-50 border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-10 relative overflow-hidden">
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
              <FadeIn delay={300}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden p-6 md:p-12 shadow-xl shadow-black/5 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  
                  <h3 className="text-3xl font-display font-medium text-foreground mb-8">Send an Inquiry</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Leave this field blank</label>
                      <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
                    </div>
                    <fieldset disabled={status === 'sending'} className="space-y-8 disabled:opacity-70">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-14 px-4 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="company" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Company</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-14 px-4 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                          required
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Your Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required maxLength={254}
                        className="w-full h-14 px-4 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                        data-testid="input-email" />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Material Required / Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-14 px-4 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base rounded-none"
                        required
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
                      <textarea 
                        id="message"
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-4 border-b-2 border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-primary transition-colors text-base resize-none rounded-none"
                        required
                        data-testid="input-message"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <Button type="submit" size="lg" disabled={status === 'sending'} className="rounded-none h-14 px-10 bg-primary hover:bg-primary/90 text-white font-semibold text-sm tracking-wide uppercase shadow-none" data-testid="button-submit-inquiry">
                        {status === 'sending' ? 'Sending…' : 'Submit'}
                      </Button>
                    </div>
                    </fieldset>
                    <p className="text-xs text-muted-foreground" style={{ textAlign: 'center' }}>Your inquiry is sent securely through FormSubmit to delmon@jalal.com.</p>
                    {status === 'success' && <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-900" data-testid="text-inquiry-success">Your inquiry has been accepted for sending. Thank you for contacting Delmon.</div>}
                    {status === 'error' && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900" data-testid="text-inquiry-error">{errorMessage}</div>}
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
