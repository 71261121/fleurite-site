'use client';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-pine-700 scroll-mt-20" id="get-access">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Headline — closes the resentment loop, opens empowerment */}
        <p className="text-xs font-black text-clay-300 uppercase tracking-[0.2em] mb-5">
          You&apos;ve been waiting for someone to explain this
        </p>
        <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-5 leading-tight text-balance">
          You&apos;ve been playing by rules<br />
          he never told you existed.<br />
          <span className="text-clay-300">Now you know them.</span>
        </h2>

        <p className="text-pine-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          The next time he goes quiet, you will not spiral. You will not send the wrong thing.
          You will know exactly what&apos;s happening — and exactly what to do.
          That version of yourself is $27 away.
        </p>

        {/* Price block — 2 column what you get / what changes */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 md:p-10 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <p className="text-xs font-black text-clay-300 uppercase tracking-[0.15em] mb-3">What You Get</p>
              <ul className="space-y-2.5">
                {[
                  'The 5 Unwritten Rules — decoded',
                  '47 word-for-word scripts (silence, space, ghosting, walk-away)',
                  'The 3-Question Stay-or-Leave Framework',
                  'The 90-Second Calm Protocol',
                  'Lifetime access. Instant PDF.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-clay-300 font-black mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black text-clay-300 uppercase tracking-[0.15em] mb-3">What Changes</p>
              <ul className="space-y-2.5">
                {[
                  'You stop absorbing blame that isn\'t yours',
                  'You respond instead of react',
                  'You know what to say — or whether to say anything',
                  'You make the stay-or-go decision from clarity',
                  'Your dignity stays intact either way',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-clay-300 font-black mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-5xl font-black text-white">$27</span>
              <span className="text-xl text-white/50 line-through">$47</span>
            </div>
            <p className="text-pine-200 text-sm mt-1">One payment. Lifetime access. No subscription.</p>
          </div>

          {/* CTA button */}
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="w-full py-4 rounded-xl bg-clay-500 hover:bg-clay-400 active:scale-[0.98] text-white font-black text-lg transition-all cursor-pointer shadow-xl"
          >
            Get The Avoidant&apos;s Unwritten Rules — $27
          </button>
          <p className="text-white/50 text-xs mt-3">
            30-day money-back guarantee &bull; Instant PDF &bull; Discreet billing
          </p>
        </div>

        {/* Final objection kill */}
        <p className="text-pine-300 text-sm">
          If it does not help, email us within 30 days and we refund you the same day.
          No questions. No hoops. You should never feel trapped by a $27 purchase.
        </p>

      </div>
    </section>
  );
}