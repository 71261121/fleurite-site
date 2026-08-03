'use client';

import Image from 'next/image';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            The System That Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Everything you need to reset your energy in 7 days. The guide. The daily checklist. The psychology behind why it works. All in one simple system.
          </p>
        </div>

        {/* Single Product */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Book Image */}
            <div className="w-full md:w-2/5">
              <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-300">
                <Image
                  src="/book-covers/feminine-bloom-reset.png"
                  alt="The Feminine Bloom Reset System by Eliza"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  The Feminine Bloom<br/>Reset System
                </h3>
                <p className="text-rose-600 font-semibold">By Eliza</p>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Seven days designed to break the energy crash pattern. This isn&apos;t theory. It&apos;s the exact process I used to go from exhausted to sustainable. Now tested on thousands of women.
              </p>

              {/* What's Inside */}
              <div className="mb-8 space-y-3">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">What You Get:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">7-Day Reset Protocol</span> – Daily practices you can do in 10 minutes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Energy Tracker</span> – Know exactly what's affecting your cycle</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Founder Notes</span> – Why this works (the psychology, not the biology textbook)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Lifetime Access</span> – Download forever, no subscription</span>
                  </div>
                </div>
              </div>

              {/* CTA + Price */}
              <div className="space-y-4">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-checkout"))}
                  className="w-full py-4 px-6 rounded-xl bg-rose-600 text-white font-bold text-lg hover:bg-rose-700 transition shadow-lg hover:shadow-xl"
                >
                  Get The System — $27
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  ✓ Instant download • ✓ One-time price • ✓ Money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
