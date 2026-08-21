'use client';

import Image from 'next/image';

const PROOF_POINTS = [
  '5 unwritten rules decoded — understand the dynamic, not just the symptoms',
  '47 word-for-word scripts — silence, "I need space," ghosting, walk-away',
  'The 3-Question Framework — stay or go, decided by you, not his silence',
  'The 90-Second Calm Protocol — stop the spiral before you reach for your phone',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-10 sm:pt-28 sm:pb-16">
      {/* soft evergreen glow behind the product */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-20 h-72 w-72 rounded-full bg-pine-200/40 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8">
        {/* LEFT — copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* eyebrow */}
          <p className="mx-auto mb-4 max-w-sm text-xs font-bold uppercase tracking-[0.15em] text-clay-600 lg:mx-0">
            For women who&apos;ve been doing all the emotional work in a one-sided relationship
          </p>

          {/* headline */}
          <h1
            className="mb-5 text-balance font-display font-black leading-[1.06] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            The avoidant plays
            <br />
            a game he never
            <br />
            <span className="text-pine-600">told you the rules to.</span>
          </h1>

          {/* sub */}
          <p className="mx-auto mb-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            5 hidden dynamics. 47 word-for-word scripts. The framework to decide: stay or go.{' '}
            <strong className="text-foreground">On your terms — not his silence.</strong>
          </p>

          {/* proof bullets */}
          <ul className="mx-auto max-w-xl space-y-2.5 text-left lg:mx-0">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium leading-snug text-foreground sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="mx-auto mt-8 max-w-xl text-left lg:mx-0 flex flex-col items-start">
            <button
              onClick={() => window.dispatchEvent(new Event('open-checkout'))}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-clay-500 hover:bg-clay-400 active:scale-[0.98] text-white font-black text-lg transition-all shadow-xl"
            >
              Get The Rules — $27
            </button>
            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="flex text-amber-500 text-lg">★★★★★</span>
              <span>Trusted by 1,247+ women</span>
            </div>
          </div>
        </div>

        {/* RIGHT — product (bigger) */}
        <div className="order-1 flex flex-col items-center justify-center lg:order-2">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-pine-100/50 via-cream/30 to-pine-50/40 p-4 sm:p-6">
            <Image
              src="/product/book-cover.png"
              alt="The Avoidant's Unwritten Rules — by Fleurite.me"
              width={600}
              height={600}
              priority
              className="w-72 mix-blend-multiply drop-shadow-2xl sm:w-80 lg:w-[28rem]"
            />
          </div>
          {/* Format text below book — BIG, clear */}
          <div className="mt-5 flex flex-col items-center gap-1 text-center">
            <p className="text-base font-bold text-foreground sm:text-lg">Instant PDF Download</p>
            <p className="text-sm text-muted-foreground">Lifetime access &bull; Works on any device</p>
          </div>
        </div>
      </div>
    </section>
  );
}
