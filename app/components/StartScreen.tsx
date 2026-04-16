"use client";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[15%] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-amber-500/[0.07] blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-violet-500/[0.05] blur-[80px]" />
        <div className="absolute bottom-[30%] right-[15%] h-[160px] w-[160px] rounded-full bg-rose-500/[0.04] blur-[70px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-10">
        {/* Icon */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="animate-float text-7xl sm:text-8xl">🏛️</div>
        </div>

        {/* Title */}
        <div
          className="animate-fade-in space-y-4"
          style={{ animationDelay: "0.25s" }}
        >
          <h1 className="text-[2.75rem] leading-[1.05] font-black tracking-tight sm:text-6xl">
            <span className="animate-shimmer bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
              Which Greek God
            </span>
            <br />
            <span className="text-white/90">Are You?</span>
          </h1>
          <p className="mx-auto max-w-[260px] text-[15px] leading-relaxed text-white/40">
            10 questions. One divine answer.
            <br />
            Discover your Olympian identity.
          </p>
        </div>

        {/* CTA */}
        <div
          className="animate-fade-in flex flex-col items-center gap-5"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={onStart}
            className="animate-pulse-glow group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 px-10 py-4 text-[17px] font-bold text-gray-900 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin the Oracle
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>

          <span className="text-[13px] tracking-wide text-white/25">
            Takes about 1 minute
          </span>
        </div>
      </div>
    </div>
  );
}
