import React from 'react';
import { Logo } from '@/components/logo';
import { Phone, Printer, Mail, MapPin, FileText } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-10 md:pt-16 pb-6 md:pb-8" data-testid="footer">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-8 gap-y-8 md:gap-y-12 mb-10 md:mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1 grid grid-cols-[auto_1fr] lg:flex lg:flex-col items-start gap-4 lg:gap-6">
            <Logo variant="default" />
            <p className="text-secondary-foreground/70 text-xs md:text-sm leading-relaxed max-w-xs font-sans">
              Part of the Mohamed Jalal & Sons group. Supporting Bahrain’s growth with premium deformed steel, white wood, and plywood since 1974.
            </p>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="font-display font-medium text-sm md:text-base mb-4 md:mb-6 uppercase tracking-wider text-foreground">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+97317400508" className="hover:text-primary transition-colors block" data-testid="link-phone-1">+973 17400508</a>
                  <a href="tel:+97317400509" className="hover:text-primary transition-colors block" data-testid="link-phone-2">+973 17400509</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Printer className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Fax: +973 17400507</span>
              </li>
              <li className="flex items-start gap-3 break-all">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:delmon@jalal.com" className="hover:text-primary transition-colors" data-testid="link-email">
                  delmon@jalal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Col */}
          <div className="col-span-1">
            <h4 className="font-display font-medium text-sm md:text-base mb-4 md:mb-6 uppercase tracking-wider text-foreground">Address</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-secondary-foreground/80">
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
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-display font-medium text-sm md:text-base mb-4 md:mb-6 uppercase tracking-wider text-foreground">Navigation</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 md:gap-y-3 text-xs md:text-sm text-secondary-foreground/80 font-sans font-normal leading-relaxed">
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">About</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors" data-testid="link-footer-products">Products</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-services">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs text-secondary-foreground/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Delmon Building Materials. All rights reserved.<br className="md:hidden" /> A division of Mohamed Jalal & Sons.
          </p>
          <div className="text-xs flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="text-secondary-foreground/50">Kingdom of Bahrain</span>
            <span className="hidden sm:inline text-secondary-foreground/50">&bull;</span>
            <a href="https://www.shatha-edelbi.com" target="_blank" rel="noopener noreferrer" className="font-medium" data-testid="link-footer-she">
              <span className="text-secondary-foreground/50">Designed and developed by </span>
              <span className="text-primary hover:text-primary/80 transition-colors">SHE</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
