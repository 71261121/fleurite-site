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
    question: "When he pulls away, does he EVER come back and make genuine effort?",
    options: [
      "Yes, consistently. He always comes back and tries to repair.",
      "Sometimes. It's unpredictable but it happens.",
      "Rarely. I'm always the one who has to reach out.",
      "Never. He just disappears until he needs something."
    ]
  },
  {
    id: 2,
    question: "When you express your needs, does he...",
    options: [
      "Listen, acknowledge, and actually change his behavior",
      "Listen but nothing really changes",
      "Dismiss them or turn it back on you",
      "Get angry or shut down completely"
    ]
  },
  {
    id: 3,
    question: "On a scale of your relationship timeline, how much is he CHOOSING you?",
    options: [
      "Most of the time. He shows up consistently.",
      "About half the time. It's inconsistent.",
      "Rarely. I'm always the one putting in effort.",
      "Almost never. I feel like I'm chasing him."
    ]
  },
  {
    id: 4,
    question: "When conflict happens, does he...",
    options: [
      "Work through it with you until it's resolved",
      "Try to resolve it but without real depth",
      "Avoid it and sweep it under the rug",
      "Make it worse by being defensive or cruel"
    ]
  },
  {
    id: 5,
    question: "Can you trust his words?",
    options: [
      "Yes. What he says, he means. What he promises, he delivers.",
      "Mostly yes, but there are inconsistencies.",
      "Not really. His words don't match his actions.",
      "No. He lies or constantly breaks promises."
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
    const greenAnswers = answers.filter(a => a === 0).length; // He comes back, listens, chooses, works through conflict, trustworthy
    const yellowAnswers = answers.filter(a => a === 1).length; // Sometimes, inconsistent, partial effort
    const redAnswers = answers.filter(a => a === 2 || a === 3).length; // Never, dismisses, avoids, lies

    let recommendation = "";
    let actionable = "";
    let color = "yellow";

    if (greenAnswers >= 4) {
      recommendation = "He's Showing Up. The Scripts Will Help You Communicate Better.";
      actionable = "Your relationship has the foundation to rebuild. He's making effort and you can trust his intent. The 47 scripts will help you express your needs clearly, and the binary question will confirm: is this worth fighting for?";
      color = "green";
    } else if (greenAnswers >= 2 && yellowAnswers >= 2) {
      recommendation = "He's Inconsistent. You Need the Binary Question.";
      actionable = "He shows effort sometimes but it's unpredictable. Before you invest more energy, the Binary Question will tell you: Is he WILLING to change, or are you chasing someone who won't meet you halfway?";
      color = "yellow";
    } else {
      recommendation = "He's Not Showing Up. Trust Your Gut.";
      actionable = "He's not coming back, not listening, not choosing you, avoiding conflict, or breaking promises. The scripts won't fix this—because the problem isn't how you communicate. The problem is his unwillingness. The book has a 'Leaving With Dignity' section.";
      color = "red";
    }

    return {
      type: recommendation,
      description: actionable,
      color: color
    };
  };

  if (showResult) {
    const result = getAttachmentStyle();
    return (
      <div className="bg-card rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-bold text-clay-600 uppercase tracking-wide mb-4">Your Clarity</p>
          <h3 className={`text-3xl font-bold mb-2 ${
            result.color === 'green' ? 'text-green-600' : result.color === 'yellow' ? 'text-clay-600' : 'text-rose-600'
          }`}>
            {result.type}
          </h3>
        </div>
        <p className="text-foreground text-center mb-6 leading-relaxed text-lg">{result.description}</p>
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/#products'}
            className="inline-block bg-pine-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pine-700 transition-colors"
          >
            Get Your Next Step →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm font-bold text-clay-600 uppercase tracking-wide mb-4">Is He Worth Staying For?</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">5 Questions. Absolute Clarity.</h3>
        <p className="text-muted-foreground">Answer honestly. You already know the answers—this just makes them real.</p>
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
