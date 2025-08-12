import s from "./EggListItem.module.css";

const EgglistItem = ({ image, label }) => {
  return (
    <div className={s.egglistItem}>
      <img src={image} alt={label} className={s.image} />
      <span>{label}</span>
    </div>
  );
};

export default EgglistItem;
