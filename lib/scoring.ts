import type { GodId } from "./gods";
import type { Answer } from "./questions";

export function calculateResult(answers: Answer[]): GodId {
  const scores: Record<string, number> = {};

  for (const answer of answers) {
    for (const [godId, score] of Object.entries(answer.scores)) {
      scores[godId] = (scores[godId] || 0) + score;
    }
  }

  let maxGod: GodId = "zeus";
  let maxScore = 0;

  for (const [godId, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxGod = godId as GodId;
    }
  }

  return maxGod;
}
