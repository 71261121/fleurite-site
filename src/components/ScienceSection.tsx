'use client';

export default function ScienceSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How I Discovered This
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nine years ago, I was exhausted. Tried every diet, supplement, and productivity hack. Nothing worked. So I went back to basics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Discovery 1 */}
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-rose-600 text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">Your Cycle Is Real</h3>
            <p className="text-muted-foreground text-sm">
              Not something in your head. Your body operates in phases. When you ignore those phases, energy crashes. When you align with them, everything shifts.
            </p>
          </div>

          {/* Discovery 2 */}
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-rose-600 text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">Reset Works Fast</h3>
            <p className="text-muted-foreground text-sm">
              Seven days is enough to reset your nervous system. You don&apos;t need a 90-day program or a subscription. You need to break the pattern once.
            </p>
          </div>

          {/* Discovery 3 */}
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-rose-600 text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-foreground mb-2">{'Psychology > Willpower'}</h3>
            <p className="text-muted-foreground text-sm">
              You don&apos;t need more discipline. You need to understand why your body does what it does. Then the reset happens naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
