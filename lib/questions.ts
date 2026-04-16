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
    question: "You walk into a party where you know no one. What do you do?",
    answers: [
      {
        text: "Command the room — people naturally gravitate toward me",
        scores: { zeus: 3, ares: 1 },
      },
      {
        text: "Find the most interesting person and have a deep conversation",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "Hit the dance floor and make it a night to remember",
        scores: { dionysus: 3, aphrodite: 1 },
      },
      {
        text: "Work the room — I'll know everyone's name by midnight",
        scores: { hermes: 3, aphrodite: 1 },
      },
    ],
  },
  {
    question: "Pick a superpower:",
    answers: [
      {
        text: "Read minds",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "Control the elements",
        scores: { zeus: 2, poseidon: 2 },
      },
      {
        text: "Teleportation",
        scores: { hermes: 3, artemis: 1 },
      },
      {
        text: "Make anyone fall in love with you",
        scores: { aphrodite: 3, dionysus: 1 },
      },
    ],
  },
  {
    question: "Your friend is going through a tough time. How do you help?",
    answers: [
      {
        text: "Give them a concrete plan to fix it",
        scores: { athena: 3, zeus: 1 },
      },
      {
        text: "Sit with them in silence — just being there is enough",
        scores: { hades: 3, poseidon: 1 },
      },
      {
        text: "Take them out for an unforgettable distraction",
        scores: { dionysus: 2, hermes: 2 },
      },
      {
        text: "Fight whoever caused the problem",
        scores: { ares: 3, artemis: 1 },
      },
    ],
  },
  {
    question: "Which setting feels most like home?",
    answers: [
      {
        text: "A mountaintop overlooking everything",
        scores: { zeus: 2, apollo: 2 },
      },
      {
        text: "Deep in a forest, off the grid",
        scores: { artemis: 3, hades: 1 },
      },
      {
        text: "A buzzing city at night",
        scores: { hermes: 2, dionysus: 2 },
      },
      {
        text: "By the ocean at sunset",
        scores: { poseidon: 2, aphrodite: 2 },
      },
    ],
  },
  {
    question: "What's your biggest flaw?",
    answers: [
      {
        text: "I can be controlling",
        scores: { zeus: 3, ares: 1 },
      },
      {
        text: "I overthink everything",
        scores: { athena: 2, hades: 2 },
      },
      {
        text: "I'm too impulsive",
        scores: { ares: 2, dionysus: 2 },
      },
      {
        text: "I avoid commitment",
        scores: { hermes: 2, artemis: 2 },
      },
    ],
  },
  {
    question: "Pick a way to spend a Sunday:",
    answers: [
      {
        text: "Creating something — music, art, writing",
        scores: { apollo: 3, aphrodite: 1 },
      },
      {
        text: "A long solo hike in nature",
        scores: { artemis: 2, poseidon: 2 },
      },
      {
        text: "Brunch with friends that turns into an all-day thing",
        scores: { dionysus: 3, hermes: 1 },
      },
      {
        text: "Reading, journaling, going deep into my own thoughts",
        scores: { hades: 2, athena: 2 },
      },
    ],
  },
  {
    question: "What do people admire most about you?",
    answers: [
      {
        text: "My confidence",
        scores: { zeus: 2, ares: 2 },
      },
      {
        text: "My creativity",
        scores: { apollo: 3, aphrodite: 1 },
      },
      {
        text: "My loyalty",
        scores: { hades: 2, artemis: 2 },
      },
      {
        text: "My energy",
        scores: { dionysus: 2, hermes: 2 },
      },
    ],
  },
  {
    question: "You find a mysterious door. What do you do?",
    answers: [
      {
        text: "Kick it open — no hesitation",
        scores: { ares: 3, zeus: 1 },
      },
      {
        text: "Study it carefully before deciding",
        scores: { athena: 3, hades: 1 },
      },
      {
        text: "Pick the lock — I love a puzzle",
        scores: { hermes: 3, apollo: 1 },
      },
      {
        text: "Walk away — I choose my own adventures",
        scores: { artemis: 2, poseidon: 2 },
      },
    ],
  },
  {
    question: "What kind of love story is yours?",
    answers: [
      {
        text: "Epic and passionate — the kind they write myths about",
        scores: { aphrodite: 3, ares: 1 },
      },
      {
        text: "Slow burn — deep, quiet, and unshakable",
        scores: { hades: 3, poseidon: 1 },
      },
      {
        text: "Adventurous — we'd explore the world together",
        scores: { artemis: 2, hermes: 2 },
      },
      {
        text: "Creative — we'd inspire each other endlessly",
        scores: { apollo: 2, aphrodite: 2 },
      },
    ],
  },
  {
    question: "Choose a quote that resonates:",
    answers: [
      {
        text: '"The only way to deal with fear is to face it head-on"',
        scores: { ares: 2, zeus: 2 },
      },
      {
        text: '"In the middle of difficulty lies opportunity"',
        scores: { athena: 2, hermes: 2 },
      },
      {
        text: '"The earth has music for those who listen"',
        scores: { apollo: 2, poseidon: 2 },
      },
      {
        text: '"Not all who wander are lost"',
        scores: { artemis: 2, dionysus: 2 },
      },
    ],
  },
];
