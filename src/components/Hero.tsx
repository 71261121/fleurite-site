'use client';

import Image from 'next/image';
import ButtonGlow from './ButtonGlow';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-6">
            Based on Attachment Psychology
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Did They Go Cold?{' '}
            <span className="text-rose-700">Stop the Panic-Chase Cycle.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            The 2-part system that gives you exact words to say when they pull
            away — and calms your body so you can use them without panicking.
          </p>

          {/* Benefits List */}
          <div className="max-w-xl mx-auto mb-8 space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-rose-500 mt-1">→</span>
              <span className="text-gray-700">Part 1: Scripts & boundaries for when they pull away</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-rose-500 mt-1">→</span>
              <span className="text-gray-700">Part 2: 7-day guide to calmer habits</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="text-5xl font-bold text-rose-700">$27</span>
              <span className="ml-2 text-gray-500 text-lg">one-time</span>
            </div>

            <ButtonGlow
              onClick={() => window.dispatchEvent(new Event("open-checkout"))}
              className="inline-block bg-rose-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-rose-800 transition-colors shadow-lg"
            >
              Get the System — $27
            </ButtonGlow>

            {/* Micro Testimonial - believable, grounded */}
            <div className="mt-6 max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 p-4 text-left shadow-sm">
              <p className="text-sm italic text-gray-700 leading-relaxed">
                "I used to lie awake at night spiraling. Having actual words prepared gave me something concrete to do instead of just worrying."
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                <span className="text-yellow-400" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span>— Emily R., 29, Texas</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div>30-Day Guarantee</div>
              <div>Secure Checkout</div>
            </div>

            {/* Social proof */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2">
              <span className="flex -space-x-1">
                {['S', 'M', 'P', 'N', 'A'].map((letter, i) => (
                  <span key={i} className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white ring-2 ring-white">
                    {letter}
                  </span>
                ))}
              </span>
              <span className="text-xs text-gray-600">
                <span className="font-semibold text-gray-900">Women worldwide</span> are using this system
              </span>
            </div>
          </div>

          {/* Book Mockups - PROMINENT AT BOTTOM OF HERO */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="relative w-32 md:w-40 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/book-cover-1.png"
                alt="Part 1: Scripts & Boundaries"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div className="relative w-32 md:w-40 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/book-cover-2.png"
                alt="Part 2: 7-Day Reset"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
