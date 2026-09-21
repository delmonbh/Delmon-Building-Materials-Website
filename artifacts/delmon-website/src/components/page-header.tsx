import React from 'react';
import { FadeIn } from '@/components/fade-in';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  image: string;
}

export function PageHeader({ title, subtitle, description, image }: PageHeaderProps) {
  return (
    <header className="pt-20 sm:pt-24 md:pt-32 pb-8 md:pb-12 mb-16 md:mb-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider text-xs uppercase">
                  {subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-foreground leading-[1.05]">
                {title}
              </h1>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 pb-2">
            <FadeIn delay={150}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l border-border pl-6">
                {description}
              </p>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={300}>
          <div className="w-full h-[300px] md:h-[500px] relative bg-muted group">
            <img 
              src={image} 
              alt={typeof title === 'string' ? title : subtitle} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Architectural overlay accents */}
            <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 md:w-48 h-1 md:h-2 bg-primary z-10"></div>
            <div className="absolute inset-0 border-[1px] border-black/10 pointer-events-none"></div>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
