'use client';

export default function Differentiation() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            When He Cancels Plans:{' '}
            <span className="text-pine-600">Panic vs. Grounded</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Same trigger. Two different nervous systems. One leads to him pulling away. The other leads to him respecting you.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Panic Response */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border-l-4 border-red-400">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-red-600 font-bold">↓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Panic Response</h3>
                <p className="text-red-500 text-sm">The spiral starts...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-4 border border-red-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:00 PM</p>
                <p className="text-foreground italic">"Something came up. Can we reschedule?"</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-red-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:02 PM - YOUR RESPONSE</p>
                <p className="text-foreground font-medium">"You ALWAYS do this. Don't you even want to see me??"</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-red-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:05 PM</p>
                <p className="text-foreground">"I'm sorry... please don't be mad..."</p>
              </div>

              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-red-700 font-semibold text-sm">
                  Result: He feels controlled. He withdraws. You chase harder.
                </p>
              </div>
            </div>
          </div>

          {/* Grounded Response */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border-l-4 border-pine-400">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pine-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-pine-600 font-bold">↑</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Grounded Response</h3>
                <p className="text-pine-600 text-sm">The secure choice...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-4 border border-pine-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:00 PM</p>
                <p className="text-foreground italic">"Something came up. Can we reschedule?"</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-pine-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:02 PM - YOUR RESPONSE</p>
                <p className="text-foreground font-medium">"No problem. I value consistency though. Let's lock in a new date now."</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-pine-200/50">
                <p className="text-sm text-muted-foreground mb-2">7:05 PM - YOU</p>
                <p className="text-foreground">Take 90 seconds. Breathe. You're safe regardless of his response.</p>
              </div>

              <div className="bg-pine-50 rounded-xl p-4 border border-pine-200">
                <p className="text-pine-700 font-semibold text-sm">
                  Result: You feel grounded. He sees your standards. Attraction increases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="text-center bg-muted rounded-2xl p-10">
          <p className="text-xl text-foreground font-semibold mb-2">
            The difference is your nervous system, not his behavior.
          </p>
          <p className="text-muted-foreground">
            Learn to regulate yourself first. Everything else follows.
          </p>
        </div>
      </div>
    </section>
  );
}
