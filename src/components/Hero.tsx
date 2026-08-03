'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Emotional Hook */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">

            {/* Label */}
            <div className="inline-block mb-5">
              <span className="text-xs font-bold text-clay-600 tracking-widest uppercase">
                For the woman whose thumb is hovering over send right now
              </span>
            </div>

            {/* Main Headline — data: "I need space" is the #1 trigger phrase across all viral posts */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-4 leading-tight text-balance">
              When he says<br />
              <span className="text-pine-600">&ldquo;I need space&rdquo;</span>
              <br />— here&apos;s exactly<br />what to send.
            </h1>

            {/* Validation line — mirrors top-performing Sincere Emotion copy pattern */}
            <p className="text-lg md:text-xl text-clay-600 font-semibold mb-5 leading-relaxed max-w-lg">
              Not &ldquo;please talk to me.&rdquo; Not &ldquo;I miss you.&rdquo;
              Those hand him back control. These do the opposite.
            </p>

            {/* 4 scripts teaser — mirrors femin-bloom Rank #1 hook format that drove 2,288 comments */}
            <div className="bg-card border border-border rounded-2xl p-5 mb-7 space-y-3">
              <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-1">
                4 texts that actually work (inside the book):
              </p>
              {[
                '"I understand you need space. I need consistency. Let\'s talk when you\'re ready to show up."',
                '"I hope you find what you\'re looking for. I\'m moving on."',
                '"I deserve someone who doesn\'t vanish the moment things get real."',
                '"I\'m not upset. I just realized we want different things."',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-pine-100 text-pine-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground font-medium leading-snug italic">{text}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-1">
                + 43 more for every scenario — ghosting, cancelled plans, 2AM spiral, walking away with dignity.
              </p>
            </div>

            {/* Social proof numbers — grounded in real data */}
            <div className="flex flex-col gap-1.5 mb-8 text-sm font-medium">
              <p className="text-foreground">5,000+ women who stopped chasing</p>
              <p className="text-foreground">47 copy-paste scripts. Use one tonight.</p>
              <p className="text-foreground">Less than one therapy session — $27</p>
            </div>

            {/* Single primary CTA — no free option distraction on hero */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pine-600 text-white font-bold text-base hover:bg-pine-700 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                Get All 47 Scripts — $27
              </button>
              <button
                onClick={() => window.location.href = '/api/downloads/free-guide'}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-muted-foreground font-medium text-sm hover:text-foreground hover:border-foreground transition-all cursor-pointer"
              >
                Or download free reset first
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              30-day guarantee &bull; Instant PDF &bull; Discreet billing
            </p>
          </div>

          {/* RIGHT: Book Covers */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-center gap-6">
            <div className="relative w-full max-w-md h-80">
              {/* FREE Guide — small, secondary */}
              <div className="absolute left-4 top-14 w-28 aspect-[3/4] rounded-lg overflow-hidden shadow-lg z-10 border border-muted hover:shadow-xl transition duration-300">
                <Image
                  src="/book-covers/free-guide-v2.png"
                  alt="Free: The 3-Day Nervous System Reset"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              {/* PAID Book — dominant */}
              <div className="absolute right-0 top-0 w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-20 ring-2 ring-pine-400 hover:shadow-3xl transition duration-300">
                <Image
                  src="/book-covers/paid-book-premium-v2.png"
                  alt="You Were Never Too Much — 47 Scripts + Decision Framework"
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Price badge */}
            <div className="mt-4 text-center max-w-sm">
              <div className="inline-flex flex-col items-center gap-1.5">
                <p className="text-3xl font-black text-foreground">
                  $27
                  <span className="text-base font-normal text-muted-foreground ml-2 line-through">$47</span>
                </p>
                <p className="text-sm text-muted-foreground font-medium">Complete System &bull; 47 Scripts &bull; Lifetime Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
