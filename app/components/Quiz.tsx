"use client";

import { useState, useCallback, useEffect } from "react";
import { questions, type Answer } from "@/lib/questions";
import { gods } from "@/lib/gods";
import { calculateResult } from "@/lib/scoring";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";

type Screen = "start" | "quiz" | "revealing" | "result";

function RevealingScreen() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in space-y-6">
        <div className="animate-pulse-subtle text-5xl">🏛️</div>
        <div className="space-y-2">
          <p className="text-[15px] font-semibold text-white/50">
            Consulting the Oracle...
          </p>
          <div className="mx-auto flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-1 w-1 rounded-full bg-white/30"
                style={{
                  animation: `pulse-subtle 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleStart = useCallback(() => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback(
    (answer: Answer) => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentQuestion + 1 >= questions.length) {
        setScreen("revealing");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    },
    [answers, currentQuestion],
  );

  // Transition from revealing -> result after a beat
  useEffect(() => {
    if (screen !== "revealing") return;
    const timer = setTimeout(() => setScreen("result"), 1800);
    return () => clearTimeout(timer);
  }, [screen]);

  const handleRestart = useCallback(() => {
    setScreen("start");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  const resultGodId = screen === "result" ? calculateResult(answers) : null;

  return (
    <main className="mx-auto min-h-[100dvh] max-w-lg">
      {screen === "start" && <StartScreen onStart={handleStart} />}
      {screen === "quiz" && (
        <QuestionCard
          key={currentQuestion}
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {screen === "revealing" && <RevealingScreen />}
      {screen === "result" && resultGodId && (
        <ResultScreen god={gods[resultGodId]} onRestart={handleRestart} />
      )}
    </main>
  );
}
