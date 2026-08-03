'use client';

import Image from 'next/image';

export default function CreatorBio() {
  return (
    <section className="py-16 md:py-24 bg-card scroll-mt-20" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-muted">
              <Image
                src="/images/creator-photo.png"
                alt="The Fleurite founder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating quote badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-pine-600 text-white rounded-2xl p-4 shadow-xl max-w-[200px]">
              <p className="text-xs font-bold leading-snug">
                &ldquo;Built from 6 years of real mistakes and hard lessons.&rdquo;
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="pt-6 md:pt-0">
            <p className="text-xs font-bold text-clay-500 uppercase tracking-[0.18em] mb-4">
              Why This System Exists
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
              I Was You.<br />Refreshing. Waiting. Shrinking.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Three years ago, I was refreshing our conversation thread every four minutes.
                He&apos;d gone silent again. I had seventeen unsent drafts and zero clarity.
              </p>
              <p>
                The internet told me to &ldquo;give him space,&rdquo; &ldquo;be less available,&rdquo;
                and &ldquo;work on my attachment style.&rdquo; Helpful theory. Useless at 11PM
                when I needed actual words.
              </p>
              <p>
                So I built the system I needed. One that skips the theory and goes straight to:
                what do I say right now, in this exact moment, without losing myself.
              </p>
              <p className="font-black text-foreground text-lg md:text-xl">
                47 scripts. A decision framework. A 7-day reset.
                Everything I wish someone had handed me.
              </p>
            </div>
            <div className="mt-6 p-4 border-l-4 border-pine-500 bg-pine-50 rounded-r-xl">
              <p className="text-sm text-pine-700 font-medium italic">
                These tools are educational and not a substitute for licensed therapy.
                If you&apos;re dealing with abuse or trauma, please work with a professional alongside this system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
