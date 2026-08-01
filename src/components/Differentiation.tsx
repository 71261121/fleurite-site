'use client';

export default function Differentiation() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            The Difference Between{' '}
            <span className="text-rose-700">Reacting and Responding</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Same situation. Two different approaches. Different outcomes.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Without System */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Without The System</h3>
                <p className="text-red-500 text-sm">The old way</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:00 PM - He cancels plans</p>
                <p className="text-gray-700 italic">"Hey, something came up. Can we reschedule?"</p>
              </div>

              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:02 PM - Your response</p>
                <p className="text-gray-700">"Again?? You always do this! Do you even want to see me?"</p>
              </div>

              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:05 PM - Panic spiral</p>
                <p className="text-gray-700">"I'm sorry, I didn't mean that. Please don't be mad."</p>
              </div>

              <div className="bg-red-100 rounded-xl p-4 border border-red-200">
                <p className="text-red-700 font-medium text-sm">
                  He feels smothered. Pulls away more. You spiral harder.
                </p>
              </div>
            </div>
          </div>

          {/* With System */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-rose-400">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-rose-600 font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">With The System</h3>
                <p className="text-rose-500 text-sm">The new way</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-rose-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:00 PM - He cancels plans</p>
                <p className="text-gray-700 italic">"Hey, something came up. Can we reschedule?"</p>
              </div>

              <div className="bg-rose-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:02 PM - Your response</p>
                <p className="text-gray-700 italic">"No problem. I value consistency though, so let's pick a new date now."</p>
              </div>

              <div className="bg-rose-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">7:05 PM - Your mindset</p>
                <p className="text-gray-700">Use the 90-Second Reset. Stay calm. Don't spiral.</p>
              </div>

              <div className="bg-rose-100 rounded-xl p-4 border border-rose-200">
                <p className="text-rose-700 font-medium text-sm">
                  You feel more grounded regardless of his response.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="text-center bg-rose-50 rounded-2xl p-8">
          <p className="text-xl text-gray-700 font-medium">
            The difference isn't luck.{' '}
            <span className="text-rose-600 font-bold">It's having the right tools.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
