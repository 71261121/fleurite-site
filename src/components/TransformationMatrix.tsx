'use client';

const rows = [
  {
    situation: "He doesn't text back",
    before: "Spiral into anxiety, check phone 50 times",
    after: "Use a grounding technique, carry on with your day"
  },
  {
    situation: 'He says "I need space"',
    before: "Panic, send multiple texts, feel abandoned",
    after: "Use script from Part 1, stay calm"
  },
  {
    situation: "2 AM thoughts",
    before: "Worst-case scenarios, can't sleep",
    after: "Read emergency protocol, fall asleep"
  },
  {
    situation: "Conflict happens",
    before: "React emotionally, say things you regret",
    after: "Respond thoughtfully, maintain boundaries"
  },
  {
    situation: "He pulls away",
    before: "Chase harder, feel desperate",
    after: "Give space, trust the process"
  }
];

export default function TransformationMatrix() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Your Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From anxious and reactive to calm and grounded
          </p>
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse" role="table">
            <caption className="sr-only">Comparison of reactions before and after using the system</caption>
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="p-4 text-left font-semibold text-gray-900 border-b">Situation</th>
                <th scope="col" className="p-4 text-left font-semibold text-red-500 border-b">Before</th>
                <th scope="col" className="p-4 text-left font-semibold text-rose-600 border-b">After</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="p-4 text-gray-700 font-medium">{row.situation}</td>
                  <td className="p-4 text-gray-600">{row.before}</td>
                  <td className="p-4 text-gray-600">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Stacked Before/After Cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">{row.situation}</h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-gray-700 text-sm">{row.before}</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
                  <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">After</p>
                  <p className="text-gray-700 text-sm">{row.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
