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
    { label: 'Global Scale', href: '#scale' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm" 
          : "bg-background border-transparent py-5"
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
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white font-semibold px-6">
            <a href="#contact">Request Quote</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-base font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-none w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
            <a href="#contact">Request Quote</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
