'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What do I say when he goes silent?',
    answer: 'That\'s Script #7. The exact text is inside the paid book. It\'s 2-3 sentences that express your needs without anger or desperation. Most women report: "I felt calm sending it" and "He actually responded positively."'
  },
  {
    question: 'How do I know if I should stay or leave?',
    answer: 'The Binary Question in the paid book asks 3 specific questions about his behavior. Answer honestly, and you\'ll have clarity on whether this is salvageable or if you deserve better. Most women report making a decision within 7 days.'
  },
  {
    question: 'Will this actually work for me?',
    answer: 'The scripts work on avoidant partners (partners who withdraw due to attachment wounds). If your partner is manipulative or abusive, this system isn\'t appropriate. The book opens with a clear framework to help you identify which one he is.'
  },
  {
    question: 'How fast will I see results?',
    answer: 'You\'ll feel calmer within 24 hours (after the 3-day reset). The scripts start working immediately — most women report "He took me seriously for the first time." His actual behavior shift takes 2-4 weeks.'
  },
  {
    question: 'Is this manipulation?',
    answer: 'No. These are communication tools, not manipulation tactics. The scripts help you express your needs clearly and calmly. There\'s no "playing games" or "making him jealous" here. It\'s about knowing what to say when anxiety makes you freeze.'
  },
  {
    question: 'What format is this in?',
    answer: 'The book is delivered as a high-quality PDF. You can read it on any device — phone, tablet, or computer. It\'s designed for easy reference, with clear sections you can jump to when you need a specific script fast.'
  },
  {
    question: 'How long do I have access?',
    answer: 'Lifetime. Once you purchase, the PDFs are yours forever. Download them multiple times, save them anywhere, and refer back whenever you need. No subscription, no recurring fees.'
  },
  {
    question: 'Is this a replacement for therapy?',
    answer: 'No. The Fleurite System is designed to complement professional therapy, not replace it. If you\'re dealing with severe anxiety or trauma, we recommend working with a licensed therapist alongside these tools.'
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
