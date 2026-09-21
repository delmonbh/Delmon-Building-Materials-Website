import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'white' }) {
  const isWhite = variant === 'white';
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Abstract geometric mark representing angular square forms & building materials */}
      <svg 
        viewBox="0 0 40 40" 
        className="w-10 h-10 shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 0H18V18H0V0Z" 
          fill={isWhite ? "white" : "hsl(var(--primary))"} 
        />
        <path 
          d="M22 0H40V18H22V0Z" 
          fill={isWhite ? "rgba(255,255,255,0.7)" : "hsl(var(--foreground))"} 
        />
        <path 
          d="M0 22H18V40H0V22Z" 
          fill={isWhite ? "rgba(255,255,255,0.7)" : "hsl(var(--foreground))"} 
        />
        <path 
          d="M22 22H31V40H22V22Z" 
          fill={isWhite ? "white" : "hsl(var(--primary))"} 
        />
        <path 
          d="M31 22H40V31H31V22Z" 
          fill={isWhite ? "rgba(255,255,255,0.4)" : "hsl(var(--muted-foreground))"} 
        />
      </svg>
      <div className="flex flex-col justify-center">
        <span className={cn(
          "font-display font-bold text-xl leading-none tracking-tight uppercase",
          isWhite ? "text-white" : "text-foreground"
        )}>
          Delmon
        </span>
        <span className={cn(
          "font-sans text-[0.65rem] font-medium tracking-widest uppercase mt-0.5",
          isWhite ? "text-white/80" : "text-muted-foreground"
        )}>
          Building Materials
        </span>
      </div>
    </div>
  );
}
