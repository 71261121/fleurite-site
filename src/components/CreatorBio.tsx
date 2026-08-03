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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating quote badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-pine-600 text-white rounded-2xl p-4 shadow-xl max-w-[210px]">
              <p className="text-xs font-bold leading-snug">
                &ldquo;I built this because I needed it. No one handed it to me.&rdquo;
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="pt-6 md:pt-0">
            <p className="text-xs font-bold text-clay-500 uppercase tracking-[0.18em] mb-4">
              Why This Exists
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
              I Was You. Refreshing.<br />Waiting. Disappearing.
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed text-base md:text-lg">
              <p>
                Three years ago I was refreshing a conversation thread every four minutes.
                He had gone quiet again — no explanation, no timeline. I had seventeen unsent drafts open
                and zero clarity. My chest hurt the way it hurts when you already know the answer
                but are too terrified to hear it.
              </p>
              <p>
                The internet told me to &ldquo;be less available,&rdquo; &ldquo;work on myself,&rdquo;
                and &ldquo;give him space.&rdquo; Fine advice. Completely useless at 11PM when I needed
                to know what to actually say — or whether to say anything at all.
              </p>
              <p>
                So I built the system I needed. Not theory. Not a mindset shift.
                The exact words, the exact framework, the exact daily reset.
                Everything I had to figure out the hard and expensive way.
              </p>
              <p className="font-black text-foreground text-lg md:text-xl">
                5,247 women have used it since. This is not a philosophy book.
                It is a toolkit. And it is ready for you tonight.
              </p>
            </div>

            {/* Trust / disclaimer — honest, not defensive */}
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
