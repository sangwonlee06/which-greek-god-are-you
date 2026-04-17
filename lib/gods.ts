export type GodId =
    | "zeus"
    | "athena"
    | "poseidon"
    | "aphrodite"
    | "apollo"
    | "ares"
    | "artemis"
    | "dionysus"
    | "hermes"
    | "hades"
    | "hera"
    | "demeter"
    | "hephaestus";

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
        "You have presence. The kind that shifts a room before you even say a word. You think big, move fast, and rarely wait for permission. People look to you when things get messy because leadership comes naturally to you, even when you pretend it does not.",
    caption: "I got Zeus ⚡ Power looks good on me.",
    color: "#6366f1",
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
  },
  athena: {
    id: "athena",
    name: "Athena",
    emoji: "🦉",
    title: "Goddess of Wisdom & Strategy",
    description:
        "Your brain is the main event. You read the room, spot the pattern, and usually know the move before anyone else does. Sharp, composed, and impossible to outthink for long, you are the person people trust when vibes alone are not enough.",
    caption: "I got Athena 🦉 Smart is the flex.",
    color: "#0ea5e9",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
  },
  poseidon: {
    id: "poseidon",
    name: "Poseidon",
    emoji: "🌊",
    title: "God of the Sea",
    description:
        "You feel things fully. Quietly sometimes, dramatically other times, but never halfway. You are powerful, intuitive, and hard to pin down. There is depth to you, movement to you, and a sense that you belong near open water, open skies, and big unknowns.",
    caption: "I got Poseidon 🌊 Deep feelings, strong tide.",
    color: "#0d9488",
    gradient: "from-teal-500 via-emerald-500 to-cyan-600",
  },
  aphrodite: {
    id: "aphrodite",
    name: "Aphrodite",
    emoji: "🌹",
    title: "Goddess of Love & Beauty",
    description:
        "You are magnetic without forcing it. People remember how you made them feel, and your taste speaks before you do. Warm, alluring, and deeply tuned in to beauty, connection, and chemistry, you know that softness can be a kind of power.",
    caption: "I got Aphrodite 🌹 Face card and emotional range.",
    color: "#ec4899",
    gradient: "from-pink-500 via-rose-500 to-fuchsia-500",
  },
  apollo: {
    id: "apollo",
    name: "Apollo",
    emoji: "☀️",
    title: "God of Light, Music & Art",
    description:
        "You are bright in every sense. Creative, expressive, and a little impossible to ignore, you bring style, talent, and meaning into whatever you touch. You chase beauty, but not superficially. You want what is true, what is moving, what actually hits.",
    caption: "I got Apollo ☀️ Taste, talent, and a little glow.",
    color: "#f59e0b",
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
  },
  artemis: {
    id: "artemis",
    name: "Artemis",
    emoji: "🏹",
    title: "Goddess of the Hunt & Wild",
    description:
        "Freedom matters to you more than approval ever could. You trust your instincts, protect your peace, and do your best thinking far away from noise. Independent, sharp, and impossible to corner, you were never meant to be easy to contain.",
    caption: "I got Artemis 🏹 Private, wild, and not for everyone.",
    color: "#22c55e",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
  },
  ares: {
    id: "ares",
    name: "Ares",
    emoji: "🔥",
    title: "God of War & Courage",
    description:
        "You are intensity with a pulse. Bold, passionate, and not exactly built for half-measures, you go straight at what matters. You say what you mean, protect what you love, and bring enough fire to make other people either nervous or loyal. Usually both.",
    caption: "I got Ares 🔥 Zero fear. Full send.",
    color: "#ef4444",
    gradient: "from-red-500 via-orange-600 to-rose-600",
  },
  hermes: {
    id: "hermes",
    name: "Hermes",
    emoji: "🪽",
    title: "God of Speed & Wit",
    description:
        "Your mind moves fast and your mouth usually keeps up. You are clever, adaptable, and weirdly good at slipping between worlds, groups, and moods without losing yourself. Charming when you want to be, elusive when you need to be, and never boring for a second.",
    caption: "I got Hermes 🪽 Quick brain, quicker exit.",
    color: "#8b5cf6",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
  hades: {
    id: "hades",
    name: "Hades",
    emoji: "💀",
    title: "God of the Underworld",
    description:
        "You are private, intense, and far deeper than people expect at first glance. You do not waste energy on everyone, but the people you choose matter for real. There is something calm and unshakable about you. Mysterious, yes, but never empty. Just selective.",
    caption: "I got Hades 💀 Low visibility, high depth.",
    color: "#64748b",
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
  },
  dionysus: {
    id: "dionysus",
    name: "Dionysus",
    emoji: "🍇",
    title: "God of Wine & Celebration",
    description:
        "You know life is meant to be lived, not just managed. You bring joy, spontaneity, and a little beautiful chaos wherever you go. Fun is not shallow to you. It is a philosophy. You make people feel more alive, more open, and slightly more likely to text back something reckless.",
    caption: "I got Dionysus 🍇 The vibe is the agenda.",
    color: "#a855f7",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  hera: {
    id: "hera",
    name: "Hera",
    emoji: "👑",
    title: "Queen of the Gods",
    description:
        "You are composed, powerful, and very aware of your worth. You move with standards, not noise. People read your energy immediately, and it tends to say the same thing every time: act right. Elegant, loyal, and impossible to overlook, you were built for main-character poise, not chaos.",
    caption: "I got Hera 👑 Grace, standards, and a little menace.",
    color: "#7c3aed",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
  },
  demeter: {
    id: "demeter",
    name: "Demeter",
    emoji: "🌾",
    title: "Goddess of the Harvest",
    description:
        "You are warmth with backbone. You take care of people, remember what they need, and make things feel steadier just by being there. Grounded, generous, and quietly strong, you are the kind of person others trust when life gets fragile.",
    caption: "I got Demeter 🌾 Soft heart. Strong roots.",
    color: "#65a30d",
    gradient: "from-lime-500 via-green-500 to-emerald-600",
  },
  hephaestus: {
    id: "hephaestus",
    name: "Hephaestus",
    emoji: "⚒️",
    title: "God of Fire & Craft",
    description:
        "You are a builder. Not just of things, but of systems, skills, and entire versions of yourself. Quietly brilliant and deeply focused, you care more about substance than performance. While other people talk, you make. And somehow, it always ends up speaking for itself.",
    caption: "I got Hephaestus ⚒️ Built, not borrowed.",
    color: "#f97316",
    gradient: "from-orange-500 via-amber-600 to-red-500",
  },
};