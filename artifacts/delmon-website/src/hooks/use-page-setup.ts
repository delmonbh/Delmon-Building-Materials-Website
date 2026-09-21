import { useEffect } from 'react';

export function usePageSetup(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description]);
}
