'use client';

import Image from 'next/image';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="products">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-pine-100 text-pine-700 text-xs font-semibold mb-4 tracking-widest uppercase">
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            You Were Never Too Much
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            The complete guide that gives you the exact words to say — and trains your nervous system to stay calm long enough to say them.
          </p>
        </div>

        {/* Single product layout */}
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* Book cover */}
          <div className="w-full md:w-64 flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-56 md:w-64 mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-400">
              <Image
                src="/book-covers/paid-book-premium-v2.png"
                alt="You Were Never Too Much — The Complete Guide + 47 Scripts"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-3xl font-black text-foreground">
                $27
                <span className="text-base font-normal text-muted-foreground ml-2 line-through">$47</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Limited time price</p>
            </div>
          </div>

          {/* What is inside */}
          <div className="flex-1">
            <ul className="space-y-4 mb-8">
              {[
                {
                  title: '47 Copy-Paste Scripts',
                  desc: 'Script #7: When he says "I need space." Script #12: When you want to text at 2AM. Script #23: "I deserve consistency." Script #41: Walking away with dignity. Every scenario you face is covered.',
                },
                {
                  title: 'The Binary Question',
                  desc: '3 questions that cut through the confusion and give you a clear answer: is this relationship worth staying in, or is it time to go? No more going in circles.',
                },
                {
                  title: '7-Day Nervous System Reset',
                  desc: 'Scripts alone fail if your body is in panic mode. This reset trains your nervous system to stay calm so you can respond — not react — when he goes cold.',
                },
                {
                  title: 'Instant PDF — Lifetime Access',
                  desc: 'Download immediately. Yours forever. No subscription, no upsell.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-pine-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.dispatchEvent(new Event('open-checkout'))}
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-pine-600 text-white font-bold text-base hover:bg-pine-700 transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              Get Instant Access — $27
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              30-day money-back guarantee &bull; Discreet billing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
