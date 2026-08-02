'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* LEFT: Text Content */}
          <div className="w-full md:w-1/2">
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
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The 2-part system that gives you exact words to say when they pull
              away — and calms your body so you can use them without panicking.
            </p>
          </div>

          {/* RIGHT: Book Covers (larger, prominent) */}
          <div className="flex items-center justify-center gap-4 md:gap-8 w-full md:w-1/2">
            <div className="relative w-40 md:w-52 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/book-cover-1.png"
                alt="Part 1: Scripts & Boundaries"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
            <div className="relative w-40 md:w-52 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl -ml-6 md:-ml-10">
              <Image
                src="/book-cover-2.png"
                alt="Part 2: The Calm System"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
