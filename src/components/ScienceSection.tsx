'use client';

export default function ScienceSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            I Spent 6 Years With an Avoidant
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All the emotional labor. None of the safety. I finally figured out: the problem wasn&apos;t me. It was my nervous system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Discovery 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-black text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">Chasing Is a Learned Response</h3>
            <p className="text-muted-foreground text-sm">
              You weren&apos;t born this way. Inconsistent love from him trained your nervous system to pursue safety through pursuit. Withdraw = danger. Chase = survival.
            </p>
          </div>

          {/* Discovery 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-black text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">Seven Days Can Break the Pattern</h3>
            <p className="text-muted-foreground text-sm">
              You don&apos;t need years of therapy to change. A nervous system reset over seven days can rewire you from chase-mode to calm-mode. Then the scripts anchor it.
            </p>
          </div>

          {/* Discovery 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-black text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">Scripts Rewire Your Behavior</h3>
            <p className="text-muted-foreground text-sm">
              You don&apos;t freeze because you&apos;re broken. You freeze because you don&apos;t know what calm looks like. Having exact words ready rewires how you respond under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
