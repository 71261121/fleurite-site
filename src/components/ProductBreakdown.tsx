'use client';

import Image from 'next/image';
import ButtonGlow from './ButtonGlow';

export default function ProductBreakdown() {
  return (
    <section className="py-20 bg-white scroll-mt-20" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What's Inside the{' '}
            <span className="text-rose-600">SecureLoop System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One complete system with two parts that work together
          </p>
        </div>

        {/* Book Mockups - Side by Side */}
        <div className="flex justify-center gap-6 mb-12">
          <div className="relative w-40 md:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/book-cover-1.png"
              alt="Part 1: Scripts & Boundaries"
              fill
              sizes="192px"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rose-700 text-white text-center py-2 text-sm font-semibold">
              Part 1: Scripts
            </div>
          </div>
          <div className="relative w-40 md:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/book-cover-2.png"
              alt="Part 2: 7-Day Reset"
              fill
              sizes="192px"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gold-500 text-white text-center py-2 text-sm font-semibold">
              Part 2: The Reset
            </div>
          </div>
        </div>

        {/* Two Parts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Part 1 */}
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 border border-rose-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rose-700 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Part 1: The Scripts</h3>
                <p className="text-rose-600 text-sm font-medium">External Communication</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">→</span>
                <span className="text-gray-700">35+ word-for-word scripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">→</span>
                <span className="text-gray-700">The "I Need Space" reply that works</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">→</span>
                <span className="text-gray-700">72-hour action plan for ghosting</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">→</span>
                <span className="text-gray-700">Red Flag Filter</span>
              </li>
            </ul>
          </div>

          {/* Part 2 */}
          <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Part 2: The Reset</h3>
                <p className="text-amber-600 text-sm font-medium">Internal Calm</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">→</span>
                <span className="text-gray-700">7-Day Stress Management Guide</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">→</span>
                <span className="text-gray-700">4-7-8 breathing exercise</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">→</span>
                <span className="text-gray-700">A quick grounding technique for intense moments</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">→</span>
                <span className="text-gray-700">Sleep hygiene protocols</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <ButtonGlow
            href="#get-access"
            className="inline-block bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Get the Complete System - $27
          </ButtonGlow>
        </div>
      </div>
    </section>
  );
}
