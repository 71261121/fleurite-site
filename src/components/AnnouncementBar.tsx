'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('fleurite-announcement-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('fleurite-announcement-dismissed', '1');
  };

  if (!isVisible) return null;

  return (
    <div data-announcement-bar className="w-full bg-rose-600 text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide relative">
      <a href="#products" className="hover:underline">
        5,000+ women regained their energy. See what&apos;s inside ↓
      </a>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
