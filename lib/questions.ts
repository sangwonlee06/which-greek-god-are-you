import type { GodId } from "./gods";

export interface Answer {
  text: string;
  scores: Partial<Record<GodId, number>>;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    question: "You show up to a party where you know nobody.",
    answers: [
      {
        text: "Own the room. People find me.",
        scores: { zeus: 3, ares: 1 },
      },
      {
        text: "Find the one interesting person and go deep",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "I am the party now",
        scores: { dionysus: 3, aphrodite: 1 },
      },
      {
        text: "Know everyone's name by midnight",
        scores: { hermes: 3, aphrodite: 1 },
      },
    ],
  },
  {
    question: "One superpower. Choose wisely.",
    answers: [
      {
        text: "Read every mind in the room",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "Control the weather, the oceans, the whole sky",
        scores: { zeus: 2, poseidon: 2 },
      },
      {
        text: "Teleport anywhere, no questions asked",
        scores: { hermes: 3, artemis: 1 },
      },
      {
        text: "Make anyone fall for me on the spot",
        scores: { aphrodite: 3, dionysus: 1 },
      },
    ],
  },
  {
    question: "Your best friend is going through it. You...",
    answers: [
      {
        text: "Send them a plan. With steps.",
        scores: { athena: 3, zeus: 1 },
      },
      {
        text: "Show up and just sit there with them",
        scores: { hades: 3, poseidon: 1 },
      },
      {
        text: "Drag them out for the best night of their life",
        scores: { dionysus: 2, hermes: 2 },
      },
      {
        text: "Find whoever caused it and handle it",
        scores: { ares: 3, artemis: 1 },
      },
    ],
  },
  {
    question: "Where does your soul actually live?",
    answers: [
      {
        text: "Somewhere high with a view of everything",
        scores: { zeus: 2, apollo: 2 },
      },
      {
        text: "Deep in a forest, no signal",
        scores: { artemis: 3, hades: 1 },
      },
      {
        text: "A city that never turns off",
        scores: { hermes: 2, dionysus: 2 },
      },
      {
        text: "Near water. Always near water.",
        scores: { poseidon: 2, aphrodite: 2 },
      },
    ],
  },
  {
    question: "Your worst trait. Be honest.",
    answers: [
      {
        text: "I need to run things",
        scores: { zeus: 3, ares: 1 },
      },
      {
        text: "I overthink until my brain hurts",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "Zero impulse control",
        scores: { ares: 2, dionysus: 2 },
      },
      {
        text: "I ghost when it gets serious",
        scores: { hermes: 2, artemis: 2 },
      },
    ],
  },
  {
    question: "Sunday. No plans. What happens?",
    answers: [
      {
        text: "Making something. Music, art, words.",
        scores: { apollo: 3, aphrodite: 1 },
      },
      {
        text: "Solo hike. Phone off.",
        scores: { artemis: 2, poseidon: 2 },
      },
      {
        text: "Brunch that somehow turns into dinner",
        scores: { dionysus: 3, hermes: 1 },
      },
      {
        text: "Just me, my thoughts, and total silence",
        scores: { hades: 2, athena: 2 },
      },
    ],
  },
  {
    question: "People always say they love your...",
    answers: [
      {
        text: "Presence. I walk in and it shifts.",
        scores: { zeus: 2, ares: 2 },
      },
      {
        text: "Taste. In literally everything.",
        scores: { apollo: 3, aphrodite: 1 },
      },
      {
        text: "Loyalty. Ride or die, always.",
        scores: { hades: 2, artemis: 2 },
      },
      {
        text: "Energy. Everything's better when I'm there.",
        scores: { dionysus: 2, hermes: 2 },
      },
    ],
  },
  {
    question: "Locked door. Nobody knows what's behind it.",
    answers: [
      {
        text: "Already kicked it open",
        scores: { ares: 3, zeus: 1 },
      },
      {
        text: "Studying every detail before I touch it",
        scores: { athena: 3, hades: 1 },
      },
      {
        text: "Picking the lock while humming",
        scores: { hermes: 3, apollo: 1 },
      },
      {
        text: "Not my door, not my story",
        scores: { artemis: 2, poseidon: 2 },
      },
    ],
  },
  {
    question: "Your love story is...",
    answers: [
      {
        text: "Intense. The kind people can't stop watching.",
        scores: { aphrodite: 3, ares: 1 },
      },
      {
        text: "Slow burn. Deep roots. Unshakable.",
        scores: { hades: 3, poseidon: 1 },
      },
      {
        text: "An adventure with no fixed destination",
        scores: { artemis: 2, hermes: 2 },
      },
      {
        text: "Two people who make each other sharper",
        scores: { apollo: 2, aphrodite: 2 },
      },
    ],
  },
  {
    question: "Pick the line that lives in your head:",
    answers: [
      {
        text: "Fear is just a dare I haven't taken yet",
        scores: { ares: 2, zeus: 2 },
      },
      {
        text: "Every problem has a pattern if you look hard enough",
        scores: { athena: 2, hermes: 2 },
      },
      {
        text: "If you listen closely, everything is music",
        scores: { apollo: 2, poseidon: 2 },
      },
      {
        text: "I'd rather be lost than stuck in one place",
        scores: { artemis: 2, dionysus: 2 },
      },
    ],
  },
];
