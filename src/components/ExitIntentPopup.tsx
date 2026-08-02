'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of document
      if ((e as any).clientY <= 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDismissed]);

  if (!isOpen || isDismissed) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={() => {
            setIsOpen(false);
            setIsDismissed(true);
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8">
          <p className="text-xs font-bold text-clay-600 uppercase tracking-wide mb-3">
            Wait, before you go...
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            You're 3 minutes away from clarity.
          </h3>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            The free 3-day reset helps your nervous system finally feel safe. Most women sleep through the night for the first time in months.
          </p>

          {/* Two-button CTA */}
          <div className="space-y-3">
            <button
              onClick={() => {
                window.location.href = '/api/downloads/free-guide';
                setIsOpen(false);
              }}
              className="w-full py-3 rounded-lg bg-pine-600 text-white font-bold hover:bg-pine-700 transition"
            >
              Download Free Reset (No Email)
            </button>
            <button
              onClick={() => {
                window.dispatchEvent(new Event('open-checkout'));
                setIsOpen(false);
              }}
              className="w-full py-3 rounded-lg border-2 border-pine-600 text-pine-600 font-bold hover:bg-pine-50 transition"
            >
              Get All 47 Scripts for $27
            </button>
          </div>

          {/* Reassurance */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            30-day money-back guarantee. No risk.
          </p>
        </div>
      </div>
    </div>
  );
}
