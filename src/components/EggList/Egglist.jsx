import { useState } from "react";
import EgglistItem from "../EgglistItem/EgglistItem";
import s from "./EggList.module.css";
import Modal from "../Modal/Modal";

const Egglist = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState({ image: "", label: "" });

  const handleItemClick = (image, label) => {
    setSelectedEgg({ image, label });
    setModalOpen(true);
  };

  const eggs = [
    { image: "/hard-boiled.jpg", label: "Hard Boiled Egg" },
    { image: "/soft-boiled.jpg", label: "Soft Boiled Egg" },
    { image: "/scrumbled.jpg", label: "Scrambled Egg" },
    { image: "/poached.jpg", label: "Poached Egg" },
    { image: "/omelette.jpg", label: "Omelette" },
    { image: "/sunny-side-up.jpg", label: "Sunny-side Up Egg" },
  ];

  return (
    <div className={s.egglistContainer}>
      {eggs.map((egg) => (
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
      />
    </div>
  );
};

export default Egglist;
