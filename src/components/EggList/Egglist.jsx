import { useState } from "react";
import EgglistItem from "../EgglistItem/EgglistItem";
import s from "./EggList.module.css";
import Modal from "../Modal/Modal";
import { EGGS } from "../../constants";
import { INSTRUCTIONS } from "../../constants";

const Egglist = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState({ image: "", label: "" });

  const handleItemClick = (image, label) => {
    setSelectedEgg({ image, label });
    setModalOpen(true);
  };

  return (
    <div className={s.egglistContainer}>
      {EGGS.map((egg) => (
        <EgglistItem
          key={egg.label}
          image={egg.image}
          label={egg.label}
          onClick={() => handleItemClick(egg.image, egg.label)}
        />
      ))}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={selectedEgg.image}
        label={selectedEgg.label}
        instructions={INSTRUCTIONS}
      />
    </div>
  );
};

export default Egglist;
