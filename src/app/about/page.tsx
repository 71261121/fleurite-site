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
              About Fleurite
            </h1>
            <p className="text-xl text-muted-foreground">
              Psychology + Clarity + Real Solutions
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16 bg-card rounded-2xl p-8 md:p-12 border border-muted">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe that anxiety in relationships isn't a character flaw—it's a nervous system response to inconsistent behavior. When someone pulls away, you're not "too much." You're responding exactly as any nervous system would.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fleurite exists to give you the scripts, frameworks, and clarity to know whether to rebuild with boundaries or leave with dignity. No more spiraling. No more self-blame. Just real solutions based on actual psychology.
            </p>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-muted">
                <div className="text-3xl font-bold text-pine-600 mb-3">Teach</div>
                <p className="text-muted-foreground">Attachment theory, nervous system science, and change psychology—explained so you understand why you react the way you do.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-muted">
                <div className="text-3xl font-bold text-pine-600 mb-3">Provide</div>
                <p className="text-muted-foreground">47 tested scripts for every relationship scenario, so you always know what to say when anxiety takes over.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-muted">
                <div className="text-3xl font-bold text-pine-600 mb-3">Clarify</div>
                <p className="text-muted-foreground">The Binary Question framework helps you decide: should you rebuild this with boundaries, or should you leave and heal?</p>
              </div>
            </div>
          </section>

          {/* The Numbers */}
          <section className="mb-16 bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-pine-600 mb-2">9 Years</div>
                <p className="text-muted-foreground">of research and real-world application</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pine-600 mb-2">7,700+</div>
                <p className="text-muted-foreground">women have used this system</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pine-600 mb-2">943</div>
                <p className="text-muted-foreground">organic shares (word-of-mouth)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pine-600 mb-2">47</div>
                <p className="text-muted-foreground">tested scripts for real situations</p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-pine-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Validation First</h3>
                <p className="text-muted-foreground">Your feelings aren't the problem. Inconsistent behavior is.</p>
              </div>
              <div className="border-l-4 border-pine-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Science-Based</h3>
                <p className="text-muted-foreground">Everything is grounded in attachment theory, nervous system science, and change psychology.</p>
              </div>
              <div className="border-l-4 border-pine-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Real Solutions</h3>
                <p className="text-muted-foreground">Not positive affirmations that ignore reality. Scripts that work. Frameworks that clarify.</p>
              </div>
              <div className="border-l-4 border-pine-600 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Your Choice</h3>
                <p className="text-muted-foreground">Whether you rebuild or leave, we support your decision with tools and clarity.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-card rounded-2xl p-12 border border-muted">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready for Clarity?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The complete system has 47 scripts and the clarity framework to guide every decision — whether you stay or walk away with your dignity intact.
            </p>
            <a
              href="/#products"
              className="inline-block bg-pine-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pine-700 transition-colors"
            >
              Get the Complete System — $27
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
