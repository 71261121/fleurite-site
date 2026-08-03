'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is this just another diet or wellness program?',
    answer: 'No. This is a reset—meaning it breaks the pattern your body is stuck in, then teaches you how to maintain it. Not a diet (no calorie counting). Not a supplement routine (no pills). Just psychology, daily practices, and alignment with your actual cycle.'
  },
  {
    question: 'Will this work if I\'m on hormonal birth control?',
    answer: 'Yes. The reset works on the nervous system level, which operates independently of hormonal contraception. That said, if you\'re tracking your cycle, hormonal birth control changes the pattern. I address this in the guide.'
  },
  {
    question: 'How fast will I feel different?',
    answer: 'Most women report feeling calmer and more grounded within 24-48 hours. Real energy shifts (not just feeling less tired) take about 7 days. The bigger transformation—where you stop fighting your cycle entirely—happens over 2-3 weeks once you apply it.'
  },
  {
    question: 'I\'ve tried SO many programs. Why is this different?',
    answer: 'Because most programs treat symptoms (energy crashes, mood swings). This treats the root: your nervous system being out of sync with your cycle. Once that\'s aligned, everything else follows naturally. You\'re not forcing your body into a mold—you\'re learning to work with it.'
  },
  {
    question: 'What if I don\'t have a regular cycle?',
    answer: 'The system still works. Whether your cycle is irregular, you\'re perimenopause, or you don\'t menstruate—your body still operates in phases. The reset teaches you to notice those phases and work with them, regardless of what they look like.'
  },
  {
    question: 'Is this a replacement for medical help?',
    answer: 'No. If you\'re dealing with diagnosed hormonal imbalances, PCOS, endometriosis, or other medical conditions, talk to your doctor first. This system complements medical care—it doesn\'t replace it. Think of it as the psychology and lifestyle piece your doctor can\'t provide.'
  },
  {
    question: 'What format do I get?',
    answer: 'A high-quality PDF guide with daily practices, an energy tracker, and my founder notes on the psychology behind why this works. You download it instantly and can access it forever on any device. No app. No subscription. Just the guide, anytime you need it.'
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer: 'I offer a full money-back guarantee. Try it for 7 days. If you don\'t feel more grounded or energized, I refund you completely. No questions, no hassle. I\'ve tested this on thousands of women—but I know it won\'t work for everyone.'
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
