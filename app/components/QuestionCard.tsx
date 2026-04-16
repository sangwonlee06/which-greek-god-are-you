"use client";

import { useState } from "react";
import type { Question, Answer } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => {
      onAnswer(question.answers[index]);
    }, 400);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col px-6 pb-8 pt-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-white/50">
          <span>
            {questionNumber} of {totalQuestions}
          </span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-500 ease-out"
            style={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="animate-slide-up flex flex-1 flex-col">
        <h2 className="mb-8 text-2xl font-bold leading-tight text-white sm:text-3xl">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full rounded-2xl border p-4 text-left text-base font-medium transition-all duration-300 sm:text-lg ${
                selected === index
                  ? "scale-[0.98] border-amber-400/60 bg-amber-400/20 text-amber-200"
                  : selected !== null
                    ? "border-white/5 bg-white/5 text-white/30"
                    : "border-white/10 bg-white/5 text-white/90 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
