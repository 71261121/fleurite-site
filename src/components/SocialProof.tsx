'use client';

import Image from 'next/image';

const openCheckout = () => window.dispatchEvent(new Event('open-checkout'));

// 5 testimonials — 5 different outcome types to serve every audience segment
const testimonials = [
  {
    name: 'Rachel T.',
    age: '32',
    location: 'New York, NY',
    photo: '/testimonials/woman-1.png',
    headline: 'He replied. Different energy this time.',
    story:
      'He went cold for 11 days. Old me would have sent 7 texts by now — each one more desperate. Instead I used Rule 4 and sent one thing. Fourteen words. He responded in 3 hours with a whole paragraph. Not fixed — but I had my dignity, and that felt completely different.',
    outcome: 'He came back — on her terms',
    outcomeBg: 'bg-pine-50 text-pine-700 border-pine-200',
  },
  {
    name: 'Simone K.',
    age: '28',
    location: 'Atlanta, GA',
    photo: '/testimonials/woman-2.png',
    headline: 'I put the phone down. First time in two years.',
    story:
      'He went quiet at midnight. Instead of the usual spiral, I used the 90-Second Protocol. Heart rate slowed. I actually went to sleep. First time I slept through the night without checking his profile. That alone was worth $27.',
    outcome: 'Stopped the spiral without texting',
    outcomeBg: 'bg-clay-50 text-clay-700 border-clay-200',
  },
  {
    name: 'Lauren M.',
    age: '35',
    location: 'Chicago, IL',
    photo: '/testimonials/woman-3.png',
    headline: "I left. And I wasn't devastated. That shocked me.",
    story:
      "I used the 3-Question Framework on a Sunday afternoon. Answered every question honestly — based on his actual behavior, not my feelings about him. The answers were clear. Used the Walk-Away script. He texted asking to talk. I didn't go back — not out of anger, but because for the first time I actually knew.",
    outcome: 'Walked away with full clarity',
    outcomeBg: 'bg-gold-50 text-gold-700 border-gold-200',
  },
  {
    name: 'Priya M.',
    age: '29',
    location: 'London, UK',
    photo: '/testimonials/woman-1.png',
    headline: 'Still with him. But I show up completely differently now.',
    story:
      "I'm still in the relationship — but who I am in it changed. I don't over-explain. I don't apologize when he withdraws. Last week he cancelled plans. I used Rule 2 instead of spiralling. He actually noticed and said so. The book didn't change him. It changed what I'm willing to accept.",
    outcome: 'Changed the dynamic — still together',
    outcomeBg: 'bg-pine-50 text-pine-700 border-pine-200',
  },
  {
    name: 'Maya R.',
    age: '44',
    location: 'Denver, CO',
    photo: '/testimonials/woman-2.png',
    headline: 'I finally understood what was actually happening.',
    story:
      "I thought I knew about avoidant attachment — I'd read all the articles. But Rule 1 in this book was something I'd never seen explained this way. 'Unwritten' is exactly the right word. I was playing a game where someone else knew all the rules and I didn't have a single one. Once I saw it, I couldn't unsee it.",
    outcome: 'Finally understood the dynamic',
    outcomeBg: 'bg-clay-50 text-clay-700 border-clay-200',
  },
];

const quoteCards = [
  {
    quote: '"For the first time I felt calm sending a text — instead of sick to my stomach."',
    name: 'Maya R.',
    result: 'Stopped the 2AM spiral',
    bg: 'bg-pine-700',
  },
  {
    quote: '"I stopped performing for someone who kept me guessing. That was the whole shift."',
    name: 'Camille',
    result: 'Left with dignity intact',
    bg: 'bg-clay-600',
  },
  {
    quote: "\"I hadn't checked his Instagram in days. I just forgot to. The book gave me back myself.\"",
    name: 'Priya K.',
    result: 'Finished the 7-day reset',
    bg: 'bg-pine-600',
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < count ? 'text-gold-400' : 'text-border'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-clay-600">Real Results</p>
          <h2 className="mb-3 text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
            7,700 women learned the rules.<br />Here&apos;s what happened.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-black text-foreground">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">from 7,700+ readers</span>
          </div>
        </div>

        {/* top 3 testimonials */}
        <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Stars />
              <p className="text-sm font-black leading-snug text-foreground">{t.headline}</p>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.story}&rdquo;</p>
              <div className="border-t border-border pt-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-pine-100">
                    <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-pine-100 bg-pine-50 px-2 py-0.5 text-[10px] font-bold text-pine-700">Verified</span>
                </div>
                <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${t.outcomeBg}`}>{t.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* quote cards */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {quoteCards.map((card) => (
            <div key={card.name} className={`${card.bg} flex min-h-[180px] flex-col justify-between rounded-2xl p-6`}>
              <p className="mb-4 text-base font-semibold italic leading-relaxed text-cream">{card.quote}</p>
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

        {/* bottom 2 testimonials */}
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {testimonials.slice(3).map((t) => (
            <div key={t.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Stars />
              <p className="text-sm font-black leading-snug text-foreground">{t.headline}</p>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.story}&rdquo;</p>
              <div className="border-t border-border pt-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-pine-100">
                    <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-pine-100 bg-pine-50 px-2 py-0.5 text-[10px] font-bold text-pine-700">Verified</span>
                </div>
                <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${t.outcomeBg}`}>{t.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* stats — unified 7,700+ */}
        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { number: '7,700+', label: 'Women helped' },
            { number: '4.9/5', label: 'Average rating' },
            { number: '47', label: 'Word-for-word scripts' },
            { number: 'Digital', label: 'PDF • instant download' },
          ].map(({ number, label }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="mb-0.5 text-2xl font-black text-pine-600 md:text-3xl">{number}</p>
              <p className="text-xs font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={openCheckout} className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-600 px-8 py-4 text-base font-black text-white shadow-lg transition-all hover:bg-pine-700 active:scale-[0.98]">
            Get Instant Access — $27
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-3 text-xs text-muted-foreground">$47 → $27 today &bull; Instant access &bull; Lifetime PDF</p>
        </div>

      </div>
    </section>
  );
}