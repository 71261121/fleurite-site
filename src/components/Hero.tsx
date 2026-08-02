'use client';

import Image from 'next/image';
import ButtonGlow from './ButtonGlow';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* LEFT: Book Covers (prominent on desktop) */}
          <div className="flex items-center justify-center gap-4 md:gap-6 w-full md:w-2/5">
            <div className="relative w-32 md:w-44 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/book-cover-1.png"
                alt="Part 1: Scripts & Boundaries"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="relative w-32 md:w-44 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl -ml-4 md:-ml-8">
              <Image
                src="/book-cover-2.png"
                alt="Part 2: The Calm System"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full md:w-3/5">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-6">
              Based on Attachment Psychology
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Did They Go Cold?{' '}
              <span className="text-rose-700">Stop the Panic-Chase Cycle.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              The 2-part system that gives you exact words to say when they pull
              away — and calms your body so you can use them without panicking.
            </p>

            {/* Benefits List */}
            <div className="mb-6 space-y-3">
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
            <div className="mb-6">
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

              {/* Trust badges */}
              <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                <div>30-Day Guarantee</div>
                <div>Secure Checkout</div>
              </div>
            </div>

            {/* Micro Testimonial */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 text-left shadow-sm max-w-lg">
              <p className="text-sm italic text-gray-700 leading-relaxed">
                &ldquo;I used to lie awake at night spiraling. Having actual words prepared gave me something concrete to do instead of just worrying.&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                <span className="text-yellow-400" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span>— Emily R., 29, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
