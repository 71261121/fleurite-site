'use client';

import Image from 'next/image';

export default function ProblemAgitation() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="font-display font-bold text-foreground text-3xl md:text-5xl leading-tight mb-4 text-balance">
            Does This Sound Painfully Familiar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            If any of these made your stomach drop, you&apos;re in the right place.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT — pain scenarios */}
          <div className="space-y-5">
            {[
              'Your partner said "I need space" and your stomach dropped',
              'You check if they&apos;re online... then feel ashamed for checking',
              'You send "something casual" that took 20 minutes to write',
              'You know you should "give them space" but panic takes over',
              'You&apos;re reading this at 2 AM, analyzing what went wrong',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-clay-100 flex items-center justify-center flex-shrink-0 group-hover:bg-clay-200 transition-colors">
                  <svg className="w-4 h-4 text-clay-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base md:text-lg text-foreground font-medium leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT — photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-muted">
              <Image
                src="/images/woman-phone-night.png"
                alt="Woman looking at phone anxiously at night"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom truth punch */}
        <div className="mt-12 md:mt-16 bg-muted rounded-2xl p-6 md:p-10 border border-pine-200">
          <p className="text-lg md:text-2xl font-bold text-foreground leading-tight text-balance">
            You&apos;ve tried <span className="text-pine-600">being more chill</span>.
            You&apos;ve tried <span className="text-pine-600">giving space</span>.
            You&apos;ve tried <span className="text-pine-600">not being so needy</span>.
          </p>
          <p className="text-xl md:text-3xl font-black text-foreground leading-tight mt-4 text-balance">
            But you can&apos;t think your way out of a nervous system problem.
          </p>
        </div>
      </div>
    </section>
  );
}
