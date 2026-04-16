export type GodId =
  | "zeus"
  | "athena"
  | "poseidon"
  | "aphrodite"
  | "apollo"
  | "artemis"
  | "ares"
  | "hermes"
  | "hades"
  | "dionysus";

export interface God {
  id: GodId;
  name: string;
  emoji: string;
  title: string;
  description: string;
  caption: string;
  color: string;
  gradient: string;
}

export const gods: Record<GodId, God> = {
  zeus: {
    id: "zeus",
    name: "Zeus",
    emoji: "⚡",
    title: "King of the Gods",
    description:
      "You're a natural-born leader with an electrifying presence. People look to you in times of chaos because you radiate authority and confidence. You think big, act decisively, and aren't afraid to take charge — even when the stakes are sky-high.",
    caption: "I got Zeus ⚡ The universe bends to my will.",
    color: "#6366f1",
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
  },
  athena: {
    id: "athena",
    name: "Athena",
    emoji: "🦉",
    title: "Goddess of Wisdom & Strategy",
    description:
      "Your mind is your superpower. You approach every situation with clarity, logic, and a plan three steps ahead. You value justice, think before you speak, and somehow always end up being the smartest person in the room — without trying.",
    caption: "I got Athena 🦉 Strategy over chaos, always.",
    color: "#0ea5e9",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
  },
  poseidon: {
    id: "poseidon",
    name: "Poseidon",
    emoji: "🌊",
    title: "God of the Sea",
    description:
      "You feel everything deeply and aren't afraid to ride the waves of emotion. Powerful yet fluid, you adapt to every situation while staying true to your core. You're drawn to vastness — big ideas, open spaces, and the unknown.",
    caption: "I got Poseidon 🌊 Deep waters run through my soul.",
    color: "#0d9488",
    gradient: "from-teal-500 via-emerald-500 to-cyan-600",
  },
  aphrodite: {
    id: "aphrodite",
    name: "Aphrodite",
    emoji: "🌹",
    title: "Goddess of Love & Beauty",
    description:
      "You move through the world with magnetic charm and effortless grace. You value connection, beauty, and the art of making people feel seen. Your warmth is disarming, your taste is impeccable, and your heart? Absolutely fearless.",
    caption: "I got Aphrodite 🌹 Love is my superpower.",
    color: "#ec4899",
    gradient: "from-pink-500 via-rose-500 to-fuchsia-500",
  },
  apollo: {
    id: "apollo",
    name: "Apollo",
    emoji: "☀️",
    title: "God of Light, Music & Art",
    description:
      "You're a creative force of nature — radiant, expressive, and endlessly inspired. Whether it's music, words, or ideas, you have a gift for bringing light to the world. You chase truth and beauty in equal measure.",
    caption: "I got Apollo ☀️ Born to create, destined to shine.",
    color: "#f59e0b",
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
  },
  artemis: {
    id: "artemis",
    name: "Artemis",
    emoji: "🏹",
    title: "Goddess of the Hunt & Wild",
    description:
      "Fiercely independent and unapologetically wild. You trust your instincts, protect those you love, and feel most alive when you're charting your own path. The forest is your cathedral and freedom is your religion.",
    caption: "I got Artemis 🏹 Wild heart, sharp aim, no apologies.",
    color: "#22c55e",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
  },
  ares: {
    id: "ares",
    name: "Ares",
    emoji: "🔥",
    title: "God of War & Courage",
    description:
      "You live with intensity and never back down from a fight worth having. Passionate, direct, and fearless, you charge headfirst into life. Your courage inspires others — even if it occasionally terrifies them.",
    caption: "I got Ares 🔥 All heart, all fire, no retreat.",
    color: "#ef4444",
    gradient: "from-red-500 via-orange-600 to-rose-600",
  },
  hermes: {
    id: "hermes",
    name: "Hermes",
    emoji: "🪽",
    title: "God of Speed & Wit",
    description:
      "Quick-witted, silver-tongued, and always two steps ahead. You're the connector — the one who moves between worlds effortlessly, turning strangers into friends and chaos into opportunity. Life's a game and you're winning.",
    caption: "I got Hermes 🪽 Fast mind, faster mouth, fastest feet.",
    color: "#8b5cf6",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
  hades: {
    id: "hades",
    name: "Hades",
    emoji: "💀",
    title: "God of the Underworld",
    description:
      "There's a quiet power in your depth. You see what others miss, value loyalty above all else, and aren't afraid of the dark — literally or metaphorically. Misunderstood by many, cherished by the few who truly know you.",
    caption: "I got Hades 💀 Still waters, infinite depth.",
    color: "#64748b",
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
  },
  dionysus: {
    id: "dionysus",
    name: "Dionysus",
    emoji: "🍇",
    title: "God of Wine & Celebration",
    description:
      "You are the party, the vibe, the main character energy. You live for joy, connection, and the beautiful chaos of being alive. You remind everyone around you that life is meant to be savored, not survived.",
    caption: "I got Dionysus 🍇 Life's a feast and I'm at the head of the table.",
    color: "#a855f7",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
};
