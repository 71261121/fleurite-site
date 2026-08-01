'use client';
import { useState } from 'react';

export default function StoryComparison() {
  const [showB, setShowB] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Same Situation. Different Tools.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Both women got the same text at 7 PM on a Tuesday.
          </p>
        </div>

        {/* Pill Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setShowB(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !showB ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Without the System
            </button>
            <button
              onClick={() => setShowB(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                showB ? 'bg-rose-700 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              With the System
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Sarah - Without System */}
          <div className={`${showB ? 'hidden' : 'block'}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">A</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Sarah</p>
                  <p className="text-sm text-gray-500">Only has good intentions</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-lg mx-auto">
              {[
                { time: '7:00 PM', text: 'He texts: "Hey, I think we need some space. I\'m confused about us."' },
                { time: '7:01 PM', text: 'Heart rate spikes. Opens Instagram to check his stories.' },
                { time: '7:03 PM', text: 'Types: "What did I do?? Please just talk to me"' },
                { time: '7:04 PM', text: 'Deletes it. Types: "Fine, I don\'t care anyway"' },
                { time: '7:05 PM', text: 'Deletes that too. Sends: "Ok"' },
                { time: '7:15 PM', text: 'Re-reads his text 6 times. Spiral deepens.' },
                { time: '11:30 PM', text: 'Still awake. Sends a paragraph at midnight he doesn\'t read until morning.' },
                { time: 'Next morning', text: 'He feels smothered. Pulls away more. She apologizes for having feelings.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-50 rounded-xl p-4 border border-red-100 flex gap-4">
                  <span className="text-xs font-mono text-red-400 whitespace-nowrap mt-1">{item.time}</span>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emma - With System */}
          <div className={`${showB ? 'block' : 'hidden'}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-700 font-bold text-sm">P</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Emma</p>
                  <p className="text-sm text-gray-500">Has the system + scripts</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-lg mx-auto">
              {[
                { time: '7:00 PM', text: 'He texts: "Hey, I think we need some space. I\'m confused about us."' },
                { time: '7:01 PM', text: 'Heart rate spikes. Opens the 7-Day Guide. Does the grounding exercise.' },
                { time: '7:05 PM', text: 'Heart rate settles. Opens Part 1, finds the "I Need Space" script.' },
                { time: '7:06 PM', text: 'Sends: "I hear you. I care about this, so let\'s talk when you\'re ready."' },
                { time: '7:10 PM', text: 'Puts phone down. Goes for a walk. Doesn\'t check his profile.' },
                { time: 'Next morning', text: 'He texts: "Thanks for not freaking out. Can we talk tonight?"' },
                { time: 'That evening', text: 'Has the conversation. Expresses needs calmly. Maintains boundaries.' },
                { time: 'Result', text: 'He feels safe, not smothered. She feels grounded regardless of his response.' },
              ].map((item, i) => (
                <div key={i} className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex gap-4">
                  <span className="text-xs font-mono text-rose-400 whitespace-nowrap mt-1">{item.time}</span>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="text-center mt-12 bg-gray-50 rounded-2xl p-8">
          <p className="text-xl text-gray-700 font-medium">
            The situation was identical.{' '}
            <span className="text-rose-700 font-bold">The tools made the difference.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
