'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this for my specific situation?",
    answer:
      "Yes. The book serves 5 different situations: (1) Still in the relationship trying to understand, (2) Want to know if it's fixable, (3) Want to leave but feel stuck, (4) Already left but still emotionally hooked, (5) Know the theory but can't stop chasing. The book opens with a Reader Map that directs you to your section in under 2 minutes.",
  },
  {
    question: "What are the 'unwritten rules' exactly?",
    answer:
      "They're the hidden behavioral patterns that define how an avoidant person operates — patterns they don't articulate, sometimes don't even consciously know, but that you feel the consequences of every day. Rule 1, for example, explains why emotional closeness actually triggers withdrawal instead of closeness. Understanding the mechanism changes how you respond to it — completely.",
  },
  {
    question: 'He just went silent. What do I actually say right now?',
    answer:
      "That's Script 17. It's 17 words. It communicates your position without panic, desperation, or blame. Women who've used it consistently report two things: 'I felt calm sending it' and 'he actually responded differently.' Both are inside the book. Open it, find Script 17, send it. That's it.",
  },
  {
    question: 'How do I know if I should stay or leave?',
    answer:
      "Pillar 4 — The 3-Question Decision Framework — walks you through exactly that. The questions are behavioral, not feeling-based, not hope-based. Most women who complete it make a clear decision within 7 days. Not because someone told them what to decide — because they finally had a method that wasn't based on 'but what if he changes?'",
  },
  {
    question: 'Is this just about texting better?',
    answer:
      "No. The scripts handle communication — but that's Pillar 3. Pillar 1 decodes WHY the dynamic feels so one-sided. Pillar 2 handles WHY you feel the urge to over-text in the first place (nervous system, not character flaw). Pillar 4 handles whether staying is actually worth it. It's a complete system. The scripts are one of four pillars.",
  },
  {
    question: 'Will this work if he is very avoidant or dismissive?',
    answer:
      "The system is designed specifically for anxious-avoidant dynamics — partners who pull away, go silent, or send mixed signals due to attachment patterns. Pillar 1 opens with a clear distinction between avoidant behavior and actively toxic or manipulative behavior. If the latter, the book will tell you that too — and tell you what to do about it.",
  },
  {
    question: 'Is this manipulation?',
    answer:
      "No — and this is actually addressed directly in Pillar 3. The scripts help you express your actual needs with clarity and calm. They don't create jealousy, hide what you want, or play games. If anything, they're the opposite: they stop you from performing smallness to make someone else comfortable — which was the manipulation you were already inside.",
  },
  {
    question: 'What exactly do I get, and how fast?',
    answer:
      "A single PDF, instant access after purchase. Works on your phone, tablet, or computer. No app, no login, no subscription. Organized so you can jump directly to the script or tool you need in under 60 seconds. Yours forever — including all future updates.",
  },
  {
    question: 'What if it does not work for me?',
    answer:
      "Every script is immediately usable — designed for real transformation, not theory. If you have any technical issues with your purchase, email support@fleurite.me and we'll help resolve them. Digital products are delivered instantly and are non-refundable once downloaded.",
  },
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
            Every Question Answered Honestly
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Including what the &ldquo;unwritten rules&rdquo; actually are — and whether this works if you&apos;re not sure you should stay.
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

        {/* Post-FAQ CTA */}
        <div className="mt-12 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-3 text-balance">
            You now know what the rules are.<br />You can start using them tonight.
          </h3>
          <p className="text-muted-foreground text-base mb-6 max-w-sm mx-auto leading-relaxed">
            $27. Instant PDF. Lifetime access. That&apos;s the entire proposition.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event('open-checkout'))}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pine-600 text-white font-black text-base hover:bg-pine-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Get Instant Access — $27
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            Instant access &bull; Lifetime PDF &bull; Secure checkout
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
