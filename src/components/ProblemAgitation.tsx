'use client';

export default function ProblemAgitation() {
  const problems = [
    {
      title: 'He Withdraws After Intimacy',
      description: 'One day he\'s close. The next day he\'s distant. No explanation. No timeline. Your nervous system learns: closeness = abandonment. So you panic every time he pulls away.'
    },
    {
      title: 'You\'re Texting Him Three Times a Day',
      description: 'He doesn\'t reply for hours. So you text again. And again. Each message is an attempt to get him back. You\'re chasing your own safety through your phone.'
    },
    {
      title: 'All the Emotional Labor Falls on You',
      description: 'You ask how his day was. You remember his mother\'s name. You apologize first. He contributes nothing except his inconsistency. And you keep trying to make it work anyway.'
    },
    {
      title: 'You\'ve Disappeared Into Yourself',
      description: 'Your needs became "too much." Your boundaries became "controlling." So you stopped asking for anything. Now he gets everything, and you get crumbs.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold text-black tracking-widest uppercase mb-4">
            The Avoidant Cycle
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Four Patterns You Can&apos;t Stop
          </h2>
          <p className="text-lg font-semibold text-black mb-3">
            (Until you understand why your nervous system does them)
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            These aren&apos;t character flaws. They&apos;re trained responses to inconsistent behavior. Your nervous system learned these patterns to survive with an avoidant. You can unlearn them.
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
            You&apos;ve tried <span className="text-black">leaving him</span>. Tried <span className="text-black">ignoring him</span>. Tried <span className="text-black">being more independent</span>.
          </p>
          <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
            But you keep coming back. Because your nervous system is wired to chase, not leave. <span className="text-black">You need to rewire that wiring.</span> Not just willpower.
          </p>
        </div>
      </div>
    </section>
  );
}
