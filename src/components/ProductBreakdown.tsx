'use client';

import Image from 'next/image';
import ButtonGlow from './ButtonGlow';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - UNIQUE, POWERFUL */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            The Scripts Won&apos;t Work{' '}
            <span className="text-pine-600">If Your Nervous System Doesn&apos;t Change</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            That&apos;s why we give you both: The exact words to say. And the 3-day reset that lets you actually stay calm long enough to say them without panicking or chasing.
          </p>
        </div>

        {/* Two Products: Free + Paid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* FREE GUIDE */}
          <div className="flex flex-col">
            <div className="relative w-full max-w-xs mx-auto mb-6 aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/book-cover-free.png"
                alt="Free Guide: Why You Shrink Yourself"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 bg-background rounded-2xl p-8 border border-muted">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold mb-2">
                  Free
                </span>
                <h3 className="text-2xl font-bold text-foreground">Why You Shrink Yourself</h3>
                <p className="text-muted-foreground mt-1">The 3-Day Reset</p>
              </div>

              <p className="text-foreground mb-6 font-medium">No email required. No theory. Just the three days that actually rewire how your nervous system responds to his distance.</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">Day 1: Why You Chase (It's Not Your Fault)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">Day 2: The 90-Second Nervous System Reset</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">Day 3: Your Move (What You Actually Say Next)</span>
                </li>
              </ul>

              <button
                onClick={() => window.location.href = '/api/downloads/free-guide'}
                className="w-full py-3 rounded-lg bg-muted text-foreground font-semibold hover:bg-pine-50 transition"
              >
                Download Free (No email)
              </button>
            </div>
          </div>

          {/* PAID BOOK */}
          <div className="flex flex-col">
            <div className="relative w-full max-w-xs mx-auto mb-6 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-pine-600">
              <Image
                src="/book-cover-paid.png"
                alt="Complete Guide: You Were Never Too Much"
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-clay-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                $27
              </div>
            </div>
            <div className="flex-1 bg-background rounded-2xl p-8 border-2 border-pine-200 bg-gradient-to-b from-pine-50/30 to-background">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-pine-100 text-pine-700 text-xs font-semibold mb-2">
                  BESTSELLER
                </span>
                <h3 className="text-2xl font-bold text-foreground">You Were Never Too Much</h3>
                <p className="text-muted-foreground mt-1">The Complete Guide + 47 Scripts</p>
              </div>

              <p className="text-foreground mb-6 font-medium">Everything your nervous system needs to stay calm. Every script your mouth needs to say. Plus the one question that tells you whether to stay and fight or leave with your head high.</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">47 Scripts (He pulls away, ghosted, needs space, etc.)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">The Binary Question (Will He Actually Change?)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="text-clay-600 font-bold text-lg mt-0.5">→</span>
                  <span className="font-medium">The Full 7-Day Reset Protocol (Inside the Book)</span>
                </li>
              </ul>

              <button
                onClick={() => window.dispatchEvent(new Event("open-checkout"))}
                className="w-full py-3 rounded-lg bg-pine-600 text-white font-semibold hover:bg-pine-700 transition shadow-md"
              >
                Get Instant Access — $27
              </button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                <span className="line-through">$47</span> Limited time price
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
