'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT — Copy */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">

            <p className="text-xs font-black text-clay-600 tracking-[0.2em] uppercase mb-5">
              For women who are done losing themselves
            </p>

            {/* Headline — direct pain, no fluff */}
            <h1 className="font-display font-black text-foreground leading-[1.06] mb-6 text-balance" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)' }}>
              He pulls away.<br />
              You spiral.<br />
              <span className="text-pine-600">It stops today.</span>
            </h1>

            {/* Sub — what they GET immediately */}
            <p className="text-lg md:text-xl text-foreground font-semibold mb-2 leading-snug max-w-xl">
              47 word-for-word scripts. Every situation. Tonight.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Ghosting. &ldquo;I need space.&rdquo; The 2AM silence. Cancelled plans. Walking away with
              your head held high. You will know exactly what to send — and how to stay calm doing it.
            </p>

            {/* Bullet list — scannable product facts */}
            <div className="space-y-3 mb-9">
              {[
                '47 tested scripts — exact words, ready to copy',
                'The Decision Framework: 3 questions that end the confusion',
                '7-day nervous system reset — respond instead of react',
                'Instant PDF download. Read it tonight.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pine-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Single bold CTA */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-pine-600 text-white font-black text-base md:text-lg hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-xl w-full sm:w-auto"
              >
                Get Instant Access — $27
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span><span className="line-through">$47</span> → $27 today</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>30-day guarantee</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>Instant PDF</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>Discreet billing</span>
              </div>
            </div>

            <p className="mt-5 text-sm font-bold text-pine-700">
              5,000+ women have already stopped chasing.
            </p>
          </div>

          {/* RIGHT — Book cover */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2 flex flex-col items-center gap-6">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 -m-10 rounded-full bg-pine-600/8 blur-3xl pointer-events-none" />
              {/* Book */}
              <div className="relative w-[230px] md:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-500/30">
                <Image
                  src="/book-covers/fleurite-main-cover.png"
                  alt="You Were Never Too Much — 47 Scripts + Decision Framework by Fleurite"
                  fill
                  sizes="(max-width: 768px) 230px, 270px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating price badge */}
              <div className="absolute -bottom-5 -right-4 bg-pine-600 text-white rounded-2xl px-5 py-3 shadow-xl text-center">
                <p className="text-xs font-bold opacity-75 uppercase tracking-widest">One Payment</p>
                <p className="text-3xl font-black leading-none">$27</p>
                <p className="text-xs font-medium opacity-75 line-through">was $47</p>
              </div>
            </div>

            {/* Trust mini row below book */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                SSL Encrypted
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Instant Access
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                30-Day Guarantee
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
