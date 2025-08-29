import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, image, label, instructions }) => {
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

  const recipe = instructions.find((item) => item.label === label);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className="text-center pb-8 ">{label}</h2>
        <img src={image} alt={label} className={styles.image} />

        {recipe ? (
          <div>
            <h3 class="text-left pb-8 ">Instructions</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li class="text-left" key={index}>
                  {index + 1}.{step}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p>No instructions found for this egge type</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
