'use client';

export default function ClosingPitch() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
          You can keep guessing what to say.<br />
          <span className="text-rose-400">Or you can know.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          <div className="bg-gray-800 rounded-2xl p-6 text-left">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">Without the system</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                Same arguments on repeat
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                Words fail you in the moment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                2 AM spirals become normal
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 text-left border border-rose-700/30">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-wider mb-3">With the system</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">•</span>
                Exact words for exact moments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">•</span>
                Calm presence instead of panic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">•</span>
                Boundaries that feel natural
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400 text-lg mb-8">
          One system. Two parts. $27. Your next conversation doesn&apos;t have to be a disaster.
        </p>
      </div>
    </section>
  );
}
