import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-2" 
          : "bg-white border-b border-slate-200 py-4"
      )}
      data-testid="header-navbar"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="focus:outline-none focus-visible:ring-2 ring-primary" data-testid="link-logo">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
              data-testid={`link-desktop-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-md bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11" data-testid="button-request-quote-desktop">
            <Link href="/contact">Request a Quotation</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[500px] border-border" : "max-h-0 border-transparent"
        )}
      >
        <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide p-4 border-b border-border/50 hover:bg-neutral-50 transition-colors",
                location === link.href ? "text-primary" : "text-foreground"
              )}
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4 pt-6">
            <Button asChild className="rounded-md w-full h-11 font-semibold text-base bg-primary text-primary-foreground" data-testid="button-request-quote-mobile">
              <Link href="/contact">Request a Quotation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
