'use client';

import { useState, useEffect } from 'react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  // Throttle scroll listener using requestAnimationFrame for smooth performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update body padding-bottom so the sticky bar doesn't obscure content
  useEffect(() => {
    if (isVisible) {
      document.body.style.paddingBottom = '72px';
    } else {
      document.body.style.paddingBottom = '0';
    }

    return () => {
      document.body.style.paddingBottom = '0';
    };
  }, [isVisible]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#f9f5f0]/95 backdrop-blur-md border-t border-[#e0d8d0] shadow-lg py-3 px-4 sm:px-6 pb-[env(safe-area-inset-bottom)]"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-out',
      }}
      aria-hidden={!isVisible}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left side: Product name & honest price */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
          <span className="font-semibold text-foreground text-sm sm:text-base tracking-tight">
            Fleurite System
          </span>
          <span className="text-pine-600 font-bold text-base sm:text-lg">
            $27 <span className="text-xs sm:text-sm font-normal text-muted-foreground">one-time</span>
          </span>
        </div>

        {/* Right side: CTA button */}
        <a
          onClick={() => window.dispatchEvent(new Event("open-checkout"))}
          tabIndex={isVisible ? 0 : -1}
          className="bg-pine-600 text-white rounded-full px-6 py-3 font-bold text-sm hover:bg-pine-700 transition-colors shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
        >
          Get Instant Access
        </a>
      </div>
    </div>
  );
}
