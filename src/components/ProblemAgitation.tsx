'use client';

import Image from 'next/image';

const scenarios = [
  { text: 'He read your message. Did not reply. You have refreshed that screen eleven times.' },
  { text: 'He said "I need space." You agreed. Then cried for three hours because you do not actually know what that means.' },
  { text: 'You know chasing makes it worse. You sent the text anyway. Now you feel worse.' },
  { text: 'He came back like nothing happened. You were so relieved you forgave things you did not want to forgive.' },
  { text: 'It is midnight and you are analyzing a one-word reply like it is a legal document.' },
  { text: 'You have rehearsed the whole "I deserve more" speech. You have not said it once.' },
];

export default function ProblemAgitation() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT — Photo */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-muted">
              <Image
                src="/images/woman-phone-night.png"
                alt="Woman looking at phone anxiously"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Overlay quote — her real inner monologue */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4">
              <p className="text-white text-sm font-semibold leading-snug italic">
                &ldquo;I just want to know if he still cares. That is all I am asking.&rdquo;
              </p>
              <p className="text-white/60 text-xs mt-1">— the thought she has had 200 times this week</p>
            </div>
          </div>

          {/* RIGHT — Scenarios */}
          <div className="order-1 md:order-2">
            <p className="text-xs font-black text-clay-600 tracking-[0.2em] uppercase mb-4">
              You Know This Feeling
            </p>
            <h2 className="font-display font-black text-3xl md:text-[2.6rem] text-foreground leading-[1.1] mb-2 text-balance">
              If You Have Done Any of This,<br />You Are in the Right Place.
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              This is not about being weak. This is what a nervous system in alarm looks like.
              And it has a name, and a fix.
            </p>

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

            {/* Truth punch — reframe, not shame */}
            <div className="mt-7 bg-pine-600 rounded-2xl p-6 text-white">
              <p className="text-lg font-black leading-snug mb-2 text-balance">
                None of this makes you needy.<br />
                It makes you someone who never got the actual words.
              </p>
              <p className="text-pine-100 text-sm leading-relaxed">
                The scripts inside this book are the words. Every situation. Ready to use tonight.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
