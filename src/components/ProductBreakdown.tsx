'use client';

import Image from 'next/image';
import ButtonGlow from './ButtonGlow';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Two Books, One Path{' '}
            <span className="text-pine-600">from Pain to Power</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free. Go deeper if you're ready. Both are designed for women who want answers, not theories.
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

              <p className="text-foreground mb-6">A free guide that reveals exactly why you're chasing and gives you a practical 3-day reset your nervous system actually needs.</p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-pine-600 font-bold mt-0.5">✓</span>
                  <span>Why you shrink yourself (the psychological truth)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-pine-600 font-bold mt-0.5">✓</span>
                  <span>Your nervous system isn't broken—it was injured</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-pine-600 font-bold mt-0.5">✓</span>
                  <span>3-day reset protocol (actually works)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-pine-600 font-bold mt-0.5">✓</span>
                  <span>Email delivery + instant PDF</span>
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

              <p className="text-foreground mb-6">The full system: Understanding why, exactly what to say in 47 different scenarios, and the binary clarity framework that tells you if he'll change or if you should leave.</p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-clay-600 font-bold mt-0.5">✓</span>
                  <span>47 copy-paste scripts (I've tested them all)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-clay-600 font-bold mt-0.5">✓</span>
                  <span>The binary clarity question (is he willing?)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-clay-600 font-bold mt-0.5">✓</span>
                  <span>Leave with dignity OR rebuild with boundaries</span>
                </li>
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-clay-600 font-bold mt-0.5">✓</span>
                  <span>Instant access + email backup</span>
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
