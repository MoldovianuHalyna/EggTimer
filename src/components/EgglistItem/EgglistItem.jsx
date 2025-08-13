import s from "./EggListItem.module.css";

const EgglistItem = ({ image, label, onClick }) => {
  return (
    <div className={s.egglistItem} onClick={onClick}>
      <img src={image} alt={label} className={s.image} />
      <span>{label}</span>
    </div>
  );
};

export default EgglistItem;
