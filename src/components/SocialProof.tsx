'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Rachel T.',
    location: 'New York, NY',
    photo: '/images/testimonial-1.png',
    rating: 5,
    headline: 'First time in 2 years I felt calm.',
    quote:
      'He went quiet again. Old me would have sent five texts by now. Instead I opened the book, used Script 7, and just... waited. He replied. Calmly. I cried.',
  },
  {
    name: 'Maya R.',
    location: 'Los Angeles, CA',
    photo: '/images/testimonial-2.png',
    rating: 5,
    headline: 'I stopped the 2AM spiral.',
    quote:
      'I was literally typing at 2AM. Saw the book on my phone. Read Script 12. Put my phone down and went to sleep. First time in months. That alone was worth $27.',
  },
  {
    name: 'Lauren M.',
    location: 'Chicago, IL',
    photo: '/images/testimonial-3.png',
    rating: 5,
    headline: 'I walked away with my dignity.',
    quote:
      'I used Script 41 and left. No begging. No "let\'s talk about this." He texted three days later saying he was wrong. I didn\'t go back. First time I chose myself.',
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

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-pine-50 border border-pine-200 text-pine-700 text-sm font-bold px-4 py-2 rounded-full mb-5">
            <Stars count={5} />
            <span>4.9 / 5 average rating</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3 text-balance">
            Women Who Stopped Chasing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results from women who were exactly where you are right now.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <Stars count={t.rating} />
              <p className="font-black text-foreground text-base leading-snug">
                {t.headline}
              </p>
              <p className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-pine-100">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { number: '5,000+', label: 'Women helped' },
            { number: '4.9/5', label: 'Average rating' },
            { number: '47', label: 'Tested scripts' },
            { number: '$27', label: 'One-time, no subscription' },
          ].map(({ number, label }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-3xl md:text-4xl font-black text-pine-600 mb-1">{number}</p>
              <p className="text-sm text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center">
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pine-600 text-white font-black text-base hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Get Instant Access — $27
          </button>
          <p className="text-xs text-muted-foreground mt-3">30-day guarantee &bull; Instant PDF</p>
        </div>

      </div>
    </section>
  );
}
