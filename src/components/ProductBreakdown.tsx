'use client';

import Image from 'next/image';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            The Clarity System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            35+ scripts for avoidant moments. A 7-day nervous system reset. The Binary Question that tells you: stay or go. Everything you need to stop chasing and start choosing.
          </p>
        </div>

        {/* Single Product */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Book Image */}
            <div className="w-full md:w-2/5">
              <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
                <Image
                  src="/book-covers/fleurite-reset.png"
                  alt="The Fleurite Reset System by Eliza"
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
                  The Clarity<br/>System
                </h3>
                <p className="text-black font-semibold">By Eliza • $27</p>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Built after 6 years with an avoidant. I figured out how to break the chase cycle and rewire my nervous system. Now thousands of women have used this exact system to stop pursuing and start choosing.
              </p>

              {/* What's Inside */}
              <div className="mb-8 space-y-3">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">What You Get:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-black font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">35+ Scripts</span> – For every avoidant scenario (he pulls away, doesn't reply, ghosts)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">7-Day Nervous System Reset</span> – Rewire your chase response in one week</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">The Binary Question</span> – Three questions that tell you: rebuild with boundaries or leave</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Lifetime Access</span> – PDF download. Yours forever. No subscription.</span>
                  </div>
                </div>
              </div>

              {/* CTA + Price */}
              <div className="space-y-4">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-checkout"))}
                  className="w-full py-4 px-6 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition shadow-lg hover:shadow-xl"
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
