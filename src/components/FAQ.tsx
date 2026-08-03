'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'He just went silent. What do I actually say right now?',
    answer: 'That is Script 7. It is two sentences. It is written specifically for the moment he goes quiet without explanation. The women who have sent it say two things: "I felt calm sending it" and "he actually replied." Open the book, find Script 7, send it. That is it.'
  },
  {
    question: 'I have been in this situation for months. Is it too late?',
    answer: 'The system is built exactly for women who have been inside the pattern for a long time — not for women who caught it early. The Decision Framework specifically helps you see whether this relationship has evidence of change, or whether you have been adapting to something that is not changing. Most women who use it have clarity within a day or two.'
  },
  {
    question: 'Is this just a texting guide?',
    answer: 'No. The scripts handle the communication side — but the Decision Framework answers the bigger question of whether to stay, and the 7-day reset addresses why you panic in the first place. It is a complete system. The scripts are just the most immediately useful part because most women open the book when they are in a live situation.'
  },
  {
    question: 'Will this work if he is very avoidant?',
    answer: 'The entire system is built around the anxious-avoidant dynamic — partners who go quiet, pull away, or send mixed signals because of attachment patterns, not because they do not care. It will not work if your partner is actively manipulative or abusive. The book opens with a tool to tell the difference clearly.'
  },
  {
    question: 'Am I learning to manipulate him?',
    answer: 'No. These scripts help you express your actual needs with calm and clarity. They do not play games, create jealousy, or hide what you want. They are the opposite of manipulation — they stop you from performing smallness to keep someone who should be choosing you anyway.'
  },
  {
    question: 'What exactly do I get and how fast?',
    answer: 'You get a single PDF delivered to your inbox within 60 seconds of purchase. It works on your phone, tablet, or laptop. It is designed so you can find any script in under 30 seconds — no scrolling through chapters. No app. No login. No subscription. Yours forever.'
  },
  {
    question: 'What if it does not work for me?',
    answer: '30-day full refund. Email support@fleurite.me and you will be refunded the same day with no questions and no forms. The guarantee exists because this book works — and because you should never feel trapped by a $27 decision.'
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
        <span className="font-semibold text-foreground pr-4 text-sm md:text-base">{faq.question}</span>
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
        style={{ maxHeight: `${height}px` }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div ref={contentRef} className="px-6 pb-5 pt-1">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-muted scroll-mt-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-black text-clay-600 uppercase tracking-[0.2em] mb-4">
            Before You Decide
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            The Questions You Are Probably Thinking Right Now
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Every objection answered honestly — including the one about whether this is just for texting.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Post-FAQ CTA — final conversion */}
        <div className="mt-12 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-3 text-balance">
            You can keep going the way you have been going.
          </h3>
          <p className="text-muted-foreground text-base mb-6 max-w-sm mx-auto leading-relaxed">
            Or you can spend $27, read the book tonight, and use Script 7 tomorrow.
            That is the entire proposition.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pine-600 text-white font-black text-base hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Yes — I want the scripts now
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            30-day guarantee &bull; Instant PDF &bull; Or email us for a same-day refund
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm mb-2">Still have a question?</p>
          <a
            href="mailto:support@fleurite.me"
            className="text-pine-600 font-semibold hover:text-pine-700 transition-colors text-sm"
          >
            support@fleurite.me
          </a>
        </div>
      </div>
    </section>
  );
}
