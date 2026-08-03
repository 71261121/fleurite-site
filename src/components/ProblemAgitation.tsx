'use client';

export default function ProblemAgitation() {
  const problems = [
    {
      title: '3 PM Energy Crash',
      description: 'Mid-afternoon hits and you hit a wall. Brain fog. Exhaustion. Nothing left for the people you love or the work you care about. You feel broken.'
    },
    {
      title: 'Hormonal Mood Swings',
      description: 'One week you&apos;re thriving. Next week, everything hurts—your relationships, your productivity, your self-worth. You can&apos;t predict yourself anymore.'
    },
    {
      title: 'The Exhaustion Guilt Loop',
      description: 'You know you "should" have more energy. More discipline. More drive. So you blame yourself for being tired. But the problem isn&apos;t laziness—it&apos;s your cycle.'
    },
    {
      title: 'Disconnected from Your Body',
      description: 'You&apos;ve ignored your body so long that you don&apos;t even feel it anymore. No idea what it needs. No idea how to listen. You&apos;re operating on fumes.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-black tracking-widest uppercase mb-4">
            You Know This Already
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            The Real Energy Drains
          </h2>
          <p className="text-lg font-semibold text-black mb-3">
            (And why willpower won&apos;t fix them)
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            These aren&apos;t personal failings. They&apos;re patterns your body creates based on how you live. And patterns can be reset.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 md:p-7 hover:shadow-md transition-all border border-muted hover:border-black"
            >
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* The Truth Section */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 border border-gray-300">
          <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
            You&apos;ve tried <span className="text-black">more sleep</span>. Tried <span className="text-black">more workouts</span>. Tried <span className="text-black">better diets</span>.
          </p>
          <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
            But your body isn&apos;t broken—it&apos;s just <span className="text-black">out of sync</span>. You need a reset, not another hack.
          </p>
        </div>
      </div>
    </section>
  );
}
