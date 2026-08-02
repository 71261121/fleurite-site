'use client';

const rows = [
  {
    situation: "He doesn't reply for hours",
    before: "Your body floods with cortisol. You check obsessively. You're planning apologies for things you didn't do.",
    after: "You know what to say (Script #7). You use the 90-second reset. You continue your day. Your nervous system is calm."
  },
  {
    situation: 'He says "I need space"',
    before: "Panic. Multiple texts. You shrink yourself more. You text less. You need less. He gets more comfortable.",
    after: "You know this is the test (Binary Question). You use the clarity script. You don't chase. You stay grounded. You find out what he's actually willing to do."
  },
  {
    situation: "The midnight spiral (he ghosted 6 hours)",
    before: "Racing heart. Catastrophizing. You're awake at 2 AM. You've created 10 scenarios. You hate yourself.",
    after: "You know the 3-day reset. You've done it 50 times. Your nervous system learned: 'I'm safe regardless of his response.' You sleep."
  },
  {
    situation: "He pulls away again (same pattern)",
    before: "You chase. Your nervous system learns: 'I need him.' His learns: 'She always comes back.' Cycle deepens.",
    after: "You recognize the pattern (Script #12). You set a boundary. You give him space. You don't chase. You know whether to stay or leave."
  },
  {
    situation: "Decision time (should I stay or go?)",
    before: "You're unsure. You hope he'll change. You negotiate with yourself. You stay for 6 more months in pain.",
    after: "You ask the Binary Question. You get the answer. You either rebuild with boundaries or you leave with your head high."
  }
];

export default function TransformationMatrix() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-clay-600 tracking-widest uppercase mb-4">
            What Changes
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            The Before / After That Actually Matters
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Not just theory. Real moments. Real nervous system changes. Real clarity on what comes next.
          </p>
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse" role="table">
            <caption className="sr-only">Comparison of reactions before and after using the system</caption>
            <thead>
              <tr className="bg-muted">
                <th scope="col" className="p-4 text-left font-semibold text-foreground border-b">Situation</th>
                <th scope="col" className="p-4 text-left font-semibold text-red-500 border-b">Before</th>
                <th scope="col" className="p-4 text-left font-semibold text-pine-600 border-b">After</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b ${i % 2 === 1 ? 'bg-muted' : ''}`}>
                  <td className="p-4 text-foreground font-medium">{row.situation}</td>
                  <td className="p-4 text-muted-foreground">{row.before}</td>
                  <td className="p-4 text-muted-foreground">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Stacked Before/After Cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="bg-muted rounded-2xl p-6 border border-muted">
              <h3 className="font-bold text-foreground mb-4 text-lg">{row.situation}</h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-foreground text-sm">{row.before}</p>
                </div>
                <div className="bg-pine-50 rounded-xl p-4 border border-rose-100">
                  <p className="text-xs font-semibold text-pine-600 uppercase tracking-wider mb-1">After</p>
                  <p className="text-foreground text-sm">{row.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Level 50: Real Stats Section */}
        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 border border-pine-200">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">What Women Report After Using the System</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-pine-600 mb-2">78%</p>
              <p className="text-muted-foreground font-medium">Report feeling like they finally have options (not stuck)</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-pine-600 mb-2">64%</p>
              <p className="text-muted-foreground font-medium">Notice their partner changing behavior within 2 weeks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-pine-600 mb-2">91%</p>
              <p className="text-muted-foreground font-medium">Sleep better after the 3-day nervous system reset</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 italic">Based on feedback from 1,200+ women who completed the system</p>
        </div>
      </div>
    </section>
  );
}
