'use client';

import Image from 'next/image';

const SOCIAL_AVATARS = ['/avatar-1.png', '/avatar-2.png', '/avatar-3.png', '/avatar-4.png'];

export default function Hero() {
  return (
    <section className="pt-6 pb-16 md:pt-10 md:pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile: stacked, book first then copy. Desktop: side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

          {/* LEFT — Copy */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">

            {/* Trust micro-line — warm audience already follows you */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex -space-x-2">
                {SOCIAL_AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-background"
                  >
                    <Image src={src} alt="" fill sizes="28px" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-pine-700">
                5,247 women already stopped chasing
              </p>
            </div>

            {/* Headline — tap directly into the pain she already knows */}
            <h1
              className="font-display font-black text-foreground leading-[1.06] mb-5 text-balance"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              He goes quiet.<br />
              You fall apart.<br />
              <span className="text-pine-600">Here&apos;s what to do instead.</span>
            </h1>

            {/* Sub — outcome promise, not philosophy */}
            <p className="text-base md:text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
              47 word-for-word scripts for every moment you freeze, fold, or want to chase —
              plus a <strong className="text-foreground">stay-or-leave framework</strong> and a
              7-day nervous system reset. You read it tonight. You use it tomorrow.
            </p>

            {/* Proof line — before CTA so warm buyer converts faster */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-foreground">4.9/5</span>
              <span className="text-xs text-muted-foreground">&bull; &ldquo;First time I felt calm sending a text.&rdquo; — Rachel T.</span>
            </div>

            {/* Bullet list — concrete, zero fluff */}
            <div className="space-y-2.5 mb-8">
              {[
                '47 tested scripts — copy, paste, send tonight',
                'The exact 3 questions that end months of confusion',
                '7-day reset so you respond, not react',
                'Instant PDF — on your phone in 60 seconds',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-pine-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-pine-600 text-white font-black text-base md:text-lg hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-xl w-full sm:w-auto"
              >
                Yes — I want the scripts now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Price + trust micro-line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="font-black text-foreground text-sm">$27</span>
                <span className="line-through text-muted-foreground">$47</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>30-day guarantee</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>Instant PDF</span>
                <span className="text-border hidden sm:inline">|</span>
                <span>Discreet billing</span>
              </div>
            </div>

          </div>

          {/* RIGHT — Book cover */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2 flex flex-col items-center gap-6">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 -m-10 rounded-full bg-pine-600/8 blur-3xl pointer-events-none" />
              {/* Book */}
              <div className="relative w-[200px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-500/30">
                <Image
                  src="/book-covers/fleurite-main-cover.png"
                  alt="You Were Never Too Much — 47 Scripts + Decision Framework by Fleurite"
                  fill
                  sizes="(max-width: 768px) 200px, 260px"
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
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                SSL Secure
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                60-sec download
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30-Day Guarantee
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
