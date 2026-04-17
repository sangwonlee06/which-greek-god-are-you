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
    question: "You walk into a party where you know nobody.",
    answers: [
      {
        text: "Perfect. The room usually figures me out fast.",
        scores: { zeus: 3, aphrodite: 1 },
      },
      {
        text: "I find one smart person and lock in.",
        scores: { athena: 3, apollo: 1 },
      },
      {
        text: "I already found the kitchen, playlist, and best story.",
        scores: { dionysus: 3, hermes: 1 },
      },
      {
        text: "I vanish to the balcony and somehow prefer it there.",
        scores: { artemis: 2, hades: 2 },
      },
    ],
  },
  {
    question: "Pick a power.",
    answers: [
      {
        text: "Command the sky. Obviously.",
        scores: { zeus: 3, poseidon: 1 },
      },
      {
        text: "Read motives, not just minds.",
        scores: { athena: 3, hera: 1 },
      },
      {
        text: "Teleport with zero explanation.",
        scores: { hermes: 3, artemis: 1 },
      },
      {
        text: "Make people feel seen the second I look at them.",
        scores: { aphrodite: 3, hera: 1 },
      },
    ],
  },
  {
    question: "Your friend is spiraling. You...",
    answers: [
      {
        text: "Send a plan with bullet points and next steps.",
        scores: { athena: 3, hephaestus: 1 },
      },
      {
        text: "Show up, stay calm, say little, mean a lot.",
        scores: { hades: 3, demeter: 1 },
      },
      {
        text: "Get them out of the house immediately.",
        scores: { dionysus: 3, hermes: 1 },
      },
      {
        text: "Find the problem and deal with it directly.",
        scores: { ares: 3, hera: 1 },
      },
    ],
  },
  {
    question: "Your ideal space is...",
    answers: [
      {
        text: "Penthouse energy. Light, air, perspective.",
        scores: { zeus: 2, apollo: 2 },
      },
      {
        text: "Somewhere green, quiet, and hard to find.",
        scores: { artemis: 3, demeter: 1 },
      },
      {
        text: "By the water. I need movement around me.",
        scores: { poseidon: 3, aphrodite: 1 },
      },
      {
        text: "Warm lighting, good textures, and one locked door.",
        scores: { hades: 2, hephaestus: 2 },
      },
    ],
  },
  {
    question: "Your worst trait, respectfully?",
    answers: [
      {
        text: "I do think I should be in charge.",
        scores: { zeus: 3, hera: 1 },
      },
      {
        text: "I overanalyze until the moment is gone.",
        scores: { athena: 3, hades: 1 },
      },
      {
        text: "Impulse control is more of a suggestion.",
        scores: { ares: 2, dionysus: 2 },
      },
      {
        text: "I disappear when I need space.",
        scores: { artemis: 2, hermes: 2 },
      },
    ],
  },
  {
    question: "Sunday with no plans.",
    answers: [
      {
        text: "Making something pretty for no reason.",
        scores: { apollo: 2, aphrodite: 2 },
      },
      {
        text: "Cooking, hosting, feeding people.",
        scores: { demeter: 3, hera: 1 },
      },
      {
        text: "A long walk with my phone on do not disturb.",
        scores: { artemis: 3, poseidon: 1 },
      },
      {
        text: "A project I forgot to stop thinking about.",
        scores: { hephaestus: 3, athena: 1 },
      },
    ],
  },
  {
    question: "People compliment your...",
    answers: [
      {
        text: "Presence. It lands before I do.",
        scores: { zeus: 2, hera: 2 },
      },
      {
        text: "Taste. It is edited within an inch of its life.",
        scores: { aphrodite: 2, apollo: 2 },
      },
      {
        text: "Loyalty. I do not play about my people.",
        scores: { demeter: 2, hades: 2 },
      },
      {
        text: "Brain. Which is flattering and slightly annoying.",
        scores: { athena: 3, hermes: 1 },
      },
    ],
  },
  {
    question: "Locked door. Nobody knows what's behind it.",
    answers: [
      {
        text: "I already opened it.",
        scores: { ares: 3, zeus: 1 },
      },
      {
        text: "I need ten seconds to read the room first.",
        scores: { athena: 3, hera: 1 },
      },
      {
        text: "I can pick that lock. Allegedly.",
        scores: { hermes: 3, hephaestus: 1 },
      },
      {
        text: "Not everything hidden is meant for me.",
        scores: { hades: 3, artemis: 1 },
      },
    ],
  },
  {
    question: "Your love story is...",
    answers: [
      {
        text: "Magnetic and a little dangerous.",
        scores: { aphrodite: 3, ares: 1 },
      },
      {
        text: "Slow, private, and impossible to fake.",
        scores: { hades: 3, hera: 1 },
      },
      {
        text: "Best-friends-first with elite banter.",
        scores: { hermes: 2, athena: 2 },
      },
      {
        text: "Steady, warm, and built to last.",
        scores: { demeter: 2, hephaestus: 2 },
      },
    ],
  },
  {
    question: "Pick the line that sounds like you.",
    answers: [
      {
        text: "Fear is just bad branding.",
        scores: { ares: 2, zeus: 2 },
      },
      {
        text: "There is always a pattern.",
        scores: { athena: 3, apollo: 1 },
      },
      {
        text: "Beauty matters more than people admit.",
        scores: { aphrodite: 2, apollo: 2 },
      },
      {
        text: "Freedom first. Then we talk.",
        scores: { artemis: 3, hermes: 1 },
      },
    ],
  },
  {
    question: "In group projects, you are the...",
    answers: [
      {
        text: "Leader, even if nobody said it out loud.",
        scores: { zeus: 3, hera: 1 },
      },
      {
        text: "Strategist with the actual good ideas.",
        scores: { athena: 3, apollo: 1 },
      },
      {
        text: "Closer who somehow saves the deadline.",
        scores: { hermes: 2, ares: 2 },
      },
      {
        text: "Builder doing the real work in silence.",
        scores: { hephaestus: 3, demeter: 1 },
      },
    ],
  },
  {
    question: "Your text reply speed is...",
    answers: [
      {
        text: "Immediate. I saw it and chose chaos.",
        scores: { hermes: 3, dionysus: 1 },
      },
      {
        text: "Thoughtful. I am drafting in my head first.",
        scores: { athena: 2, hera: 2 },
      },
      {
        text: "Late, but emotionally accurate.",
        scores: { hades: 2, apollo: 2 },
      },
      {
        text: "Depends. Were you respectful?",
        scores: { ares: 2, artemis: 2 },
      },
    ],
  },
  {
    question: "What kind of power actually tempts you?",
    answers: [
      {
        text: "Influence.",
        scores: { zeus: 2, hera: 2 },
      },
      {
        text: "Knowledge.",
        scores: { athena: 3, hades: 1 },
      },
      {
        text: "Desire.",
        scores: { aphrodite: 3, dionysus: 1 },
      },
      {
        text: "Mastery.",
        scores: { hephaestus: 2, apollo: 2 },
      },
    ],
  },
  {
    question: "Your room usually looks like...",
    answers: [
      {
        text: "Curated. I notice everything.",
        scores: { aphrodite: 2, hera: 2 },
      },
      {
        text: "A creative crime scene.",
        scores: { apollo: 2, dionysus: 2 },
      },
      {
        text: "Minimal, practical, no notes.",
        scores: { artemis: 2, hephaestus: 2 },
      },
      {
        text: "Clean enough. My mind is the messier place.",
        scores: { athena: 2, poseidon: 2 },
      },
    ],
  },
  {
    question: "What are you most protective of?",
    answers: [
      {
        text: "My reputation.",
        scores: { hera: 3, zeus: 1 },
      },
      {
        text: "My peace.",
        scores: { artemis: 2, hades: 2 },
      },
      {
        text: "My people.",
        scores: { demeter: 3, ares: 1 },
      },
      {
        text: "My work.",
        scores: { hephaestus: 3, apollo: 1 },
      },
    ],
  },
  {
    question: "A perfect first date is...",
    answers: [
      {
        text: "Somewhere beautiful enough to post, maybe not post.",
        scores: { aphrodite: 3, apollo: 1 },
      },
      {
        text: "A concert, rooftop, or something that goes late.",
        scores: { dionysus: 2, hermes: 2 },
      },
      {
        text: "A museum, bookstore, or actually good conversation.",
        scores: { athena: 3, hades: 1 },
      },
      {
        text: "Somewhere low-key where nobody bothers us.",
        scores: { artemis: 2, demeter: 2 },
      },
    ],
  },
  {
    question: "Your biggest flex is...",
    answers: [
      {
        text: "I stay calm when everyone else loses it.",
        scores: { hera: 2, hades: 2 },
      },
      {
        text: "I can make anything feel exciting.",
        scores: { dionysus: 3, hermes: 1 },
      },
      {
        text: "I know what to do before most people do.",
        scores: { athena: 2, zeus: 2 },
      },
      {
        text: "I can build the thing, not just talk about it.",
        scores: { hephaestus: 3, ares: 1 },
      },
    ],
  },
  {
    question: "Which energy do you bring most?",
    answers: [
      {
        text: "Main character, but composed.",
        scores: { hera: 2, zeus: 2 },
      },
      {
        text: "Quiet intensity.",
        scores: { hades: 3, poseidon: 1 },
      },
      {
        text: "Sunlight with standards.",
        scores: { apollo: 3, aphrodite: 1 },
      },
      {
        text: "Do not test me, but in a fun way.",
        scores: { ares: 2, artemis: 2 },
      },
    ],
  },
  {
    question: "You are most likely to win people over with...",
    answers: [
      {
        text: "Charm.",
        scores: { aphrodite: 3, hermes: 1 },
      },
      {
        text: "Competence.",
        scores: { athena: 2, hephaestus: 2 },
      },
      {
        text: "Warmth.",
        scores: { demeter: 3, apollo: 1 },
      },
      {
        text: "Authority.",
        scores: { zeus: 2, hera: 2 },
      },
    ],
  },
  {
    question: "Pick your ending.",
    answers: [
      {
        text: "Crowned, admired, unforgettable.",
        scores: { zeus: 2, hera: 2 },
      },
      {
        text: "Free, wild, and nowhere easy to reach.",
        scores: { artemis: 3, poseidon: 1 },
      },
      {
        text: "Loved deeply by the right people.",
        scores: { demeter: 2, hades: 2 },
      },
      {
        text: "Respected for what I made of myself.",
        scores: { hephaestus: 3, apollo: 1 },
      },
    ],
  },
];