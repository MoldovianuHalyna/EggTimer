import { useEffect, useRef, useState } from "react";

const TimerModal = ({ isOpen, onClose, time, label }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSecondsLeft(time * 60);
      setPaused(false);
    }
  }, [isOpen, time]);

  useEffect(() => {
    if (!isOpen || paused) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isOpen, paused]);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const handlePauseResume = () => setPaused((p) => !p);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--color-backdrop)]"
      onClick={onClose}
    >
      <div
        className="relative w-[min(90vw,420px)] rounded-lg border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 text-center text-[var(--color-text)] shadow-[0_4px_24px_var(--color-shadow)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-3 text-3xl leading-none text-[var(--color-text)]"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="mb-4 text-xl font-bold text-[var(--color-heading)]">
          {label} Timer
        </h2>

        <p className="mb-4 text-4xl font-mono tracking-[0.08em] text-[var(--color-heading)]">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </p>

        <div className="flex justify-center gap-3">
          <button
            className="rounded-full border border-transparent bg-gradient-to-br from-[var(--color-accent)] to-[color-mix(in_srgb,var(--color-accent)_70%,var(--color-card-bg))] px-4 py-2 font-semibold text-[var(--color-button-text)] shadow-[0_6px_12px_var(--color-shadow)] transition-transform duration-200 hover:-translate-y-0.5"
            onClick={handlePauseResume}
          >
            {paused ? "Resume" : "Pause"}
          </button>

          <button
            className="rounded-full border border-[var(--color-border)] px-4 py-2 text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-card-hover)]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
