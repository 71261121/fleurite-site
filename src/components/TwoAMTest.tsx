'use client';

import ButtonGlow from './ButtonGlow';

export default function TwoAMTest() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            The 2 AM Test
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What do you do when it's 2 AM and your mind won't stop racing?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-red-400 mb-4">Without The System</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">→</span>
                Check his Instagram for the 10th time
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">→</span>
                Draft 5 different texts then delete them all
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">→</span>
                Imagine worst-case scenarios
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">→</span>
                Finally fall asleep exhausted at 4 AM
              </li>
            </ul>
          </div>

          {/* After */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-rose-500">
            <h3 className="text-xl font-bold text-rose-400 mb-4">With The System</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">→</span>
                Notice the anxiety rising
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">→</span>
                Use a grounding technique
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">→</span>
                Read the appropriate script
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">→</span>
                Fall asleep knowing you have a plan
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <ButtonGlow
            href="#get-access"
            className="inline-block bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-800 transition-colors shadow-lg"
          >
            Get the Scripts — $27
          </ButtonGlow>
        </div>
      </div>
    </section>
  );
}
