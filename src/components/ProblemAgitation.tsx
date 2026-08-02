'use client';

export default function ProblemAgitation() {
  const problems = [
    {
      title: 'The Midnight Spiral',
      description: 'He didn\'t reply. Your body is now in survival mode. Heart racing. Catastrophizing. Replaying every word you said. You can\'t sleep.'
    },
    {
      title: 'The Shrinking Cycle',
      description: 'You ask for less. You need less. You text less. He gets more comfortable with every boundary you remove. You\'ve erased yourself to fit his comfort.'
    },
    {
      title: 'The Chase Response',
      description: 'He pulls away, so you chase. Every chase teaches your nervous system: "I\'m not valuable unless I pursue him." Every chase teaches him: "She\'ll always come back."'
    },
    {
      title: 'The Shame Spiral',
      description: 'You blame yourself. "If I was more secure... more interesting... less needy..." But the problem isn\'t you. It\'s that he trained your nervous system to self-abandon.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - RAW with micro-psychology (Level 100) */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-clay-600 tracking-widest uppercase mb-4">
            You Know This Pattern (And Here's Why)
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            The Four Cycles That Keep You Stuck
          </h2>
          <p className="text-lg font-semibold text-pine-600 mb-3">
            (And exactly how to break each one)
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Every one of these is your nervous system doing exactly what it was trained to do. The problem isn&apos;t you. The problem is the cycle — and cycles can be broken.
          </p>
        </div>

        {/* Problems Grid - MOBILE OPTIMIZED */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 md:p-7 hover:shadow-md transition-all border border-muted hover:border-pine-200"
            >
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* The Truth Section - POWERFUL */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 border border-pine-200">
          <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
            You&apos;ve tried <span className="text-pine-600">being more chill</span>. Tried <span className="text-pine-600">giving space</span>. Tried <span className="text-pine-600">being less needy</span>.
          </p>
          <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
            But you can&apos;t think your way out of a nervous system problem. You need to <span className="text-clay-600">rewire it</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
