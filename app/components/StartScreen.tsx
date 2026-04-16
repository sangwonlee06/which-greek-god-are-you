"use client";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in space-y-8">
        <div className="space-y-3">
          <div className="text-6xl">🏛️</div>
          <h1 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
            Which Greek God
            <br />
            Are You?
          </h1>
          <p className="mx-auto max-w-xs text-base text-white/60">
            Answer 10 questions to discover your divine identity
          </p>
        </div>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-lg shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/30 active:scale-95"
        >
          Discover Your God
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>

        <p className="text-xs text-white/30">Takes less than 2 minutes</p>
      </div>
    </div>
  );
}
