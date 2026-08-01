'use client';

import ButtonGlow from './ButtonGlow';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white scroll-mt-20" id="get-access">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Ready to Stop the Cycle?
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          You deserve clarity about your relationships.
          It's time to feel more grounded in how you respond.
        </p>

        {/* What You Get - Simple */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            The Complete SecureLoop System
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">35+ word-for-word scripts</span>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">72-hour action plans</span>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">Red Flag Filter</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">7-Day Stress Management Guide</span>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">4-7-8 breathing exercise</span>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 mr-3">→</span>
                <span className="text-gray-700">Emergency Protocol Guide</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-5xl font-bold text-rose-700 mb-2">$27</div>
            <p className="text-gray-500">One-time payment • Lifetime access</p>
          </div>

          {/* CTA Button */}
          <ButtonGlow
            href="#get-access"
            className="inline-block bg-rose-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-rose-800 transition-all shadow-xl hover:shadow-2xl mb-6"
          >
            Get Instant Access Now
          </ButtonGlow>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="mr-2">→</span>
              256-bit SSL encryption
            </div>
            <div className="flex items-center">
              <span className="mr-2">→</span>
              Instant PDF download
            </div>
            <div className="flex items-center">
              <span className="mr-2">→</span>
              Works on all devices
            </div>
          </div>
        </div>

        {/* Final message */}
        <p className="text-gray-600 max-w-2xl mx-auto">
          The next time he pulls away, you'll know exactly what to say.
          And more importantly, you'll know how to stay calm while saying it.
        </p>
      </div>
    </section>
  );
}
