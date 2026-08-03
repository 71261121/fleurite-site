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
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Left side: Value message */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="font-bold text-foreground text-sm md:text-base">
            Reclaim your energy in 7 days.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            The Fleurite Reset System — $27, instant download
          </p>
        </div>

        {/* Right side: CTA button */}
        <button
          onClick={() => window.dispatchEvent(new Event("open-checkout"))}
          tabIndex={isVisible ? 0 : -1}
          className="bg-black text-white rounded-lg px-5 md:px-6 py-2.5 md:py-3 font-bold text-sm hover:bg-gray-900 transition-colors shadow-md whitespace-nowrap flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Get The System →
        </button>
      </div>
    </div>
  );
}
