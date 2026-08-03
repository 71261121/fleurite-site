'use client';

import Image from 'next/image';

const scenarios = [
  { text: 'He went quiet. Your stomach dropped. You\'ve checked his "last seen" six times in the last hour.' },
  { text: 'You typed and deleted the same message ten times. You sent a watered-down version. He hasn\'t replied.' },
  { text: 'You know you should give him space. You physically cannot stop yourself from reaching out.' },
  { text: 'You rehearsed the whole conversation in your head. In real life you froze and said nothing.' },
  { text: 'It\'s 2AM. You\'re still awake, still analysing, still wondering what you did wrong.' },
  { text: 'He came back. You were so relieved you said yes to things you didn\'t even want.' },
];

export default function ProblemAgitation() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT — photo first, like femin-bloom */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-muted">
              <Image
                src="/images/woman-phone-night.png"
                alt="Woman looking at phone anxiously at night"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Overlay quote */}
            <div className="absolute bottom-4 left-4 right-4 bg-foreground/85 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white text-sm font-semibold leading-snug italic">
                &ldquo;I rewrote that text seventeen times. I sent it anyway. Wrong choice.&rdquo;
              </p>
              <p className="text-white/60 text-xs mt-1">— every woman who needed this book</p>
            </div>
          </div>

          {/* RIGHT — scenarios */}
          <div className="order-1 md:order-2">
            <p className="text-xs font-black text-clay-600 tracking-[0.2em] uppercase mb-4">
              Be Honest With Yourself
            </p>
            <h2 className="font-display font-black text-3xl md:text-[2.6rem] text-foreground leading-[1.1] mb-8 text-balance">
              Does Any of This Sound Like You?
            </h2>

            <div className="space-y-4">
              {scenarios.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-clay-100 border border-clay-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-clay-500" />
                  </div>
                  <p className="text-base text-foreground font-medium leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Truth punch */}
            <div className="mt-8 bg-pine-600 rounded-2xl p-6 text-white">
              <p className="text-lg font-black leading-snug mb-2 text-balance">
                You don&apos;t have a &ldquo;neediness&rdquo; problem.
              </p>
              <p className="text-pine-100 text-sm leading-relaxed">
                You have a &ldquo;no one gave you the actual words&rdquo; problem.
                That is exactly what this book fixes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
