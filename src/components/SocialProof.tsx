'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rachel T.',
    location: 'New York, NY',
    photo: '/avatar-1.png',
    rating: 5,
    headline: 'I sent the text. He actually replied.',
    quote:
      'He went cold for four days. I opened Script 7, changed maybe three words, and sent it. He replied in ten minutes. No drama, no begging. I cried a little. Not because he replied — because for once I did not lose myself waiting.',
  },
  {
    name: 'Maya R.',
    location: 'Los Angeles, CA',
    photo: '/avatar-2.png',
    rating: 5,
    headline: 'Stopped a 2AM spiral before it started.',
    quote:
      'I was literally typing at midnight. Deleted it, opened the book, read the section on protest behavior. I realized I was not upset at him — I was scared. I put the phone down. Went to sleep. First full night in weeks. That alone was worth $27.',
  },
  {
    name: 'Lauren M.',
    location: 'Chicago, IL',
    photo: '/avatar-3.png',
    rating: 5,
    headline: 'I finally left. And I did not fall apart.',
    quote:
      'I used the Decision Framework on a Sunday afternoon. By Tuesday I had clarity I had been chasing for eight months. Used Script 41 to close the door. He texted back apologizing. I did not respond. First time I ever chose myself over the hope of him.',
  },
  {
    name: 'Priya K.',
    location: 'Austin, TX',
    photo: '/avatar-4.png',
    rating: 5,
    headline: 'The 7-day reset changed how I feel in my body.',
    quote:
      'The scripts I expected. The nervous system section I did not. By day five I noticed I was checking my phone less. Not because I cared less — because I was less afraid. That shift is real and I feel it every day.',
  },
];

// Video testimonial data — styled like femin-bloom's video proof section
const videoCards = [
  {
    quote: '"I rewrote that text forty times. After Script 12, I just stopped. I went to sleep."',
    name: 'Simone',
    result: 'Ended the spiral same night',
    bg: 'bg-pine-700',
  },
  {
    quote: '"The Decision Framework gave me an answer in one hour that I could not find in eight months."',
    name: 'Dana W.',
    result: 'Made a clear decision in 1 day',
    bg: 'bg-clay-600',
  },
  {
    quote: '"I sent Script 41 shaking. He texted back three days later. I did not reply. That was the win."',
    name: 'Camille',
    result: 'Left with dignity intact',
    bg: 'bg-pine-600',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
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

function QuoteCard({ card }: { card: typeof videoCards[0] }) {
  return (
    <div className={`${card.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[200px]`}>
      <p className="text-white text-base font-semibold leading-relaxed italic mb-4">
        {card.quote}
      </p>
      <div>
        <p className="text-white font-black text-sm">{card.name}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white/70 text-xs font-medium">{card.result}</span>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-black text-clay-600 tracking-[0.2em] uppercase mb-4">
            Real Results
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3 text-balance">
            Women Who Were Exactly Where You Are
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-sm font-black text-foreground">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">from 5,247 readers</span>
          </div>
        </div>

        {/* Quote cards — competitor-inspired proof block */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {videoCards.map((card, i) => (
            <QuoteCard key={i} card={card} />
          ))}
        </div>

        {/* Rotating highlight quote */}
        <div className="bg-muted border border-border rounded-2xl p-6 md:p-10 mb-14 text-center">
          <p className="font-display font-black text-xl md:text-2xl text-foreground italic leading-snug mb-4 text-balance">
            &ldquo;{testimonials[activeQuote].quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-pine-100 flex-shrink-0">
              <Image
                src={testimonials[activeQuote].photo}
                alt={testimonials[activeQuote].name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">{testimonials[activeQuote].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[activeQuote].location}</p>
            </div>
          </div>
          {/* Dot nav */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveQuote(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeQuote ? 'bg-pine-600 w-5' : 'bg-border hover:bg-pine-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Written testimonials grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-3 shadow-sm"
            >
              <Stars count={t.rating} />
              <p className="font-black text-foreground text-sm leading-snug">{t.headline}</p>
              <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-pine-100">
                  <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { number: '5,247', label: 'Women helped' },
            { number: '4.9/5', label: 'Average rating' },
            { number: '47', label: 'Tested scripts' },
            { number: '30-day', label: 'Money-back guarantee' },
          ].map(({ number, label }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-black text-pine-600 mb-0.5">{number}</p>
              <p className="text-xs text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center">
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pine-600 text-white font-black text-base hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Yes — I want the scripts now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="text-xs text-muted-foreground mt-3">$27 &bull; 30-day guarantee &bull; Instant PDF</p>
        </div>

      </div>
    </section>
  );
}
