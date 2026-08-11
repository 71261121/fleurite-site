'use client';

import Image from 'next/image';

const pillars = [
  {
    number: '01',
    tag: 'SEE',
    title: 'The 5 Unwritten Rules',
    description:
      "The rules he was never forced to explain — because you were absorbing the consequences without knowing they existed. Understanding the mechanics changes everything about how you respond.",
    items: [
      "Rule 1 — Why he 'pulls away' isn't random. It's a predictable defensive cycle with predictable tells.",
      'Rule 2 — Why the more you explain your feelings, the less emotionally safe he feels to stay.',
      "Rule 3 — Why his silence isn't neutral. It's a regulation strategy that costs you — not him.",
      'Rule 4 — Why he comes back after distance and expects nothing to have changed.',
      "Rule 5 — Why you keep getting blamed for reacting to behavior he won't acknowledge.",
    ],
  },
  {
    number: '02',
    tag: 'CALM',
    title: 'The Nervous System Protocol',
    description:
      'Before you can send the right thing, your body has to be in a state where you can send the right thing. This is the part every other book skips.',
    items: [
      'The 90-Second Interrupt — stops the panic spiral before you reach for your phone',
      "The Reality Anchor — shuts down 'they hate me' interpretations the moment they start",
      'The Sleep Protocol — specifically for nights when his silence feels like abandonment',
      'The 10pm Boundary — protect your decision-making from your own biology',
      'Days 1–7: Build your personal emergency plan so the next silence never catches you unprepared',
    ],
  },
  {
    number: '03',
    tag: 'STAND',
    title: '47 Word-for-Word Scripts',
    description:
      'Exact words for every moment you freeze, fold, or want to chase. Not templates — specific, tested, ready to send.',
    items: [
      "The Mirror Text (Script 3) — de-escalates his mood without you apologizing for existing",
      "The Space Acceptance Script (Script 4) — what to say to 'I need space' without sounding desperate or angry",
      'The Ghosting Protocol (Scripts 17–24) — hour-by-hour plan when he goes completely dark',
      "The Re-entry Script (Script 23) — when he comes back and you don't want to say the wrong thing",
      'The Walk-Away Text (Script 41) — 19 words. Door closed. With your dignity fully intact.',
    ],
  },
  {
    number: '04',
    tag: 'CHOOSE',
    title: 'The 3-Question Decision Framework',
    description:
      "The question is not 'will he change?' The question is: based on his actual behavior — not his words, not his potential — does this relationship have a future you actually want?",
    items: [
      'Question 1 — Behavioral: What has he consistently done? Not what he said. What he did.',
      'Question 2 — Pattern: Is this improving, or are you adjusting your standards downward?',
      'Question 3 — Direction: Where is this realistically headed in 6 months if nothing changes?',
      'Result: Stay, leave, or stand — decided by you, from your side, not waiting on his silence',
      'Most women who complete it report clarity within 7 days. Not because someone told them what to do.',
    ],
  },
];

export default function ProductBreakdown() {
  return (
    <section className="py-16 md:py-24 bg-card scroll-mt-20" id="products">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-black text-clay-600 uppercase tracking-[0.18em] mb-4">
            What&apos;s Actually Inside
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-balance">
            The Avoidant&apos;s Unwritten Rules
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Not theory. Not &ldquo;work on yourself&rdquo; advice. Every page is a rule decoded,
            a script ready to send, or a tool to stay grounded.
          </p>
        </div>

        {/* 2. BOOK COVER — centered, bigger */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-pine-100/50 via-cream/30 to-pine-50/40 p-6 sm:p-8">
            <Image
              src="/product/book-cover.png"
              alt="The Avoidant's Unwritten Rules — by Fleurite.me"
              width={520}
              height={520}
              className="w-64 sm:w-72 lg:w-80 drop-shadow-2xl"
            />
          </div>
          <div className="mt-4 flex flex-col items-center gap-1 text-center">
            <p className="text-sm font-bold text-foreground">Instant PDF Download</p>
            <p className="text-xs text-muted-foreground">Read on phone, tablet, or laptop</p>
          </div>
        </div>

        {/* 3. ALL 4 PILLARS */}
        <div className="space-y-6 mb-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black text-pine-600/40 font-mono">{pillar.number}</span>
                <span className="text-xs font-black text-pine-600 uppercase tracking-[0.15em] bg-pine-50 px-2 py-0.5 rounded-full">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-clay-500 mt-0.5 font-black text-sm flex-shrink-0">→</span>
                    <span className="text-sm md:text-base text-foreground leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Script 7 preview — only in STAND pillar */}
              {pillar.tag === 'STAND' && (
                <div className="mt-6 bg-muted/50 border border-border rounded-xl p-4">
                  <p className="text-[10px] font-black text-pine-600 uppercase tracking-widest mb-2">
                    SCRIPT 7 — WHEN YOU NEED A DIRECT ANSWER
                  </p>
                  <p className="text-sm italic text-foreground leading-relaxed">
                    &ldquo;I don&apos;t know if we&apos;re working through something or if this is you stepping back entirely. I&apos;m not going to keep guessing. Can you tell me which one it is?&rdquo;
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-2">
                    47 more scripts like this inside the book.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4. ZARA vs AISHA STORY */}
        <div className="bg-pine-900 rounded-2xl p-6 md:p-8 text-white mb-8">
          <p className="text-xs font-black text-clay-300 uppercase tracking-[0.18em] mb-5">
            Why This Is A System — Not Just Scripts
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs font-black text-white/50 uppercase tracking-wider mb-3">Without Pillar 2</p>
              <p className="text-sm text-white/90 leading-relaxed">
                Zara reads Script 17. Sends it. 6 hours of silence follow.<br /><br />
                She opens her phone again. Sends a follow-up. Then another.<br />
                <em className="text-white/60">&ldquo;Sorry — I didn&apos;t mean to pressure you.&rdquo;</em><br /><br />
                He pulls back further. Zara blames the script.<br />
                <span className="text-white/60">The script wasn&apos;t wrong. Her nervous system was still activated.</span>
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-clay-400/30">
              <p className="text-xs font-black text-clay-300 uppercase tracking-wider mb-3">With All 4 Pillars</p>
              <p className="text-sm text-white/90 leading-relaxed">
                Aisha has everything. Same Script 17. Same 6 hours.<br /><br />
                She uses the 90-Second Interrupt. Heart rate slows.<br />
                Reality Anchor: <em className="text-white/70">&ldquo;He&apos;s overwhelmed. This isn&apos;t about me.&rdquo;</em><br /><br />
                She puts the phone down.<br />
                Next morning: <em className="text-clay-300">&ldquo;Hey. Can we talk tonight?&rdquo;</em>
              </p>
            </div>
          </div>
          <p className="text-center text-sm font-black text-clay-300">
            Same script. Same silence. Different nervous system. Different result.<br />
            <span className="text-white mt-1 block">That&apos;s why the pillars work together — not separately.</span>
          </p>
        </div>

        {/* 5. TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-2">
          {[
            { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'Secure checkout' },
            { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', label: 'Instant PDF on your device' },
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Works on phone, tablet, laptop' },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
              </svg>
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
