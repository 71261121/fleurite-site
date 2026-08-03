'use client';

import Image from 'next/image';
import { useState } from 'react';

const openCheckout = () => window.dispatchEvent(new Event('open-checkout'));

type VideoTestimonial = {
  photo: string;
  name: string;
  age: string;
  hook: string;
  story: string;
  duration: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    photo: '/testimonials/woman-1.png',
    name: 'Rachel',
    age: '32',
    hook: 'He went cold for 4 days.',
    story:
      'I opened Script 7, changed maybe three words, and sent it. He replied in ten minutes — no drama, no begging. I cried a little. Not because he replied, but because for once I did not lose myself while I waited.',
    duration: '0:48',
  },
  {
    photo: '/testimonials/woman-2.png',
    name: 'Simone',
    age: '28',
    hook: 'I rewrote that text 40 times.',
    story:
      'It was midnight. I had typed and deleted the same message for an hour. I read the section on protest behavior and realized I was not angry — I was scared. I put the phone down and slept. First full night in weeks.',
    duration: '1:12',
  },
  {
    photo: '/testimonials/woman-3.png',
    name: 'Dana',
    age: '35',
    hook: 'Eight months of confusion — gone in a day.',
    story:
      'I used the Decision Framework on a Sunday afternoon. By Tuesday I had the clarity I had been chasing for eight months. I used Script 41 to close the door. He apologized. I did not reply. First time I chose myself over the hope of him.',
    duration: '0:56',
  },
];

const quoteCards = [
  {
    quote: '"For the first time I felt calm sending a text instead of sick to my stomach."',
    name: 'Maya R.',
    result: 'Stopped the 2am spiral',
    bg: 'bg-pine-700',
  },
  {
    quote: '"I stopped performing for someone who kept me guessing. That was the whole shift."',
    name: 'Camille',
    result: 'Left with dignity intact',
    bg: 'bg-clay-600',
  },
  {
    quote: '"By day five I was checking my phone less — not because I cared less, but because I was less afraid."',
    name: 'Priya K.',
    result: 'Finished the 7-day reset',
    bg: 'bg-pine-600',
  },
];

const writtenReviews = [
  {
    name: 'Lauren M.',
    location: 'Chicago, IL',
    photo: '/testimonials/woman-2.png',
    headline: 'I finally left. And I did not fall apart.',
    quote:
      'I had been circling the same decision for months. The stay-or-leave framework asked me questions no one else had. An hour later I knew. I have never felt that clear.',
  },
  {
    name: 'Aisha B.',
    location: 'Austin, TX',
    photo: '/testimonials/woman-3.png',
    headline: 'Worth it for one script alone.',
    quote:
      'Script 12 alone saved me from a text I would have regretted for weeks. There are 46 more. This is the least I have ever spent to feel the most like myself.',
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? 'text-gold-400' : 'text-border'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const [active, setActive] = useState(0);
  const current = videoTestimonials[active];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-clay-600">
            Results speak louder than words
          </p>
          <h2 className="mb-3 text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
            Women who were exactly where you are
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-black text-foreground">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">from 7,700+ readers</span>
          </div>
        </div>

        {/* FEATURED video testimonial player */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* poster */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <Image
              src={current.photo}
              alt={`${current.name}, ${current.age}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-900/70 via-transparent to-transparent" />
            {/* play button */}
            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % videoTestimonials.length)
              }
              aria-label="Play next testimonial"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-pine-800 shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            {/* duration + name */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
              <div className="text-cream">
                <p className="font-black">{current.name}, {current.age}</p>
                <p className="text-xs text-cream/80">Verified reader</p>
              </div>
              <span className="rounded-full bg-pine-900/70 px-2 py-1 text-xs font-medium text-cream">
                {current.duration}
              </span>
            </div>
          </div>

          {/* transcript */}
          <div className="text-center lg:text-left">
            <Stars />
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-foreground text-balance md:text-3xl">
              &ldquo;{current.hook}&rdquo;
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {current.story}
            </p>

            {/* thumbnail selector */}
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              {videoTestimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  aria-label={`Play ${t.name}'s testimonial`}
                  className={`relative h-14 w-14 overflow-hidden rounded-xl ring-2 transition-all ${
                    i === active ? 'ring-pine-600' : 'ring-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={t.photo} alt="" fill sizes="56px" className="object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-pine-900/30">
                    <svg className="h-4 w-4 text-cream" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* colored quote cards */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {quoteCards.map((card) => (
            <div
              key={card.name}
              className={`${card.bg} flex min-h-[190px] flex-col justify-between rounded-2xl p-6`}
            >
              <p className="mb-4 text-base font-semibold italic leading-relaxed text-cream">
                {card.quote}
              </p>
              <div>
                <p className="text-sm font-black text-cream">{card.name}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-cream/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-cream/70">{card.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* written reviews */}
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {writtenReviews.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <Stars />
              <p className="text-sm font-black leading-snug text-foreground">{t.headline}</p>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-3">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-pine-100">
                  <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="ml-auto rounded-full border border-pine-100 bg-pine-50 px-2 py-0.5 text-[10px] font-bold text-pine-700">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { number: '7,700+', label: 'Women helped' },
            { number: '4.9/5', label: 'Average rating' },
            { number: '47', label: 'Tested scripts' },
            { number: '30-day', label: 'Money-back guarantee' },
          ].map(({ number, label }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="mb-0.5 text-2xl font-black text-pine-600 md:text-3xl">{number}</p>
              <p className="text-xs font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openCheckout}
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-base font-black text-pine-900 shadow-lg transition-all hover:bg-gold-300 active:scale-[0.98]"
          >
            Yes — I want the scripts now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            $27 &bull; 30-day guarantee &bull; Instant PDF
          </p>
        </div>
      </div>
    </section>
  );
}
