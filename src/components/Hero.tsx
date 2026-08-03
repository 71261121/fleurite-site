'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Copy */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">

            {/* Eyebrow — warm audience bridge */}
            <div className="inline-block mb-5">
              <span className="text-xs font-bold text-clay-600 tracking-widest uppercase">
                You already felt it. This is the next step.
              </span>
            </div>

            {/* Headline — product-first, outcome-led */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-5 leading-tight text-balance">
              Stop shrinking.<br />
              <span className="text-pine-600">Get the exact words</span><br />
              to hold your ground.
            </h1>

            {/* What you get — direct product description */}
            <p className="text-lg md:text-xl text-foreground font-semibold mb-3 leading-relaxed max-w-lg">
              47 ready-to-send scripts + a complete nervous system reset — so you stop spiraling and start responding from a place of strength.
            </p>

            <p className="text-base text-muted-foreground mb-7 leading-relaxed max-w-lg">
              Every script is written for real situations: when he pulls back, when he goes silent, when you&apos;re about to send a message you&apos;ll regret, and when you need to walk away with your dignity intact.
            </p>

            {/* Proof points */}
            <ul className="flex flex-col gap-2 mb-8 text-sm font-semibold text-foreground">
              <li>47 copy-paste scripts for every moment of doubt</li>
              <li>The one question that tells you: stay or leave?</li>
              <li>7-day nervous system reset — so the scripts actually work</li>
              <li>Instant PDF — read it tonight</li>
            </ul>

            {/* Single CTA */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pine-600 text-white font-bold text-base hover:bg-pine-700 transition-all cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Instant Access — $27
              </button>
              <p className="text-xs text-muted-foreground">
                30-day money-back guarantee &bull; Instant PDF &bull; Discreet billing
              </p>
            </div>
          </div>

          {/* RIGHT: Book cover — single paid product only */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-center gap-5">

            <div className="relative w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-400">
              <Image
                src="/book-covers/paid-book-premium-v2.png"
                alt="You Were Never Too Much — The Complete Guide + 47 Scripts"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center">
              <p className="text-3xl font-black text-foreground">
                $27
                <span className="text-base font-normal text-muted-foreground ml-2 line-through">$47</span>
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                Complete System &bull; 47 Scripts &bull; Lifetime Access
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
