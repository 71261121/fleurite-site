'use client';

export default function CreatorBio() {
  return (
    <section className="py-20 bg-card scroll-mt-20" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why I Built This
          </h2>
          <p className="text-lg text-muted-foreground">My 9-year journey from exhausted to aligned</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Founder Introduction */}
          <div className="flex items-center gap-4 mb-8 bg-muted rounded-2xl p-6 border border-rose-200">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">Eliza</p>
              <p className="text-sm text-muted-foreground">Founder, 9 years research into feminine energy cycles</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Nine years ago, I was exhausted all the time. Like, bone-deep tired. I thought I was broken. Lazy. Maybe depressed.
            </p>
            <p>
              I tried everything. More sleep didn&apos;t fix it. More exercise made it worse. Supplements, meditation, productivity hacks—nothing stuck because I was treating symptoms, not the pattern.
            </p>
            <p>
              Then I realized: <span className="font-semibold text-rose-600">my body wasn&apos;t broken—it was out of sync</span>. I wasn&apos;t living WITH my cycle. I was living AGAINST it. Every week felt like I was fighting myself.
            </p>
            <p>
              So I spent the next nine years learning. Psychology. Neuroscience. Talking to thousands of women. Testing what actually works (not what sounds good in theory).
            </p>
            <p>
              What I discovered changed everything: a seven-day reset that actually works. Not because it&apos;s magic. Because it finally aligns you with how your body actually operates.
            </p>
            <p className="font-medium text-foreground">
              The Feminine Bloom Reset isn&apos;t another productivity system. It&apos;s permission to stop fighting yourself.
            </p>
          </div>

          {/* Why This Matters */}
          <div className="mt-10 bg-rose-50 rounded-2xl p-6 border border-rose-200">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-3">My Promise to You</p>
            <p className="text-muted-foreground leading-relaxed">
              This system is built by someone who&apos;s lived this. Not by a team in a boardroom. Every word, every practice—I&apos;ve tested on myself and my community. If it doesn&apos;t work for you, I give your money back. No questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
