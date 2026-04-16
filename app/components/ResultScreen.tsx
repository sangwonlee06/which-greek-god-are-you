"use client";

import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import type { God } from "@/lib/gods";

interface ResultScreenProps {
  god: God;
  onRestart: () => void;
}

export default function ResultScreen({ god, onRestart }: ResultScreenProps) {
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const captureCard = useCallback(async (): Promise<File | null> => {
    if (!cardRef.current) return null;
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        backgroundColor: "#09090d",
      });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      return new File([blob], "my-greek-god.png", { type: "image/png" });
    } catch {
      return null;
    }
  }, []);

  const handleShare = async () => {
    setSharing(true);
    try {
      // Try image share first (enables Instagram Stories, iMessage previews, etc.)
      if (navigator.share && cardRef.current) {
        const file = await captureCard();
        if (file && navigator.canShare?.({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `I'm ${god.name}! Which Greek God Are You?`,
            text: `${god.caption}\n\nFind yours: ${window.location.href}`,
          });
          return;
        }
      }

      // Fallback: text-only share
      if (navigator.share) {
        await navigator.share({
          title: `I'm ${god.name}! Which Greek God Are You?`,
          text: god.caption,
          url: window.location.href,
        });
        return;
      }

      // Desktop fallback
      handleCopy();
    } catch {
      // User cancelled or error
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden px-5 pb-10 pt-8 sm:px-6">
      {/* ── Flash overlay on reveal ── */}
      <div
        className="animate-flash-reveal pointer-events-none fixed inset-0 z-50"
        style={{ backgroundColor: god.color }}
      />

      {/* ── Ambient background ── */}
      <div className="animate-fade-in-slow pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[8%] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[160px]"
          style={{ backgroundColor: god.color, opacity: 0.14 }}
        />
        <div
          className="absolute bottom-[5%] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: god.color, opacity: 0.07 }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[380px] flex-1 flex-col items-center">
        {/* ════════════════════════════════════════════════
            THE CARD — screenshot-ready shareable centerpiece
            ════════════════════════════════════════════════ */}
        <div
          ref={cardRef}
          className="animate-scale-fade-in w-full overflow-hidden rounded-[32px] p-px"
          style={{
            background: `linear-gradient(170deg, ${god.color}50, ${god.color}15 35%, transparent 50%, ${god.color}10 80%, ${god.color}40)`,
            animationDelay: "0.3s",
          }}
        >
          <div className="relative overflow-hidden rounded-[31px] bg-[#09090d] px-7 pb-10 pt-10">
            {/* Card interior glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[350px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-[100px]"
              style={{ backgroundColor: god.color, opacity: 0.1 }}
            />

            {/* ── Medallion ── */}
            <div className="relative mx-auto mb-10 flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
              {/* Outer rotating dashed ring */}
              <svg
                className="animate-spin-slow absolute inset-0 h-full w-full"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  fill="none"
                  stroke={god.color}
                  strokeWidth="0.5"
                  strokeDasharray="6 8"
                  opacity="0.3"
                />
              </svg>

              {/* Middle drawn ring */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  fill="none"
                  stroke={god.color}
                  strokeWidth="0.75"
                  strokeDasharray="565"
                  strokeDashoffset="565"
                  opacity="0.25"
                  className="animate-ring-draw"
                  style={{ animationDelay: "0.5s" }}
                />
              </svg>

              {/* Inner soft glow disc */}
              <div
                className="animate-pulse-subtle absolute h-32 w-32 rounded-full sm:h-36 sm:w-36"
                style={{
                  background: `radial-gradient(circle, ${god.color}20 0%, ${god.color}08 50%, transparent 70%)`,
                }}
              />

              {/* Emoji */}
              <span
                className="animate-blur-to-sharp relative block text-[6rem] leading-none sm:text-[7rem]"
                style={{ animationDelay: "0.4s" }}
              >
                {god.emoji}
              </span>
            </div>

            {/* ── Identity ── */}
            <div className="relative text-center">
              <p
                className="animate-fade-in mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/25"
                style={{ animationDelay: "0.7s" }}
              >
                You are
              </p>

              <h1
                className="animate-blur-to-sharp mb-2"
                style={{ animationDelay: "0.8s" }}
              >
                <span
                  className={`bg-gradient-to-r ${god.gradient} bg-clip-text text-[3.5rem] leading-[1] font-black tracking-tight text-transparent sm:text-[4rem]`}
                >
                  {god.name}
                </span>
              </h1>

              <p
                className="animate-fade-in text-[13px] font-medium tracking-wide text-white/30"
                style={{ animationDelay: "1s" }}
              >
                {god.title}
              </p>
            </div>

            {/* ── Ornamental divider ── */}
            <div
              className="animate-line-expand my-8 flex items-center justify-center gap-3"
              style={{ animationDelay: "1.1s" }}
            >
              <div
                className="h-px w-10"
                style={{
                  background: `linear-gradient(90deg, transparent, ${god.color}50)`,
                }}
              />
              <div
                className="h-1.5 w-1.5 rotate-45"
                style={{ backgroundColor: `${god.color}60` }}
              />
              <div
                className="h-px w-10"
                style={{
                  background: `linear-gradient(90deg, ${god.color}50, transparent)`,
                }}
              />
            </div>

            {/* ── Hero caption ── */}
            <p
              className="animate-reveal-up text-center text-[17px] leading-relaxed font-semibold text-white/70"
              style={{ animationDelay: "1.2s" }}
            >
              &ldquo;{god.caption}&rdquo;
            </p>

            {/* ── Description ── */}
            <p
              className="animate-fade-in mt-6 text-center text-[13px] leading-relaxed text-white/35"
              style={{ animationDelay: "1.4s" }}
            >
              {god.description}
            </p>

            {/* ── Watermark ── */}
            <div
              className="animate-fade-in mt-8 flex items-center justify-center gap-2"
              style={{ animationDelay: "1.5s" }}
            >
              <div
                className="h-px w-6"
                style={{
                  background: `linear-gradient(90deg, transparent, ${god.color}25)`,
                }}
              />
              <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.2em] text-white/15">
                which-greek-god-are-you.vercel.app
              </span>
              <div
                className="h-px w-6"
                style={{
                  background: `linear-gradient(90deg, ${god.color}25, transparent)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* ═══════════════════
            CTA SECTION
            ═══════════════════ */}
        <div
          className="animate-fade-in mt-8 flex w-full flex-col gap-3 px-2"
          style={{ animationDelay: "1.6s" }}
        >
          {/* Primary share */}
          <button
            onClick={handleShare}
            disabled={sharing}
            className="group relative w-full overflow-hidden rounded-2xl py-4.5 text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] disabled:opacity-70"
            style={{
              background: `linear-gradient(135deg, ${god.color}, ${god.color}cc)`,
              boxShadow: `0 12px 40px ${god.color}35`,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2.5">
              {sharing ? (
                "Preparing..."
              ) : (
                <>
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
                  Share Result
                </>
              )}
            </span>
          </button>

          {/* Secondary row */}
          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className="glass-strong flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-[14px] font-semibold text-white/60 transition-all duration-300 hover:bg-white/[0.1] hover:text-white/80 active:scale-[0.97]"
            >
              {copied ? (
                <>
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
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4"
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

            <button
              onClick={onRestart}
              className="glass flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-[14px] font-semibold text-white/40 transition-all duration-300 hover:bg-white/[0.07] hover:text-white/60 active:scale-[0.97]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
                />
              </svg>
              Retake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
