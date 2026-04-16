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
      // Fallback for older browsers
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
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-12 pt-8 text-center">
      <div className="animate-fade-in w-full max-w-sm space-y-6">
        {/* God Emoji & Name */}
        <div className="space-y-4">
          <div className="animate-bounce-in text-7xl">{god.emoji}</div>
          <div>
            <p className="mb-1 text-sm font-medium uppercase tracking-widest text-white/40">
              You are
            </p>
            <h1
              className={`bg-gradient-to-r ${god.gradient} bg-clip-text text-5xl font-black text-transparent sm:text-6xl`}
            >
              {god.name}
            </h1>
            <p className="mt-1 text-base font-medium text-white/50">
              {god.title}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-white/70">
          {god.description}
        </p>

        {/* Caption Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm italic text-white/60">
            &ldquo;{god.caption}&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleShare}
            className={`w-full rounded-full bg-gradient-to-r ${god.gradient} px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95`}
          >
            Share My Result
          </button>

          <button
            onClick={handleCopy}
            className="w-full rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-95"
          >
            {copied ? "Copied!" : "Copy Link & Caption"}
          </button>

          <button
            onClick={onRestart}
            className="w-full py-3 text-sm font-medium text-white/40 transition-colors hover:text-white/60"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}
