'use client';

import ButtonGlow from './ButtonGlow';

export default function ValueSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What You're{' '}
            <span className="text-rose-600">Getting Today</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything inside the SecureLoop System
          </p>
        </div>

        {/* Value Stack */}
        <div className="bg-rose-50 rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center py-4 border-b border-rose-100">
              <span className="text-rose-500 mr-3 text-xl">→</span>
              <div>
                <p className="font-semibold text-gray-900">Part 1: 35+ Scripts & Action Plans</p>
                <p className="text-sm text-gray-500">Word-for-word replies for every situation</p>
              </div>
            </div>

            <div className="flex items-center py-4 border-b border-rose-100">
              <span className="text-amber-500 mr-3 text-xl">→</span>
              <div>
                <p className="font-semibold text-gray-900">Part 2: 7-Day Stress Management Guide</p>
                <p className="text-sm text-gray-500">Grounding techniques and calming exercises</p>
              </div>
            </div>

            <div className="flex items-center py-4 border-b border-rose-100">
              <span className="text-yellow-500 mr-3 text-xl">→</span>
              <div>
                <p className="font-semibold text-gray-900">Bonus: Emergency Protocol Guide</p>
                <p className="text-sm text-gray-500">For those 2 AM moments when you need something concrete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Price */}
        <div className="text-center bg-rose-700 rounded-2xl p-8 text-white">
          <p className="text-lg mb-2 opacity-90">Your investment</p>
          <div className="text-6xl font-bold mb-4">$27</div>
          <p className="text-lg opacity-90 mb-6">
            One-time payment. Lifetime access. No subscriptions.
          </p>
          <ButtonGlow
            href="#get-access"
            className="inline-block bg-white text-rose-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Instant Access
          </ButtonGlow>
          <p className="text-sm opacity-75 mt-4">
            Secure checkout • Instant download
          </p>
        </div>
      </div>
    </section>
  );
}
