import React from 'react';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo.png';

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'white' }) {
  const isWhite = variant === 'white';
  return (
    <div className={cn("flex items-center", isWhite && "bg-white p-2", className)}>
      <img 
        src={logoImg} 
        alt="Delmon Building Materials" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}
