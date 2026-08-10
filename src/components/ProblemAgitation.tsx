'use client';

import Image from 'next/image';

const scenarios = [
  { text: "You're always the one texting first. Every single time." },
  { text: 'He goes quiet for days — then comes back expecting things to be completely fine.' },
  { text: 'Your message was read. No reply. You have checked back six times since.' },
  { text: "You're constantly available. He's available when it's convenient for him." },
  { text: "You've apologized for things that weren't your fault — just to keep the peace." },
  { text: 'You rehearsed what you wanted to say for hours. When the moment came, you went blank.' },
  { text: 'He called you "too much." And part of you believed him.' },
  { text: "You know this dynamic is unfair. You just don't know what to do about it." },
];

export default function ProblemAgitation() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop: 2-column grid | Mobile: linear flow */}
        <div className="grid gap-8 md:gap-16 md:grid-cols-2">

          {/* HEADING — Mobile: 1st | Desktop: right column row 1 */}
          <div className="md:col-start-2 md:row-start-1">
            <p className="text-xs font-black text-clay-600 tracking-[0.2em] uppercase mb-4">
              Be Honest With Yourself
            </p>
            <h2 className="font-display font-black text-3xl md:text-[2.6rem] text-foreground leading-[1.1] mb-2 text-balance">
              Does Any of This Feel<br />Painfully Familiar?
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              This is not about being needy. This is what happens when someone keeps
              moving the goalposts — and never explains where they moved them.
            </p>
          </div>

          {/* IMAGE — Mobile: 2nd | Desktop: left column */}
          <div className="order-2 md:order-1 md:col-start-1 md:row-start-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-muted">
              <Image
                src="/images/woman-phone-night.png"
                alt="Woman looking at phone anxiously"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Overlay quote */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4">
              <p className="text-white text-sm font-semibold leading-snug italic">
                &ldquo;Why does it always feel like I&apos;m the only one actually trying?&rdquo;
              </p>
              <p className="text-white/60 text-xs mt-1">— the thought no one ever validates</p>
            </div>
          </div>

          {/* PAIN POINTS + REFRAME — Mobile: 3rd | Desktop: right column row 2 */}
          <div className="order-3 md:col-start-2 md:row-start-2">
            <div className="space-y-3.5">
              {scenarios.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-background border border-border rounded-xl px-4 py-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-clay-100 border border-clay-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-clay-500" />
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Reframe box */}
            <div className="mt-7 bg-pine-600 rounded-2xl p-6 text-white">
              <p className="text-lg font-black leading-snug mb-2 text-balance">
                This isn&apos;t neediness.<br />
                The rules of this dynamic were never explained to you.
              </p>
              <p className="text-pine-100 text-sm leading-relaxed">
                The Avoidant&apos;s Unwritten Rules decodes exactly what&apos;s been happening —
                and gives you the exact words and framework to respond on your terms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}