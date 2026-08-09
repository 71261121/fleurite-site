'use client';

const features = [
  { name: '5 Unwritten Rules Decoded', description: 'Why he pulls away, why explanations backfire, why his silence costs you, and why the blame falls on you' },
  { name: '47 Copy-Paste Scripts (Named & Specific)', description: 'Script 4 (space acceptance), Script 7 (clarity demand), Script 23 (re-entry), Script 41 (walk-away with dignity)' },
  { name: 'The 3-Question Decision Framework', description: 'Three behavioral questions that cut through anxiety and produce a clear answer: stay, stand, or go' },
  { name: 'The 90-Second Calm Protocol', description: 'Stop the panic spiral before you reach for your phone — works in under two minutes' },
  { name: 'The Reality Anchor', description: 'Separate what you know from what you fear — when the story takes over at 2AM' },
  { name: 'The Sleep Protocol', description: 'Three rules for nights when his silence feels like abandonment' },
  { name: 'Days 1-7 Emergency Plan', description: 'One action per day to stabilize your nervous system and regain clarity' },
  { name: '30-Day Money-Back Guarantee', description: 'Not helpful? Full refund. No judgment, no questions asked.' },
  { name: 'Lifetime PDF Access', description: 'Download immediately. Yours forever. Read on any device, save offline.' },
];

export default function ProductComparison() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-clay-600 tracking-widest uppercase mb-4">
            Everything Inside
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            The Complete System — $27
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Scripts, clarity framework, nervous system reset — everything in one place.
          </p>
        </div>

        {/* Feature list */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 px-6 py-4 ${index !== features.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="mt-1 w-5 h-5 rounded-full bg-pine-100 flex-shrink-0 flex items-center justify-center">
                <svg className="h-3 w-3 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-foreground">{feature.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single CTA card */}
        <div className="bg-card rounded-2xl p-8 border-2 border-pine-600 relative text-center">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay-600 text-white px-4 py-1 rounded-full text-xs font-bold">
            One-time payment
          </div>
          <p className="text-4xl font-black text-foreground mt-2">
            $27
            <span className="text-base font-normal text-muted-foreground ml-2 line-through">$47</span>
          </p>
          <p className="text-muted-foreground mt-2 mb-6">Complete System · 47 Scripts · Lifetime Access</p>
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="w-full max-w-sm py-4 rounded-xl bg-pine-600 text-white font-bold text-base hover:bg-pine-700 transition cursor-pointer shadow-lg"
          >
            Get Instant Access — $27
          </button>
          <p className="text-xs text-muted-foreground mt-3">30-day money-back guarantee · Discreet billing · Instant PDF</p>
        </div>

        {/* Trust row */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm font-semibold text-pine-600 mb-1">Instant Download</p>
            <p className="text-xs text-muted-foreground">PDF delivered immediately after purchase</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-pine-600 mb-1">Screenshots OK</p>
            <p className="text-xs text-muted-foreground">Save scripts to your phone notes for quick access</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-pine-600 mb-1">Money-Back Guarantee</p>
            <p className="text-xs text-muted-foreground">30 days. Full refund if it does not help.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
