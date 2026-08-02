'use client';

export default function ProductComparison() {
  const features = [
    { name: 'What He\'s Doing (And Why)', free: true, paid: true },
    { name: 'Why You Chase (Root Cause)', free: true, paid: true },
    { name: '3-Day Nervous System Reset', free: true, paid: true },
    { name: 'Video Guides & Audio', free: false, paid: true },
    { name: '47 Copy-Paste Scripts', free: false, paid: true },
    { name: 'Script #1-47 (Specific Scenarios)', free: false, paid: true },
    { name: 'The Binary Question (Stay or Go?)', free: false, paid: true },
    { name: 'Leaving With Dignity Guide', free: false, paid: true },
    { name: '7-Day Deep Reset Protocol', free: false, paid: true },
    { name: 'Lifetime Email Backup', free: true, paid: true },
    { name: 'Phone Screenshots Allowed', free: true, paid: true },
    { name: '30-Day Money-Back Guarantee', free: false, paid: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-clay-600 tracking-widest uppercase mb-4">
            What's Inside
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Free vs Complete System
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Start free. Understand the why. Then get the scripts if you want to rebuild with boundaries.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b-2 border-pine-200">
                <th className="text-left p-4 md:p-6 font-bold text-foreground">Feature</th>
                <th className="text-center p-4 md:p-6 font-bold text-foreground">Free Guide</th>
                <th className="text-center p-4 md:p-6 font-bold text-foreground bg-pine-50">Paid Book ($27)</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <td className="p-4 md:p-6 text-foreground font-medium">{feature.name}</td>
                  <td className="p-4 md:p-6 text-center">
                    {feature.free ? (
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="p-4 md:p-6 text-center bg-pine-50">
                    {feature.paid ? (
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-pine-200">
                        <svg className="h-4 w-4 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing and CTA */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Free */}
          <div className="bg-card rounded-2xl p-8 border border-muted">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">Free Guide</h3>
              <p className="text-3xl font-black text-pine-600 mt-2">$0</p>
            </div>
            <p className="text-muted-foreground text-center mb-6">Everything you need to understand WHY you chase.</p>
            <button
              onClick={() => window.location.href = '/api/downloads/free-guide'}
              className="w-full py-3 rounded-lg bg-muted text-foreground font-bold hover:bg-muted-dark transition"
            >
              Download Free (No Email)
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">Instant PDF delivery</p>
          </div>

          {/* Paid */}
          <div className="bg-card rounded-2xl p-8 border-2 border-pine-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-clay-600 text-white px-4 py-1 rounded-full text-xs font-bold">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">Complete System</h3>
              <p className="text-3xl font-black text-pine-600 mt-2">$27</p>
              <p className="text-xs text-muted-foreground mt-2">One-time payment</p>
            </div>
            <p className="text-muted-foreground text-center mb-6">Everything PLUS 47 scripts + clarity on whether to stay or go.</p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-checkout'))}
              className="w-full py-3 rounded-lg bg-pine-600 text-white font-bold hover:bg-pine-700 transition"
            >
              Get Instant Access
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">30-day money-back guarantee</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-foreground mb-6">What's Included</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-semibold text-pine-600 mb-2">PDF + Email</p>
              <p className="text-xs text-muted-foreground">Instant download + email backup for lifetime access</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-pine-600 mb-2">Screenshots OK</p>
              <p className="text-xs text-muted-foreground">Share with trusted friends, save offline, read anywhere</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-pine-600 mb-2">Money-Back Guarantee</p>
              <p className="text-xs text-muted-foreground">30 days. If it doesn't help, full refund. No questions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
