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
      className="fixed inset-0 bg-black/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg text-center w-[min(90vw,420px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{label} Timer</h2>

        <p className="text-4xl font-mono tabular-nums mb-4">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </p>

        <div className="flex gap-2 justify-center">
          <button
            className="px-4 py-2 bg-[#455667] text-white rounded hover:bg-[#5a6d82]"
            onClick={handlePauseResume}
          >
            {paused ? "Resume" : "Pause"}
          </button>

          <button
            className="px-4 py-2 border border-[#455667] rounded hover:bg-[#5a6d82] hover:text-white"
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
