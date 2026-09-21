import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-border py-3 shadow-sm" 
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="focus:outline-none focus-visible:ring-2 ring-primary">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white font-bold px-6 h-12">
            <a href="#contact">Request Quote</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 border-border" : "max-h-0 border-transparent"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-base font-bold uppercase tracking-wider text-foreground p-4 border-b border-border/50 hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="p-4 pt-6">
            <Button asChild className="rounded-none w-full h-12 font-bold text-lg bg-primary text-primary-foreground" onClick={() => setMobileMenuOpen(false)}>
              <a href="#contact">Request Quote</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
