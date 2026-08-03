'use client';

import { useState, useEffect } from 'react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = isVisible ? '72px' : '0';
    return () => { document.body.style.paddingBottom = '0'; };
  }, [isVisible]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-pine-700 border-t border-pine-600 shadow-2xl py-3 px-4 sm:px-6 pb-[env(safe-area-inset-bottom)]"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-out',
      }}
      aria-hidden={!isVisible}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          {/* Mobile: short pain hook. Desktop: full product line */}
          <p className="font-black text-white text-sm leading-snug sm:hidden">
            Stop freezing. Know what to send.
          </p>
          <p className="font-black text-white text-sm md:text-base leading-snug hidden sm:block">
            Stop freezing. Start saying exactly the right thing.
          </p>
          <p className="text-xs text-pine-200 hidden sm:block">
            47 scripts &bull; Decision Framework &bull; 7-Day Reset &bull; $27 one-time
          </p>
        </div>
        <button
          onClick={() => window.dispatchEvent(new Event('open-checkout'))}
          tabIndex={isVisible ? 0 : -1}
          className="bg-clay-500 hover:bg-clay-400 active:scale-[0.97] text-white rounded-xl px-4 md:px-7 py-3 font-black text-sm transition-all shadow-lg whitespace-nowrap flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Get Access — $27
        </button>
      </div>
    </div>
  );
}
