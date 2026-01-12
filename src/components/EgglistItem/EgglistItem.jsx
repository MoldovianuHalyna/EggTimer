const EgglistItem = ({ image, label, onClick }) => {
  return (
    <div
      className="flex flex-col items-center rounded border border-[var(--color-border)] bg-[var(--color-card-bg)] p-3 text-[var(--color-text)] shadow-[0_1px_4px_var(--color-shadow)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[var(--color-card-hover)] rounded-xl"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <img src={image} alt={label} className="h-[150px] w-[100px]" />
      <span>{label}</span>
    </div>
  );
};

export default EgglistItem;
