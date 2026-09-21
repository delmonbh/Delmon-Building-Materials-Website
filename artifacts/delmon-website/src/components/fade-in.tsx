import React, { useEffect, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [elements, options]);

  return [setElements, entries] as const;
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: isVisible || prefersReducedMotion ? 1 : 0,
        transform: isVisible || prefersReducedMotion ? 'translateY(0)' : 'translateY(24px)',
        transition: prefersReducedMotion ? 'none' : `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
