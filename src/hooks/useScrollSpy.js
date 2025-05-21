import { useState, useEffect } from 'react';

export function useScrollSpy(selectors) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to check which section is visible
    const checkVisibility = () => {
      const headingElements = Array.from(document.querySelectorAll(selectors));
      if (!headingElements.length) return;
      
      // Simple approach: which heading is closest to the top of the viewport
      const headingPositions = headingElements.map(element => {
        const { id } = element;
        const rect = element.getBoundingClientRect();
        // Distance from the top of the viewport, adjusted to prioritize headings just above the viewport
        const distanceFromViewportTop = rect.top <= 100 ? Math.abs(rect.top) : 10000 + rect.top;
        
        return {
          id,
          distance: distanceFromViewportTop
        };
      });
      
      // Sort by distance (closest to viewport top first)
      headingPositions.sort((a, b) => a.distance - b.distance);
      
      // Set the closest heading as active
      if (headingPositions.length > 0) {
        const newActiveId = headingPositions[0].id;
        if (newActiveId !== activeId) {
          setActiveId(newActiveId);
        }
      }
    };
    
    // Check visibility on scroll and on load with throttling
    let scrollTimer = null;
    const handleScroll = () => {
      if (scrollTimer === null) {
        scrollTimer = setTimeout(() => {
          checkVisibility();
          scrollTimer = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    
    // Initial check after a short delay to ensure elements are rendered
    setTimeout(checkVisibility, 300);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkVisibility);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [selectors, activeId]);

  return activeId;
} 