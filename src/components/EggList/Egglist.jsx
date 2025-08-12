import EgglistItem from "../EgglistItem/EgglistItem";
import s from "./EggList.module.css";

const Egglist = () => {
  return (
    <div className={s.egglistContainer}>
      <EgglistItem image="/hard-boiled.jpg" label="Hard Boiled Egg" />
      <EgglistItem image="/soft-boiled.jpg" label="Soft Boiled Egg" />
      <EgglistItem image="/scrumbled.jpg" label="Scrambled Egg" />
      <EgglistItem image="/poached.jpg" label="Poached Egg" />
      <EgglistItem image="/omelette.jpg" label="Omelette" />
      <EgglistItem image="/sunny-side-up.jpg" label="Sunny-side Up Egg" />
    </div>
  );
};

export default Egglist;
