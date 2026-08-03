'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'He just went silent. What do I actually say?',
    answer: 'That is Script 7. It is 2 sentences. It communicates your needs without panic, desperation, or blame. The women who have used it say two things: "I felt calm sending it" and "he actually responded." Both of those are in the book.'
  },
  {
    question: 'How do I know if I should stay or leave?',
    answer: 'The Decision Framework inside the book walks you through 3 specific questions about his behaviour — not his potential, not your feelings about him, his actual behaviour. Most women who use it report making a clear decision within 7 days. Not because someone told them what to do, but because they finally had clarity.'
  },
  {
    question: 'Is this just about texting better?',
    answer: 'No. The scripts handle communication, yes — but the Decision Framework handles the bigger question of whether to stay, and the 7-day reset handles why you panic in the first place. It is a complete system, not a texting guide.'
  },
  {
    question: 'Will this work if he is very avoidant?',
    answer: 'The system is built specifically for avoidant attachment dynamics — partners who pull away, go silent, or send mixed signals due to attachment wounds. It will not work if your partner is actively manipulative or abusive. The book opens with a tool to tell the difference.'
  },
  {
    question: 'Is this manipulation?',
    answer: 'No. These scripts help you express your actual needs with clarity and calm — they do not play games, create jealousy, or hide what you want. If anything, they are the opposite of manipulation: they stop you from performing smallness to keep someone around.'
  },
  {
    question: 'What do I get and how do I get it?',
    answer: 'You get a single PDF delivered instantly after purchase. It works on your phone, tablet, or computer. It is designed so you can jump directly to the script you need in under 30 seconds. No app, no login, no subscription. Yours forever.'
  },
  {
    question: 'What if it does not work for me?',
    answer: '30-day full refund. No questions, no hoops. Email support@fleurite.me and you will be refunded the same day. The guarantee exists because the book works — and because you should never feel trapped by a $27 purchase.'
  }
];

function FAQAccordion({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const id = `faq-answer-${faq.question.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;

  return (
    <div className="bg-card rounded-xl shadow-sm border border-muted overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        <svg
          className={`h-5 w-5 text-pine-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`faq-question-${faq.question.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
        style={{ maxHeight: `${height}px` }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div ref={contentRef} className="px-6 pb-4">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted scroll-mt-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:support@fleurite.me"
            className="text-pine-600 font-semibold hover:text-pine-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
