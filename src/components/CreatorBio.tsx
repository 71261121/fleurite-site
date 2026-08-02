'use client';

export default function CreatorBio() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why I Created This
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Author Card */}
          <div className="flex items-center gap-4 mb-8 bg-muted rounded-2xl p-6 border border-muted">
            <div className="w-16 h-16 bg-gradient-to-br from-clay-400 to-clay-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <p className="font-bold text-foreground">The Fleurite Team</p>
              <p className="text-sm text-muted-foreground">Created by people who&apos;ve been there</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Three years ago, I was the person refreshing my phone at 2 AM, wondering
              what I did wrong. I was in a relationship where one day felt perfect and
              the next felt like he disappeared.
            </p>
            <p>
              I tried everything. I tried being &ldquo;chill.&rdquo; I tried giving space. I tried
              playing it cool. Nothing worked because I was treating symptoms, not the
              root cause.
            </p>
            <p>
              Then I discovered attachment theory. I learned that his withdrawal wasn&apos;t
              about my worth — it was about his nervous system. And my anxiety wasn&apos;t a
              character flaw — it was something I could begin working on.
            </p>
            <p>
              The problem? All the advice was either too clinical or too vague. &ldquo;Communicate
              better&rdquo; isn&apos;t a strategy. &ldquo;Just leave&rdquo; isn&apos;t helpful when you love someone.
            </p>
            <p>
              So I created the tools I wished I had: <span className="font-semibold text-pine-600">exact words for exact moments</span>.
              Not manipulation tactics. Not pickup lines. Just clear, calm ways to express
              what you need without panic or people-pleasing.
            </p>
            <p className="font-medium text-foreground">
              The Fleurite System isn&apos;t magic. It&apos;s practice. And it works.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-muted rounded-xl p-4 border border-muted">
            <p className="text-sm text-muted-foreground italic">
              <strong>A note:</strong> These tools are educational, not therapy.
              They&apos;re designed to complement your journey, not replace professional help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
