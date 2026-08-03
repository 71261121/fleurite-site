'use client';

export default function Differentiation() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            3 PM Energy Crash:{' '}
            <span className="text-black">Fighting vs. Flowing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Same time of day. Two different body states. One leaves you exhausted for the rest of your week. The other lets you maintain energy through Friday.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fighting It */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border-l-4 border-gray-400">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">↓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Fighting Your Cycle</h3>
                <p className="text-gray-600 text-sm">The crash hits...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">2:50 PM</p>
                <p className="text-foreground italic">Body: "I need to rest now"</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">2:55 PM - YOUR RESPONSE</p>
                <p className="text-foreground font-medium">"I SHOULD have more energy. This is laziness. Just push through."</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">6:00 PM</p>
                <p className="text-foreground">You&apos;re running on fumes. Dinner is a struggle. Can&apos;t think. Can&apos;t connect.</p>
              </div>

              <div className="bg-gray-200 rounded-xl p-4 border border-gray-300">
                <p className="text-gray-800 font-semibold text-sm">
                  Result: Exhausted by night. Resentful of your body. Week is ruined.
                </p>
              </div>
            </div>
          </div>

          {/* Flowing With It */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border-l-4 border-black">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-black font-bold">↑</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Flowing With Your Cycle</h3>
                <p className="text-black text-sm">The reset works...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">2:50 PM</p>
                <p className="text-foreground italic">Body: "I need to rest now"</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">2:55 PM - YOUR RESPONSE</p>
                <p className="text-foreground font-medium">"My body knows what it needs. I shift gears. Lighter tasks. Deep breaths."</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-gray-300">
                <p className="text-sm text-muted-foreground mb-2">6:00 PM</p>
                <p className="text-foreground">You&apos;re calm. Grounded. Presence returns. You can actually be with your people.</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-black">
                <p className="text-black font-semibold text-sm">
                  Result: Energy is stable. Body feels trusted. Week feels sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="text-center bg-muted rounded-2xl p-10">
          <p className="text-xl text-foreground font-semibold mb-2">
            The difference is alignment, not willpower.
          </p>
          <p className="text-muted-foreground">
            When you work WITH your cycle instead of against it, everything gets easier.
          </p>
        </div>
      </div>
    </section>
  );
}
