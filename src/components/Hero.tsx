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
            {/* Micro-Level Emotional Hook */}
            <div className="inline-block mb-6">
              <p className="text-xs font-bold text-black tracking-widest uppercase">
                You weren&apos;t born this way. You were trained.
              </p>
            </div>

            {/* Main Headline - CORE PAIN POINT #1: 2am panic spiral */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-4 leading-tight">
              Stop panic-texting<br/>
              <span className="text-black">at 2am</span>
            </h1>
            
            {/* Subheadline - The nervous system truth */}
            <p className="text-lg md:text-xl text-black font-semibold mb-6">
              Your anxiety isn&apos;t weakness. It&apos;s a pattern you can break.
            </p>

            {/* Core Pain-Point: The cycle of chasing */}
            <p className="text-xl text-muted-foreground mb-3 leading-relaxed max-w-lg font-semibold">
              He pulls away. Your nervous system enters panic mode. You text. You chase. He withdraws more.
            </p>
            
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg">
              This isn&apos;t about you being &quot;too much.&quot; It&apos;s about your nervous system being trained to believe: <span className="italic">&quot;If I don&apos;t chase, I&apos;ll be abandoned.&quot;</span> You need to rewire that belief. <span className="font-semibold text-foreground">The Clarity System teaches you exactly how.</span> Plus 35+ scripts for every moment you freeze or fold.
            </p>

            {/* Social Proof - Real numbers from viral content */}
            <div className="flex flex-col gap-2 mb-8 text-sm font-medium text-muted-foreground">
              <p className="text-foreground">✓ 12,400+ shares (viral psychology content)</p>
              <p className="text-foreground">✓ 4,800+ women stopped the chase cycle</p>
              <p className="text-foreground">✓ Created by Eliza after 6 years with an avoidant partner</p>
            </div>

            {/* Single CTA - NO FREE OPTION */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-black text-white font-bold text-base hover:bg-gray-900 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                Get The System — $27
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-black text-black font-bold hover:bg-gray-100 transition-all"
              >
                See What&apos;s Inside
              </Link>
            </div>
          </div>

          {/* RIGHT: Book Showcase */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center justify-center gap-6">
            {/* Book Display - Single, Premium */}
            <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
              <div className="w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
                <Image
                  src="/book-covers/fleurite-reset.png"
                  alt="The Fleurite Reset System by Eliza"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Price & Value Stack */}
            <div className="text-center max-w-sm">
              <div className="inline-flex flex-col items-center gap-3">
                <p className="text-3xl font-black text-foreground">
                  $27
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-300">
                  <p className="text-sm font-semibold text-foreground mb-2">What&apos;s inside:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✓ 7-day reset protocol (PDF guide)</li>
                    <li>✓ Daily checklist & energy tracker</li>
                    <li>✓ Founder&apos;s personal notes from 9 years research</li>
                    <li>✓ Lifetime access (download forever)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
