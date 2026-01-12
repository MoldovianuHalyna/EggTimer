import { useEffect, useState } from "react";
import TimerModal from "../../TimerModal/TimerModal";

const Modal = ({ isOpen, onClose, image, label, instructions }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const openTimerModal = () => {
    if (recipe) {
      setModalOpen(true);
    }
  };

  const recipe = instructions.find((item) => item.label === label);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--color-backdrop)]"
      onClick={onClose}
    >
      <div
        className="relative flex min-w-[320px] max-w-[90vw] flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card-bg)] p-8 text-center shadow-[0_4px_24px_var(--color-shadow)] text-[var(--color-text)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-3 text-3xl leading-none text-[var(--color-text)]"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="pb-8 text-center text-2xl font-semibold text-[var(--color-heading)]">
          {label}
        </h2>
        <img src={image} alt={label} className="mb-4 h-auto w-52" />

        {recipe ? (
          <div className="w-full">
            <h3 className="pb-5 text-left text-xl font-semibold text-[var(--color-heading)]">
              Instructions
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-left">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <button
              onClick={openTimerModal}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-[var(--color-accent)] to-[color-mix(in_srgb,var(--color-accent)_70%,var(--color-card-bg))] px-6 py-2 font-semibold tracking-wide text-[var(--color-button-text)] shadow-[0_6px_16px_var(--color-shadow)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start Timer
            </button>
          </div>
        ) : (
          <p>No instructions found for this egg type</p>
        )}
      </div>
      <TimerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        time={recipe.time}
        label={recipe.label}
      />
    </div>
  );
};

export default Modal;
