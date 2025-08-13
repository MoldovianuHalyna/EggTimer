import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, image, label }) => {
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

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <img src={image} alt={label} className={styles.image} />
        <h2>{label}</h2>
        {/* Add instructions and Timer component here */}
      </div>
    </div>
  );
};

export default Modal;
