"use client"

import { useEffect } from "react"

export function ExtensionCleanup() {
  useEffect(() => {
    // Function to clean extension attributes
    const cleanExtensionAttributes = () => {
      const attributesToRemove = [
        'bis_skin_checked',
        'fengweb', 
        'swebchan-type',
        'data-360',
        'data-baidu'
      ];
      
      attributesToRemove.forEach(attr => {
        document.querySelectorAll(`[${attr}]`).forEach(el => {
          el.removeAttribute(attr);
        });
      });
    }
    
    // Run immediately
    cleanExtensionAttributes();
    
    // Watch for mutations
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            const target = mutation.target as HTMLElement;
            ['bis_skin_checked', 'fengweb', 'swebchan-type'].forEach(attr => {
              if (target.hasAttribute(attr)) {
                target.removeAttribute(attr);
              }
            });
          }
        });
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['bis_skin_checked', 'fengweb', 'swebchan-type']
      });
      
      return () => observer.disconnect();
    }
  }, [])
  
  return null
}