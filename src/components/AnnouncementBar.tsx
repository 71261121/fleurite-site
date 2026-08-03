'use client';

import { useState, useEffect } from 'react';

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const key = 'fleurite-offer-deadline';
    let deadline = localStorage.getItem(key);
    if (!deadline) {
      const d = new Date();
      d.setHours(d.getHours() + 23);
      d.setMinutes(d.getMinutes() + 47);
      deadline = d.toISOString();
      localStorage.setItem(key, deadline);
    }
    const end = new Date(deadline).getTime();

    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function Digit({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <span className="font-black text-white text-sm md:text-base leading-none tabular-nums">{str}</span>
      <span className="text-white/60 text-[9px] uppercase tracking-wider leading-none mt-0.5">{label}</span>
    </div>
  );
}

function Colon() {
  return <span className="font-black text-white/70 text-sm md:text-base leading-none mx-0.5">:</span>;
}

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const { hours, minutes, seconds } = useCountdown();

  useEffect(() => {
    const dismissed = localStorage.getItem('fleurite-bar-v2-dismissed');
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      data-announcement-bar
      className="w-full bg-pine-700 text-white py-2 px-4 flex items-center justify-center gap-3 relative"
    >
      <button
        onClick={() => window.dispatchEvent(new Event('open-checkout'))}
        className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
        aria-label="Get offer — limited time"
      >
        <span className="text-xs md:text-sm font-semibold tracking-wide">
          Launch price ends in
        </span>
        <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
          <Digit value={hours} label="hr" />
          <Colon />
          <Digit value={minutes} label="min" />
          <Colon />
          <Digit value={seconds} label="sec" />
        </div>
        <span className="hidden sm:inline text-xs font-bold text-clay-200 uppercase tracking-widest border border-clay-200/40 rounded px-2 py-0.5">
          Get $27 Access
        </span>
      </button>
      <button
        onClick={() => {
          setVisible(false);
          localStorage.setItem('fleurite-bar-v2-dismissed', '1');
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
