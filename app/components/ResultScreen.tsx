"use client";

import { useState } from "react";
import type { God } from "@/lib/gods";

interface ResultScreenProps {
  god: God;
  onRestart: () => void;
}

export default function ResultScreen({ god, onRestart }: ResultScreenProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${god.caption}\n\nFind your Greek god: ${typeof window !== "undefined" ? window.location.href : ""}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm ${god.name}! Which Greek God Are You?`,
          text: god.caption,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden px-6 pb-12 pt-16 text-center">
      {/* Background glow — god-colored */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[12%] h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: god.color, opacity: 0.1 }}
        />
        <div
          className="absolute bottom-[10%] left-1/2 h-[250px] w-[300px] -translate-x-1/2 rounded-full blur-[100px]"
          style={{ backgroundColor: god.color, opacity: 0.06 }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-1 flex-col items-center">
        {/* ── Emoji with glow ring ── */}
        <div className="animate-bounce-in relative mb-6">
          <div
            className="animate-glow-ring absolute inset-0 -m-6 rounded-full"
            style={{
              background: `radial-gradient(circle, ${god.color}33 0%, transparent 70%)`,
            }}
          />
          <span className="relative block text-8xl sm:text-9xl">
            {god.emoji}
          </span>
        </div>

        {/* ── Label ── */}
        <p
          className="animate-fade-in mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/35"
          style={{ animationDelay: "0.3s" }}
        >
          You are
        </p>

        {/* ── God name ── */}
        <h1
          className="animate-reveal-up mb-1"
          style={{ animationDelay: "0.35s" }}
        >
          <span
            className={`bg-gradient-to-r ${god.gradient} bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl`}
          >
            {god.name}
          </span>
        </h1>

        {/* ── Title ── */}
        <p
          className="animate-fade-in mb-8 text-[15px] font-medium text-white/40"
          style={{ animationDelay: "0.5s" }}
        >
          {god.title}
        </p>

        {/* ── Description card ── */}
        <div
          className="animate-reveal-up glass-strong mb-6 w-full rounded-3xl p-6"
          style={{ animationDelay: "0.55s" }}
        >
          <p className="text-[15px] leading-relaxed text-white/65">
            {god.description}
          </p>
        </div>

        {/* ── Caption pill ── */}
        <div
          className="animate-fade-in glass mb-8 w-full rounded-2xl px-5 py-3.5"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="text-[14px] italic leading-snug text-white/50">
            &ldquo;{god.caption}&rdquo;
          </p>
        </div>

        {/* ── Actions ── */}
        <div
          className="animate-fade-in mt-auto flex w-full flex-col gap-3"
          style={{ animationDelay: "0.85s" }}
        >
          {/* Primary share */}
          <button
            onClick={handleShare}
            className="group relative w-full overflow-hidden rounded-full py-4 text-[16px] font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.97]"
            style={{
              background: `linear-gradient(135deg, ${god.color}, ${god.color}cc)`,
              boxShadow: `0 8px 32px ${god.color}33`,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              Share My Result
            </span>
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="glass-strong w-full rounded-full py-3.5 text-[15px] font-semibold text-white/70 transition-all duration-300 hover:bg-white/[0.1] hover:text-white/90 active:scale-[0.97]"
          >
            {copied ? (
              <span className="flex items-center justify-center gap-1.5">
                <svg
                  className="h-4 w-4 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Copied!
              </span>
            ) : (
              "Copy Caption & Link"
            )}
          </button>

          {/* Restart */}
          <button
            onClick={onRestart}
            className="mt-1 py-2 text-[13px] font-medium text-white/25 transition-colors duration-300 hover:text-white/50"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
