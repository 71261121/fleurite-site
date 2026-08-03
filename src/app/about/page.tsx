'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              I&apos;m Eliza
            </h1>
            <p className="text-xl text-muted-foreground">
              Founder of the Feminine Bloom Reset System
            </p>
          </div>

          {/* Story */}
          <section className="mb-16 bg-card rounded-2xl p-8 md:p-12 border border-rose-200">
            <h2 className="text-3xl font-bold text-foreground mb-6">Nine Years of Research + Practice</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nine years ago, I was exhausted. Not the "I need more sleep" kind. The "my body isn't mine anymore" kind. I tried everything—better sleep, harder workouts, supplements, productivity hacks. Nothing worked because I was treating symptoms, not the pattern.
              </p>
              <p>
                That's when I realized: I wasn't broken. I was out of sync. My body operates in phases, and I was pretending it operated in a straight line. Every week I was fighting myself instead of moving with myself.
              </p>
              <p>
                So I spent the next nine years learning. Studying nervous system science, cycle psychology, and how to build a system that actually works. Testing it on myself. Refining it with my community. And now I'm sharing it with you.
              </p>
              <p>
                The Feminine Bloom Reset System isn't theory. It's nine years of proof that when you work WITH your cycle instead of against it, everything becomes possible.
              </p>
            </div>
          </section>

          {/* What I Teach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">What This System Does</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-rose-200">
                <div className="text-3xl font-bold text-rose-600 mb-3">Explain</div>
                <p className="text-muted-foreground">Why your body crashes mid-week, why your mood swings exist, and why "just push through" never works. Psychology, not shame.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-rose-200">
                <div className="text-3xl font-bold text-rose-600 mb-3">Reset</div>
                <p className="text-muted-foreground">Seven days that break the exhaustion pattern and teach your nervous system a new way to exist. Grounded, not frantic.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-rose-200">
                <div className="text-3xl font-bold text-rose-600 mb-3">Align</div>
                <p className="text-muted-foreground">Schedule your life around your actual cycle. No more fighting yourself. Sustainable energy that actually lasts.</p>
              </div>
            </div>
          </section>

          {/* By The Numbers */}
          <section className="mb-16 bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Proven Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">9 Years</div>
                <p className="text-muted-foreground">of research and real-world application</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">5,000+</div>
                <p className="text-muted-foreground">women regained their energy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">9,200</div>
                <p className="text-muted-foreground">viral shares (top 1% content)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">7 Days</div>
                <p className="text-muted-foreground">to reset your nervous system</p>
              </div>
            </div>
          </section>

          {/* My Promise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">My Promise to You</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">This Is Tested, Not Theory</h3>
                <p className="text-muted-foreground">Every practice in this system has been tested by thousands of women. I only include what actually works.</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">You're Not Broken</h3>
                <p className="text-muted-foreground">Your exhaustion isn't a character flaw. It's information. And I'll teach you how to read it.</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Psychology First</h3>
                <p className="text-muted-foreground">No textbook language. No overwhelming biology lessons. Just the psychology you need to understand your own body.</p>
              </div>
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Money-Back Guarantee</h3>
                <p className="text-muted-foreground">Try the 7-day reset. If you don't feel more grounded and energized, I refund your money. No questions.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-rose-50 rounded-2xl p-12 border border-rose-200">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Reclaim Your Energy?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start the reset today. Seven days. Real results. Proven by thousands of women who are done fighting themselves.
            </p>
            <a
              href="/#products"
              className="inline-block bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-colors"
            >
              Get The System — $27
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
