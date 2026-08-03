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
                Three years ago I was checking my phone every 90 seconds. He&apos;d gone silent
                again. I rewrote my last text seventeen times. I sent it anyway. Wrong choice.
              </p>
              <p>
                I tried everything the internet said. &ldquo;Give him space.&rdquo; &ldquo;Be less available.&rdquo;
                &ldquo;Journal about your attachment style.&rdquo; None of it gave me actual words
                for the actual moment I was in.
              </p>
              <p>
                So I built what I needed: a system with exact scripts for the exact moments
                that break you — and a framework to stop going in circles about whether to
                stay or finally leave.
              </p>
              <p className="font-semibold text-foreground">
                That system is this book. And it works because it doesn&apos;t theorize.
                It tells you what to say next.
              </p>
            </div>
            <div className="mt-6 bg-muted rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground italic">
                These tools are educational, not a replacement for therapy. If you are dealing
                with abuse or severe trauma, please work with a licensed professional alongside this system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
