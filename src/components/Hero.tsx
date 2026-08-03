'use client';

import Image from 'next/image';

const openCheckout = () => window.dispatchEvent(new Event('open-checkout'));

const AVATARS = [
  '/testimonials/woman-1.png',
  '/testimonials/woman-2.png',
  '/testimonials/woman-3.png',
];

const PROOF_POINTS = [
  '47 word-for-word scripts — copy, paste, send tonight',
  'The exact 3 questions that end months of confusion',
  'A 7-day reset so you respond instead of spiral',
  'Instant PDF — on your phone in 60 seconds',
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
          {/* social proof chip */}
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 lg:mx-0">
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
            <p className="text-xs font-bold text-pine-700">7,700+ women already stopped chasing</p>
          </div>

          {/* headline — straight into the pain she already knows */}
          <h1
            className="mb-5 text-balance font-display font-black leading-[1.06] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
          >
            He goes quiet.
            <br />
            You fall apart.
            <br />
            <span className="text-pine-600">Here&apos;s what to send.</span>
          </h1>

          {/* sub — outcome, not philosophy */}
          <p className="mx-auto mb-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            You don&apos;t need another page telling you to &quot;just relax.&quot; You need the
            words. <strong className="text-foreground">47 tested scripts</strong> for every moment
            you freeze, fold, or want to chase — plus a stay-or-leave framework and a 7-day reset.
            Read it tonight. Use it tomorrow.
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
              className="btn-glow group relative w-full rounded-full bg-gold-400 px-8 py-4 text-base font-black text-pine-900 shadow-lg transition-all hover:bg-gold-300 hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              Yes — I want the scripts now
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground lg:justify-start">
              <span className="text-sm font-black text-foreground">$27</span>
              <span className="text-muted-foreground line-through">$89</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>30-day guarantee</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>Instant PDF</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>Discreet billing</span>
            </div>
          </div>
        </div>

        {/* RIGHT — product */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-pine-100/60 via-blush/40 to-gold-100/50 p-4 sm:p-6">
            <Image
              src="/product/book-cover.png"
              alt="When He Goes Quiet — 47 word-for-word scripts for the moment he pulls away"
              width={460}
              height={460}
              priority
              className="w-56 mix-blend-multiply drop-shadow-2xl sm:w-64 lg:w-[22rem]"
            />
            {/* floating price badge */}
            <div className="absolute -bottom-3 -left-3 rotate-[-6deg] rounded-2xl bg-clay-600 px-4 py-2 text-center text-cream shadow-lg sm:-left-5">
              <p className="text-[0.6rem] font-medium uppercase tracking-wider text-cream/80">
                one payment
              </p>
              <p className="font-display text-2xl font-black leading-none">$27</p>
              <p className="text-[0.6rem] font-medium text-cream/70 line-through">was $89</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
