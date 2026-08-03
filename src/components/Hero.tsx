'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-16 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* LEFT */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">

            {/* Audience line */}
            <p className="text-xs font-bold text-clay-500 tracking-[0.18em] uppercase mb-5">
              For women who are exhausted from chasing someone who keeps pulling away
            </p>

            {/* Headline — femin-bloom style: direct, heavy, problem-state */}
            <h1 className="font-display font-black text-foreground leading-[1.05] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}>
              He Pulled Away.<br />
              You&apos;re Spiraling.<br />
              <span className="text-pine-600">Here&apos;s the System</span><br />
              That Changes It.
            </h1>

            {/* Direct product pitch — no philosophy */}
            <p className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-relaxed max-w-xl">
              47 copy-paste scripts for every moment you freeze, fold, or want to chase —
              plus a complete clarity framework so you stop going in circles.
            </p>

            <p className="text-base text-muted-foreground mb-7 leading-relaxed max-w-xl">
              When he goes silent. When he says &ldquo;I need space.&rdquo; When you&apos;re about to send
              a message at 2 AM that you&apos;ll regret. When you need to walk away without
              begging. There is a script for every one of those moments. Inside this book.
            </p>

            {/* What you get — scannable, direct */}
            <div className="space-y-2.5 mb-8">
              {[
                '47 tested scripts — exact words for the exact moment',
                'The Decision Framework: 3 questions that end the confusion (stay or go)',
                '7-day nervous system reset — so you can respond, not react',
                'Instant PDF. Read it tonight.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-pine-600 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.5 3.5L6 11 2.5 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span className="text-sm md:text-base font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA — single, bold */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pine-600 text-white font-bold text-base md:text-lg hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg w-full sm:w-auto"
              >
                Get Instant Access — $27
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>30-day money-back guarantee</span>
                <span className="hidden sm:inline text-border">|</span>
                <span>Instant PDF download</span>
                <span className="hidden sm:inline text-border">|</span>
                <span>Discreet billing</span>
              </div>
            </div>

            {/* Social proof number */}
            <p className="mt-6 text-sm font-semibold text-pine-600">
              5,000+ women have already stopped chasing.
            </p>
          </div>

          {/* RIGHT — book cover + price */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2 flex flex-col items-center gap-5">
            <div className="relative w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-400/60">
              <Image
                src="/book-covers/fleurite-main-cover.png"
                alt="You Were Never Too Much — 47 Scripts + Decision Framework by Fleurite"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-cover"
                priority
              />
            </div>

            {/* Price badge */}
            <div className="bg-card border border-border rounded-2xl px-7 py-5 text-center shadow-sm w-full max-w-[260px]">
              <p className="text-xs font-bold text-clay-600 uppercase tracking-widest mb-1">Today&apos;s Price</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-foreground">$27</span>
                <span className="text-base text-muted-foreground line-through">$47</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">One payment. Lifetime access.</p>
              <p className="text-xs font-semibold text-pine-600 mt-2">You save $20 today.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
