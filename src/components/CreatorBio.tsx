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
                src="/creator.png"
                alt="Lena, creator of The Avoidant's Unwritten Rules"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating quote badge — updated */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-pine-600 text-white rounded-2xl p-4 shadow-xl max-w-[220px]">
              <p className="text-xs font-bold leading-snug">
                &ldquo;I was playing a game where someone else knew all the rules — and I didn&apos;t have a single one.&rdquo;
              </p>
            </div>
          </div>

          {/* Story — Lena identity, resentment-connected */}
          <div className="pt-6 md:pt-0">
            <p className="text-xs font-bold text-clay-500 uppercase tracking-[0.18em] mb-4">
              Why This Exists
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
              I Was Playing By Rules<br />I&apos;d Never Been Given.
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed text-base md:text-lg">
              <p>
                For six years, I was in a relationship with someone avoidant. I gave 100% and spent
                most of that time convinced the problem was me. Too emotional. Too needy. Too much.
              </p>
              <p>
                The turning point wasn&apos;t a breakup. It was a realization: I had been playing a game
                with hidden rules. His withdrawal wasn&apos;t random. His silence wasn&apos;t about me.
                But nobody had ever explained the actual mechanics — and without them, I kept losing.
              </p>
              <p>
                Everything I learned the hard way — the patterns, the scripts, the framework for
                deciding whether to stay or go — I put into this system. Not as a therapist.
                As someone who lived through it and built the tools I desperately needed.
              </p>
              <p className="font-black text-foreground text-lg md:text-xl">
                7,700+ women have used it since. This is not a philosophy book.
                It&apos;s a toolkit. And it&apos;s ready for you tonight.
              </p>
            </div>

            <p className="mt-5 text-sm text-muted-foreground font-semibold">
              — Lena, creator of The Avoidant&apos;s Unwritten Rules
            </p>

            {/* Disclaimer */}
            <div className="mt-6 p-4 border-l-4 border-pine-500 bg-pine-50 rounded-r-xl">
              <p className="text-sm text-pine-700 font-medium italic">
                These tools are educational — not a substitute for licensed therapy.
                If you are experiencing abuse or crisis, please work with a professional
                alongside this resource. Your safety matters more than any book.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}