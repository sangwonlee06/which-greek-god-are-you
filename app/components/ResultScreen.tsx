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
    <div className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden px-5 pb-10 pt-10 sm:px-6">
      {/* ── Ambient background ── */}
      <div className="animate-fade-in-slow pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[5%] h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ backgroundColor: god.color, opacity: 0.12 }}
        />
        <div
          className="absolute bottom-[5%] left-1/2 h-[300px] w-[350px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: god.color, opacity: 0.06 }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[360px] flex-1 flex-col items-center">
        {/* ════════════════════════════════════════════
            SCREENSHOT CARD — the shareable centerpiece
            ════════════════════════════════════════════ */}
        <div
          className="animate-reveal-up w-full overflow-hidden rounded-[28px] p-px"
          style={{
            background: `linear-gradient(160deg, ${god.color}40, transparent 40%, transparent 60%, ${god.color}20)`,
            animationDelay: "0.15s",
          }}
        >
          <div className="relative overflow-hidden rounded-[27px] bg-[#0c0c10] px-6 pb-8 pt-10">
            {/* Inner card glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[80px]"
              style={{ backgroundColor: god.color, opacity: 0.08 }}
            />

            {/* Top label */}
            <p
              className="animate-fade-in relative mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/25"
              style={{ animationDelay: "0.4s" }}
            >
              Your Divine Identity
            </p>

            {/* ── Emoji with layered glow ── */}
            <div className="relative mb-8 flex justify-center">
              {/* Outer ring */}
              <div
                className="animate-glow-ring absolute h-36 w-36 rounded-full sm:h-40 sm:w-40"
                style={{
                  background: `radial-gradient(circle, ${god.color}22 0%, ${god.color}08 50%, transparent 70%)`,
                }}
              />
              {/* Inner ring */}
              <div
                className="animate-glow-ring absolute h-28 w-28 rounded-full sm:h-32 sm:w-32"
                style={{
                  background: `radial-gradient(circle, ${god.color}30 0%, transparent 60%)`,
                  animationDelay: "0.5s",
                }}
              />
              {/* Emoji */}
              <span
                className="animate-bounce-in relative block text-[5.5rem] leading-none sm:text-[6.5rem]"
                style={{ animationDelay: "0.3s" }}
              >
                {god.emoji}
              </span>
            </div>

            {/* ── Identity ── */}
            <div className="relative text-center">
              <p
                className="animate-fade-in mb-2 text-[13px] font-medium uppercase tracking-[0.2em] text-white/30"
                style={{ animationDelay: "0.55s" }}
              >
                You are
              </p>

              <h1
                className="animate-reveal-up mb-2"
                style={{ animationDelay: "0.6s" }}
              >
                <span
                  className={`bg-gradient-to-r ${god.gradient} bg-clip-text text-[3.25rem] leading-none font-black tracking-tight text-transparent sm:text-6xl`}
                >
                  {god.name}
                </span>
              </h1>

              <p
                className="animate-fade-in text-[14px] font-medium text-white/35"
                style={{ animationDelay: "0.75s" }}
              >
                {god.title}
              </p>
            </div>

            {/* ── Divider ── */}
            <div
              className="animate-line-expand relative my-7 flex justify-center"
              style={{ animationDelay: "0.85s" }}
            >
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, transparent, ${god.color}60, transparent)`,
                }}
              />
            </div>

            {/* ── Pull-quote caption ── */}
            <p
              className="animate-fade-in relative text-center text-[15px] leading-relaxed font-medium italic text-white/50"
              style={{ animationDelay: "0.95s" }}
            >
              &ldquo;{god.caption}&rdquo;
            </p>

            {/* ── Watermark ── */}
            <p
              className="animate-fade-in mt-8 text-center text-[10px] tracking-[0.15em] text-white/15"
              style={{ animationDelay: "1.05s" }}
            >
              whichgreekgodareyou.com
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════
            BELOW THE CARD — description + actions
            ════════════════════════════════════════ */}

        {/* Description */}
        <p
          className="animate-fade-in mt-7 px-1 text-center text-[14px] leading-relaxed text-white/50"
          style={{ animationDelay: "1.1s" }}
        >
          {god.description}
        </p>

        {/* ── CTA Section ── */}
        <div
          className="animate-fade-in mt-8 flex w-full flex-col gap-3"
          style={{ animationDelay: "1.25s" }}
        >
          {/* Share + Copy row */}
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              style={{
                background: `linear-gradient(135deg, ${god.color}, ${god.color}bb)`,
                boxShadow: `0 8px 32px ${god.color}30`,
              }}
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              Share
            </button>

            <button
              onClick={handleCopy}
              className="glass-strong flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-semibold text-white/70 transition-all duration-300 hover:bg-white/[0.1] hover:text-white/90 active:scale-[0.97]"
            >
              {copied ? (
                <>
                  <svg
                    className="h-[18px] w-[18px] text-green-400"
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
                  Copied
                </>
              ) : (
                <>
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Restart */}
          <button
            onClick={onRestart}
            className="mt-1 py-2 text-[13px] font-medium text-white/20 transition-colors duration-300 hover:text-white/45"
          >
            Take it again
          </button>
        </div>
      </div>
    </div>
  );
}
