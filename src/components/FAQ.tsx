'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is this manipulation?',
    answer: 'No. These are communication tools, not manipulation tactics. The scripts help you express your needs clearly and calmly. There\'s no "playing games" or "making him jealous" here. It\'s about knowing what to say when anxiety makes you freeze.'
  },
  {
    question: 'What if my relationship is already over?',
    answer: 'The internal work (Part 2) is valuable regardless of your relationship status. The scripts can also help with re-engagement if that\'s what you want. But more importantly, the tools help YOU feel calmer and more secure — whether you\'re single or attached.'
  },
  {
    question: 'Will this work on a toxic partner?',
    answer: 'The Red Flag Filter in Part 1 helps you distinguish between an avoidant partner (who withdraws due to attachment wounds) and a toxic partner (who manipulates intentionally). If your partner is toxic, this system may not be appropriate — and the filter will help you see that.'
  },
  {
    question: 'How fast will I see results?',
    answer: 'Most women notice internal shifts within 1-2 weeks. The calm from Part 2 often comes sooner — sometimes within days. His response is outside your control — but you\'ll have clearer tools for your own reactions.'
  },
  {
    question: 'What format is this in?',
    answer: 'Both parts are delivered as high-quality PDFs. You can read them on any device — phone, tablet, or computer. They\'re designed for easy reference, with clear sections you can jump to when you need a specific script.'
  },
  {
    question: 'How long do I have access?',
    answer: 'Lifetime. Once you purchase, the PDFs are yours forever. Download them multiple times, save them anywhere, and refer back whenever you need. No subscription, no recurring fees.'
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer: 'If it doesn\'t feel helpful, reach out to our support team. We want this to work for you.'
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
