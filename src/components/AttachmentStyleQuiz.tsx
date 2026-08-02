'use client';

import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "When your partner doesn't text back for hours, you...",
    options: [
      "Assume the worst and spiral into anxiety",
      "Feel annoyed but try to distract yourself",
      "Figure they're busy and carry on",
      "Don't notice much either way"
    ]
  },
  {
    id: 2,
    question: "In relationships, you typically...",
    options: [
      "Feel like you need constant reassurance",
      "Want closeness but also need space",
      "Prefer to keep things light and fun",
      "Value independence above all"
    ]
  },
  {
    id: 3,
    question: "When someone pulls away, you...",
    options: [
      "Chase harder to reconnect",
      "Give space but feel hurt",
      "Pull away too to protect yourself",
      "Hardly notice or care"
    ]
  },
  {
    id: 4,
    question: "Your biggest fear in relationships is...",
    options: [
      "Being abandoned or left alone",
      "Losing your independence",
      "Being controlled or smothered",
      "Getting too emotionally involved"
    ]
  },
  {
    id: 5,
    question: "You feel most secure when...",
    options: [
      "Your partner is consistently available",
      "There's a balance of closeness and space",
      "You have freedom to do your own thing",
      "Things stay casual and undefined"
    ]
  }
];

export default function AttachmentStyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getAttachmentStyle = () => {
    const anxiousAnswers = answers.filter(a => a === 0).length;
    const secureAnswers = answers.filter(a => a === 1 || a === 2).length;
    const avoidantAnswers = answers.filter(a => a === 3).length;

    if (anxiousAnswers >= 3) {
      return {
        type: "You May Relate to Anxious Patterns",
        description: "You tend to seek closeness and reassurance. You may worry about abandonment and need consistent validation. This isn't a flaw—it's just a pattern that can be changed.",
        color: "rose"
      };
    } else if (avoidantAnswers >= 3) {
      return {
        type: "You May Relate to Avoidant Patterns",
        description: "You value independence and may feel uncomfortable with too much closeness. You tend to pull away when things get intense. This is just a protection mechanism.",
        color: "rose"
      };
    } else {
      return {
        type: "You May Relate to Secure Patterns",
        description: "You have a healthy balance of independence and closeness. You feel comfortable with intimacy and don't fear abandonment. This is the goal we're working toward.",
        color: "green"
      };
    }
  };

  if (showResult) {
    const result = getAttachmentStyle();
    return (
      <div className="bg-card rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 text-center mb-4">An informal self-reflection — not a clinical assessment.</p>
          <h3 className="text-2xl font-bold text-foreground mb-2">Your Attachment Style:</h3>
          <p className={`text-3xl font-bold ${
            result.color === 'rose' ? 'text-pine-500' : 'text-green-500'
          }`}>
            {result.type}
          </p>
        </div>
        <p className="text-muted-foreground text-center mb-6">{result.description}</p>
        <p className="text-sm text-gray-400 text-center mb-4">Attachment patterns are complex — this is a starting point for reflection, not a diagnosis.</p>
        <div className="text-center">
          <a
            href="#get-access"
            className="inline-block bg-pine-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pine-700 transition-colors"
          >
            Get Scripts for Your Style
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-400 text-center mb-4">An informal self-reflection — not a clinical assessment.</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">What's Your Attachment Style?</h3>
        <p className="text-muted-foreground">Answer 5 quick questions to understand your pattern</p>
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-pine-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">{questions[currentQuestion].question}</h4>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left px-4 py-3 rounded-lg border border-muted hover:border-rose-500 hover:bg-pine-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
