import React from 'react';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo.png';

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'white' }) {
  const isWhite = variant === 'white';
  return (
    <div className={cn("flex items-center inline-block", isWhite && "bg-white px-2 py-1 rounded-sm w-fit", className)}>
      <img 
        src={logoImg} 
        alt="Delmon Building Materials" 
        className={cn("w-auto object-contain", isWhite ? "h-10" : "h-14")}
      />
    </div>
  );
}
