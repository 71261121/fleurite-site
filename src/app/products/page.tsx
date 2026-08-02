'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductComparison from '@/components/ProductComparison';
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
              Our Complete System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two tiers. One goal: Your clarity and boundaries.
            </p>
          </div>
        </section>

        {/* Product Comparison */}
        <ProductComparison />

        {/* Features Detail */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Free Guide Includes:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-pine-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>Nervous System Science</strong> - Why you spiral when he goes silent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pine-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>3-Day Reset Protocol</strong> - Concrete steps to calm your body</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pine-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>Emergency Scripts</strong> - What to text when anxiety peaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pine-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>Validation Framework</strong> - You're not broken, you were trained</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Complete System Includes:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>47 Named Scripts</strong> - For every scenario (he pulls away, ghosting, needs space, etc)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>The Binary Question</strong> - Three questions that reveal his true intentions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>Decision Framework</strong> - How to know if this is worth rebuilding or if you should leave</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay-600 font-bold">→</span>
                  <span className="text-muted-foreground"><strong>Advanced Nervous System Work</strong> - Deep transformation, not just band-aids</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
