import React from 'react';
import { Logo } from '@/components/logo';
import { Phone, Printer, Mail, MapPin, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Logo variant="white" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs font-light">
              Part of the Mohamed Jalal & Sons group. Supporting Bahrain’s growth with premium deformed steel, white wood, and plywood since 1974.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+97317400508" className="hover:text-primary transition-colors block">+973 17400508</a>
                  <a href="tel:+97317400509" className="hover:text-primary transition-colors block">+973 17400509</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Printer className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Fax: +973 17400507</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:delmon@jalal.com" className="hover:text-primary transition-colors">
                  delmon@jalal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">Address</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  P.O. Box 20069<br />
                  Manama,<br />
                  Kingdom of Bahrain
                </address>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>CR No. 56425</span>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80 font-bold uppercase tracking-wide">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Materials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Request a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Delmon Building Materials. All rights reserved.<br className="md:hidden" /> A division of Mohamed Jalal & Sons.
          </p>
          <div className="text-xs text-secondary-foreground/50 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>Kingdom of Bahrain</span>
            <span className="hidden sm:inline">&bull;</span>
            <a href="https://www.shatha-edelbi.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Designed and developed by SHE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
