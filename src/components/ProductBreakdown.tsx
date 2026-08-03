'use client';

import Image from 'next/image';

const sections = [
  {
    tag: 'STOP WASTING TIME',
    title: 'The Decision Framework',
    items: [
      'The "Red Flag" Filter: Know if your partner is avoidant (worth the work) or toxic (leave now)',
      'The Decision Checklist: Make the stay-or-leave call with clarity, not panic',
      'Stop guessing. Start knowing exactly where you stand.',
    ],
  },
  {
    tag: 'STOP THE PANIC BEFORE YOU TEXT',
    title: 'Scripts for When He Pulls Away',
    items: [
      'Script 7: The exact words when he says "I need space"',
      'Script 12: What to do instead of texting at 2AM',
      'Script 23: How to ask for consistency without sounding desperate',
      'Script 41: The 28-word walk-away text that keeps your dignity intact',
    ],
  },
  {
    tag: 'STOP THE OVERTHINKING',
    title: '7-Day Nervous System Reset',
    items: [
      'Day 1-2: Understand WHY you panic (it\'s not weakness, it\'s biology)',
      'Day 3-4: Replace the spiral with a 90-second protocol that actually works',
      'Day 5-7: Lock in the calm — sleep, triggers, your personal emergency plan',
    ],
  },
];

export default function ProductBreakdown() {
  return (
    <section className="py-16 md:py-24 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-clay-500 uppercase tracking-[0.18em] mb-4">
            What You Get Inside
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance">
            Everything You Need.<br />Nothing You Don&apos;t.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Every page is a script, a tool, or a technique. No filler.
          </p>
        </div>

        {/* Book + sections layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

          {/* Book cover column */}
          <div className="flex flex-col items-center gap-5 lg:sticky lg:top-24">
            <div className="relative w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pine-400/60">
              <Image
                src="/book-covers/fleurite-main-cover.png"
                alt="You Were Never Too Much — 47 Scripts + Decision Framework"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-4xl font-black text-foreground">$27</span>
                <span className="text-base text-muted-foreground line-through">$47</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Instant PDF. One payment. Yours forever.</p>
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="w-full px-6 py-3.5 rounded-xl bg-pine-600 text-white font-bold text-sm hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                Get Instant Access — $27
              </button>
              <p className="text-xs text-muted-foreground mt-2">30-day money-back guarantee</p>
            </div>
          </div>

          {/* Sections column */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 md:p-8">
                <p className="text-xs font-black text-pine-600 uppercase tracking-[0.15em] mb-2">
                  {section.tag}
                </p>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-pine-500 mt-0.5 font-black text-sm flex-shrink-0">→</span>
                      <span className="text-sm md:text-base text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Trust line at the bottom */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure checkout
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Instant digital download
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Works on all devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
