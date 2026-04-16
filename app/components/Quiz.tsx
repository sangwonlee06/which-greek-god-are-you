"use client";

import { useState, useCallback } from "react";
import { questions, type Answer } from "@/lib/questions";
import { gods } from "@/lib/gods";
import { calculateResult } from "@/lib/scoring";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";

type Screen = "start" | "quiz" | "result";

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
        setScreen("result");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    },
    [answers, currentQuestion],
  );

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
      {screen === "result" && resultGodId && (
        <ResultScreen god={gods[resultGodId]} onRestart={handleRestart} />
      )}
    </main>
  );
}
