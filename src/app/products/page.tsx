'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Page Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              The Feminine Bloom Reset System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to reclaim your energy in 7 days. One clear offer. No complicated tiers.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">What's Inside ($27)</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">7-Day Reset Protocol</p>
                    <p className="text-sm text-muted-foreground mt-1">Daily practices designed to break the exhaustion pattern and rewire your nervous system back to alignment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Cycle Alignment Guide</p>
                    <p className="text-sm text-muted-foreground mt-1">Understand your four phases and how to schedule your work and rest to match them, not fight them.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Energy Tracker</p>
                    <p className="text-sm text-muted-foreground mt-1">Monitor your energy and patterns so you can see exactly what's working and what's not.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Nervous System Science (Simplified)</p>
                    <p className="text-sm text-muted-foreground mt-1">Why your body does what it does, explained without the textbook. Psychology, not biology.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Founder's Personal Notes</p>
                    <p className="text-sm text-muted-foreground mt-1">9 years of research, testing, and real-life application. Eliza's insights throughout the system.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-rose-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Lifetime Access</p>
                    <p className="text-sm text-muted-foreground mt-1">Download it once, it's yours forever. No subscription. No recurring fees. Pure ownership.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-200">
              <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-4">The Format</p>
              <p className="text-muted-foreground mb-6">
                High-quality PDF delivered instantly. Works on phone, tablet, or desktop. Designed for easy reference when you need it.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-foreground text-sm">PDF Guide</p>
                  <p className="text-xs text-muted-foreground mt-1">Full 7-day system + cycle information</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-foreground text-sm">Daily Checklist</p>
                  <p className="text-xs text-muted-foreground mt-1">Print or digital, track your progress</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-foreground text-sm">Energy Tracker</p>
                  <p className="text-xs text-muted-foreground mt-1">Monitor patterns over 4+ weeks</p>
                </div>
              </div>

              <button
                onClick={() => window.dispatchEvent(new Event("open-checkout"))}
                className="w-full py-4 px-6 rounded-xl bg-rose-600 text-white font-bold text-lg hover:bg-rose-700 transition shadow-lg hover:shadow-xl"
              >
                Get The System — $27
              </button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                ✓ Instant download • ✓ Money-back guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why This Works Where Other Systems Fail</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Most programs treat symptoms. This system addresses the root cause: misalignment between your cycle and your schedule.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm font-semibold text-rose-600 uppercase mb-3">{'Psychology > Willpower'}</p>
              <p className="text-muted-foreground">Understanding why your body crashes is more powerful than forcing yourself to push through.</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm font-semibold text-rose-600 uppercase mb-3">{'Alignment > Discipline'}</p>
              <p className="text-muted-foreground">When you work WITH your cycle instead of against it, energy flows naturally. No more fighting yourself.</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm font-semibold text-rose-600 uppercase mb-3">Founder-Tested</p>
              <p className="text-muted-foreground">Built by Eliza over 9 years, tested on thousands of women. This isn&apos;t theory. It&apos;s proven practice.</p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
