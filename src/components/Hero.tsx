'use client';

import Image from 'next/image';

const openCheckout = () => window.dispatchEvent(new Event('open-checkout'));

const AVATARS = [
  '/testimonials/woman-1.png',
  '/testimonials/woman-2.png',
  '/testimonials/woman-3.png',
];

const PROOF_POINTS = [
  '5 unwritten rules decoded — understand the dynamic, not just the symptoms',
  '47 word-for-word scripts — silence, "I need space," ghosting, walk-away',
  'The 3-Question Framework — stay or go, decided by you, not his silence',
  'The 90-Second Calm Protocol — stop the spiral before you reach for your phone',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-14 sm:pt-28 sm:pb-20">
      {/* soft evergreen glow behind the product */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-20 h-72 w-72 rounded-full bg-pine-200/40 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        {/* LEFT — copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* eyebrow — audience qualifier, resentment-first */}
          <p className="mx-auto mb-4 max-w-sm text-xs font-bold uppercase tracking-[0.15em] text-clay-600 lg:mx-0">
            For women who've been doing all the emotional work in a one-sided relationship
          </p>

          {/* headline — avoidant hook format, resentment validation */}
          <h1
            className="mb-5 text-balance font-display font-black leading-[1.06] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.4rem, 5.2vw, 3.75rem)' }}
          >
            The avoidant plays
            <br />
            a game he never
            <br />
            <span className="text-pine-600">told you the rules to.</span>
          </h1>

          {/* sub — all segments: texters, leavers, fence-sitters */}
          <p className="mx-auto mb-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            5 hidden dynamics. 47 word-for-word scripts. The framework to decide: stay or go.{' '}
            <strong className="text-foreground">On your terms — not his silence.</strong>
          </p>

          {/* proof bullets */}
          <ul className="mx-auto mb-8 max-w-xl space-y-2.5 text-left lg:mx-0">
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

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <button
              onClick={openCheckout}
              className="group relative w-full rounded-full bg-pine-600 px-8 py-4 text-base font-black text-white shadow-lg transition-all hover:bg-pine-700 hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              Get Instant Access — $27
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground lg:justify-start">
              <span className="text-sm font-black text-foreground">$27</span>
              <span className="text-muted-foreground line-through">$47</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>Instant PDF</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>Lifetime access</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>One-time payment</span>
            </div>
          </div>

          {/* social proof chip — moved below CTA */}
          <div className="mx-auto mt-6 flex w-fit items-center gap-2 lg:mx-0">
            <div className="flex -space-x-2">
              {AVATARS.map((src) => (
                <span
                  key={src}
                  className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-background"
                >
                  <Image src={src} alt="" fill sizes="28px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="text-xs font-bold text-pine-700">7,700+ women learned the rules. Stopped waiting.</p>
          </div>
        </div>

        {/* RIGHT — product */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-pine-100/50 via-cream/30 to-pine-50/40 p-4 sm:p-6">
            <Image
              src="/product/book-cover.png"
              alt="The Avoidant's Unwritten Rules — by Fleurite.me"
              width={520}
              height={520}
              priority
              className="w-64 mix-blend-multiply drop-shadow-2xl sm:w-72 lg:w-[26rem]"
            />
            {/* floating price badge */}
            <div className="absolute -bottom-3 -left-3 rotate-[-6deg] rounded-2xl bg-clay-600 px-4 py-2 text-center text-cream shadow-lg sm:-left-5">
              <p className="text-[0.6rem] font-medium uppercase tracking-wider text-cream/80">
                one payment
              </p>
              <p className="font-display text-2xl font-black leading-none">$27</p>
              <p className="text-[0.6rem] font-medium text-cream/70 line-through">was $47</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}