'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Emotional Hook + Book Showcase */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Micro-Level Emotional Hook - AUTHENTIC */}
            <div className="inline-block mb-6">
              <p className="text-xs font-bold text-clay-600 tracking-widest uppercase">
                Not theory. Just truth.
              </p>
            </div>

            {/* Main Headline - RAW POWER */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-6 leading-tight">
              You shrink.<br/>
              <span className="text-pine-600">He leaves.</span>
            </h1>

            {/* Emotional Validation - MORE RAW than competitor */}
            <p className="text-xl text-muted-foreground mb-3 leading-relaxed max-w-lg font-semibold">
              You weren&apos;t born anxious. He made you that way.
            </p>
            
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Every time you shrink yourself to fit in his life, you teach him that your needs don&apos;t matter. And every time he pulls away, your nervous system learns: <span className="italic text-foreground font-medium">&quot;I&apos;m not safe. I need to chase to survive.&quot;</span> Stop the cycle. Get the scripts. Know whether to stay or walk.
            </p>

            {/* Social Proof - HIGHER NUMBERS = MORE CREDIBLE */}
            <div className="flex flex-col gap-2 mb-8 text-sm font-medium text-muted-foreground">
              <p className="text-foreground">✓ 943 shares (6-10x higher than industry average)</p>
              <p className="text-foreground">✓ 5,000+ women stopped chasing</p>
              <p className="text-foreground">✓ 47 copy-paste scripts ready to use tonight</p>
            </div>

            {/* Two-Step CTA - PREMIUM POSITIONING */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.href = '/api/downloads/free-guide'}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pine-600 text-white font-bold text-base hover:bg-pine-700 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                Start Free (No Email)
              </button>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-pine-600 text-pine-600 font-bold hover:bg-pine-50 transition-all"
              >
                Get All 47 Scripts — $27
              </Link>
            </div>
          </div>

          {/* RIGHT: Book Covers (Different Designs) - PREMIUM LAYOUT */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md h-80">
              {/* FREE Guide - Left, Subtle, Smaller */}
              <div className="absolute left-4 top-12 w-32 aspect-[3/4] rounded-lg overflow-hidden shadow-lg z-10 border-2 border-muted hover:shadow-xl transition duration-300">
                <Image
                  src="/book-cover-free.png"
                  alt="Free: Why You Shrink Yourself"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>

              {/* PAID Book - Right, DOMINANT, BIGGER */}
              <div className="absolute right-0 top-0 w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-20 border-3 border-pine-400">
                <Image
                  src="/book-cover-paid.png"
                  alt="Complete: You Were Never Too Much"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-clay-600 to-clay-700 text-white px-4 py-2 rounded-full text-xs font-black shadow-lg border border-clay-400">
                  Limited $27
                </div>
                {/* Pricing Footer */}
                <div className="absolute bottom-3 left-3 right-3 text-center bg-black/40 backdrop-blur-sm rounded-lg py-2.5 border border-white/20">
                  <p className="text-white text-xs font-bold">
                    <span className="line-through opacity-70">$47</span> <span className="ml-1">$27</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
