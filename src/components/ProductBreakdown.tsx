'use client';

import Image from 'next/image';

const sections = [
  {
    number: '01',
    tag: 'The Scripts',
    title: '47 Word-for-Word Scripts',
    description:
      'Copy. Adjust two words. Send. No more staring at a blank screen at midnight wondering if you sound too needy.',
    items: [
      'Script 7 — He says "I need space." You stop performing calm and say this instead.',
      'Script 12 — The exact message that ends the 2AM spiral before you send the wrong thing.',
      'Script 23 — How to ask for consistency without sounding like you are auditioning for his love.',
      'Script 35 — When you are done being breadcrumbed and need to say it without losing your dignity.',
      'Script 41 — The walk-away. Two sentences. Door closed. No drama.',
    ],
  },
  {
    number: '02',
    tag: 'The Clarity',
    title: 'The Stay-or-Leave Decision Framework',
    description:
      'Three questions about his actual behavior — not his potential, not your feelings — that produce a clear answer most women find in a single afternoon.',
    items: [
      'Is this avoidant attachment, or is this just a man who does not want to show up?',
      'Is his behavior improving, or are you just adjusting to it?',
      'What would you tell your best friend to do — and why have you not done it?',
    ],
  },
  {
    number: '03',
    tag: 'The Reset',
    title: '7-Day Nervous System Reset',
    description:
      'So the next time he goes quiet, you do not spiral. You respond from the version of yourself who has standards.',
    items: [
      'Days 1–2: Why you panic (nervous system science, not personal weakness) — and how to stop it mid-spiral.',
      'Days 3–4: The 90-second protocol. Tested. Science-backed. Works when you are already activated.',
      'Days 5–7: Build your own emergency plan so the next silence does not catch you unprepared.',
    ],
  },
];

export default function ProductBreakdown() {
  return (
    <section className="py-16 md:py-24 bg-card scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-black text-clay-600 uppercase tracking-[0.18em] mb-4">
            What Is Inside
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance">
            Every page is a script,<br />a tool, or a technique.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            No philosophy. No filler. You can jump to what you need in under 30 seconds.
          </p>
        </div>

        {/* Bundle showcase */}
        <div className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
          <Image
            src="/product/bundle.png"
            alt="Everything inside The Rooted Method — the book, the reflection workbook, printed script cards, and the audio companion"
            width={1024}
            height={1024}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pine-900/80 to-transparent p-5">
            <p className="text-sm font-black text-cream md:text-base">
              The book + script cards + reflection workbook + audio companion
            </p>
            <p className="text-xs text-cream/80">Everything downloads instantly. Yours for life.</p>
          </div>
        </div>

        {/* Book + sections layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">

          {/* Book cover column */}
          <div className="flex flex-col items-center gap-5 lg:sticky lg:top-24">
            <div className="relative w-[220px]">
              <Image
                src="/product/book-cover.png"
                alt="The Rooted Method — 47 Scripts + Decision Framework"
                width={440}
                height={440}
                className="w-full drop-shadow-2xl"
              />
            </div>

            {/* Value stack */}
            <div className="w-full bg-background border border-border rounded-2xl p-5">
              <p className="text-xs font-black text-pine-600 uppercase tracking-widest mb-4 text-center">
                What You Get
              </p>
              <div className="space-y-3 mb-5">
                {[
                  { label: '47 Scripts', value: '$47' },
                  { label: 'Decision Framework', value: '$29' },
                  { label: '7-Day Reset', value: '$29' },
                  { label: 'Lifetime access', value: 'Free' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{label}</span>
                    <span className="text-muted-foreground line-through text-xs">{value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="font-black text-foreground">Today</span>
                  <span className="font-black text-pine-600 text-lg">$27</span>
                </div>
              </div>
              <button
                onClick={() => window.dispatchEvent(new Event('open-checkout'))}
                className="w-full px-5 py-3.5 rounded-xl bg-pine-600 text-white font-bold text-sm hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                Yes — I want this now
              </button>
              <p className="text-xs text-muted-foreground mt-2 text-center">30-day money-back guarantee</p>
            </div>
          </div>

          {/* Sections column */}
          <div className="space-y-5">
            {sections.map((section, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-pine-600/40 font-mono">{section.number}</span>
                  <span className="text-xs font-black text-pine-600 uppercase tracking-[0.15em]">{section.tag}</span>
                </div>
                <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-1">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{section.description}</p>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-clay-500 mt-0.5 font-black text-sm flex-shrink-0">→</span>
                      <span className="text-sm md:text-base text-foreground leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Trust line */}
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
                Instant PDF on your device
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Works on phone, tablet, laptop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
