'use client';

export default function ProblemAgitation() {
  const problems = [
    {
      title: 'The 2 AM Thoughts',
      description: 'You lie awake wondering what you did wrong. Your mind creates scenarios that probably aren\'t real, but they feel so real in the moment.'
    },
    {
      title: 'The Push-Pull',
      description: 'He pulls away, you feel panic. He comes back, you feel relief. Then he pulls away again. You\'re exhausted but can\'t seem to break the pattern.'
    },
    {
      title: 'The Anxiety',
      description: 'A simple text sends your heart racing. Your chest tightens. You\'re already planning how to fix something that might not even be broken.'
    },
    {
      title: 'The Self-Blame',
      description: '"If I was just more chill... if I was more interesting..." You blame yourself for something that isn\'t actually your fault.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Does This Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're in a relationship with someone who pulls away, you probably know this cycle
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Empathetic Statement */}
        <div className="text-center bg-gradient-to-r from-rose-50 to-gold-50 rounded-2xl p-8 md:p-12">
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
            You've tried <span className="font-bold text-rose-700">being more chill</span>.
            You've tried <span className="font-bold text-rose-700">giving him space</span>.
            You've tried <span className="font-bold text-rose-700">playing it cool</span>.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-6">
            It's not working because you haven't had the right tools.
          </p>
        </div>
      </div>
    </section>
  );
}
