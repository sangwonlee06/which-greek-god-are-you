"use client";

import { useState } from "react";
import type { Question, Answer } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
}

const letters = ["A", "B", "C", "D"];

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
    }, 500);
  };

  return (
    <div className="relative flex min-h-[100dvh] flex-col px-5 pb-10 pt-safe sm:px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[8%] h-[200px] w-[300px] -translate-x-1/2 rounded-full bg-amber-500/[0.04] blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col pt-14">
        {/* ── Story-style segmented progress ── */}
        <div className="mb-8 flex gap-1.5">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.08]"
            >
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  i < questionNumber
                    ? "w-full bg-gradient-to-r from-amber-400 to-yellow-300"
                    : i === questionNumber - 1
                      ? "w-full bg-gradient-to-r from-amber-400 to-yellow-300"
                      : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Question counter */}
        <div
          className="animate-stagger-in mb-3"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white/30">
            Question {questionNumber}
            <span className="text-white/15"> / {totalQuestions}</span>
          </span>
        </div>

        {/* Question text */}
        <h2
          className="animate-stagger-in mb-10 text-[1.65rem] leading-[1.2] font-bold tracking-tight text-white sm:text-3xl"
          style={{ animationDelay: "0.12s" }}
        >
          {question.question}
        </h2>

        {/* Answer buttons */}
        <div className="mt-auto space-y-3">
          {question.answers.map((answer, index) => {
            const isSelected = selected === index;
            const isDisabled = selected !== null && !isSelected;

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`animate-stagger-in group flex w-full items-start gap-3.5 rounded-2xl p-4 text-left transition-all duration-400 ${
                  isSelected
                    ? "glass-strong scale-[0.98] border-amber-400/30 bg-amber-400/10 ring-1 ring-amber-400/20"
                    : isDisabled
                      ? "glass scale-[0.98] opacity-30"
                      : "glass hover:bg-white/[0.07] active:scale-[0.98]"
                }`}
                style={{ animationDelay: `${0.15 + index * 0.06}s` }}
              >
                {/* Letter badge */}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-amber-400/25 text-amber-300"
                      : "bg-white/[0.06] text-white/30 group-hover:bg-white/[0.1] group-hover:text-white/50"
                  }`}
                >
                  {letters[index]}
                </span>

                {/* Answer text */}
                <span
                  className={`pt-0.5 text-[15px] leading-snug font-medium transition-colors duration-300 sm:text-base ${
                    isSelected
                      ? "text-amber-100"
                      : isDisabled
                        ? "text-white/40"
                        : "text-white/75 group-hover:text-white/90"
                  }`}
                >
                  {answer.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
