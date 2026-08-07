'use client';

export default function TrustCredibility() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Credibility 1 */}
          <div className="text-center">
            <div className="text-4xl font-black text-pine-600 mb-2">9 years</div>
            <p className="text-sm text-muted-foreground font-medium">
              Of real relationship mistakes (then breakthroughs)
            </p>
          </div>

          {/* Credibility 2 */}
          <div className="text-center">
                <div className="text-4xl font-black text-pine-600 mb-2">7,700+</div>
            <p className="text-sm text-muted-foreground font-medium">
              Women have downloaded this system
            </p>
          </div>

          {/* Credibility 3 */}
          <div className="text-center">
            <div className="text-4xl font-black text-pine-600 mb-2">943</div>
            <p className="text-sm text-muted-foreground font-medium">
              Shares on the validation that started this
            </p>
          </div>

          {/* Credibility 4 */}
          <div className="text-center">
            <div className="text-4xl font-black text-pine-600 mb-2">47</div>
            <p className="text-sm text-muted-foreground font-medium">
              Real scripts tested in real relationships
            </p>
          </div>
        </div>

        {/* Bottom trust statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground italic">
            This isn&apos;t theory. It&apos;s been tested by thousands of women in actual relationships with avoidant partners. Updated weekly with new scripts and insights.
          </p>
        </div>
      </div>
    </section>
  );
}
