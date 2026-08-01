'use client';

export default function ScienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Why This Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't just "communicate better" advice. It's based on actual psychology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Science Point 1 */}
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-rose-600 text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Attachment Theory</h3>
            <p className="text-gray-600 text-sm">
              Your anxiety isn't random. It's a predictable pattern based on your attachment style.
              Once you understand it, you can change it.
            </p>
          </div>

          {/* Science Point 2 */}
          <div className="bg-gold-50 rounded-2xl p-6 border border-gold-100">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-gold-600 text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">CBT Techniques</h3>
            <p className="text-gray-600 text-sm">
              Approaches inspired by principles used in therapeutic settings.
              The 7-Day guide draws from these well-researched concepts.
            </p>
          </div>

          {/* Science Point 3 */}
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-rose-600 text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Nervous System Regulation</h3>
            <p className="text-gray-600 text-sm">
              Breathing exercises and grounding techniques can help create
              a moment of pause when you feel overwhelmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
