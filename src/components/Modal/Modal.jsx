import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import TimerModal from "../../TimerModal/TimerModal";

const Modal = ({ isOpen, onClose, image, label, instructions }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState({ time: "", label: "" });

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
      setSelectedEgg({ time: recipe.time, label: recipe.label });
      setModalOpen(true);
    }
  };

  const recipe = instructions.find((item) => item.label === label);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className="text-center pb-8">{label}</h2>
        <img src={image} alt={label} className={styles.image} />

        {recipe ? (
          <div>
            <h3 className="text-left pb-5 ">Instructions</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li className="text-left" key={index}>
                  {index + 1}.{step}
                </li>
              ))}
            </ol>

            <button
              onClick={openTimerModal}
              className="text-center p-1 border-2 border-[#455667]  rounded hover:bg-[#5a6d82] hover:text-white hover:cursor-pointer"
            >
              Start Timer
            </button>
          </div>
        ) : (
          <p>No instructions found for this egge type</p>
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
