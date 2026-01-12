const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-lg font-light text-[var(--color-text)]">
      <h1 className="rounded-sm border-b border-[var(--color-border)] pb-2 text-3xl font-semibold text-[var(--color-heading)] shadow-[0_1px_4px_var(--color-shadow)]">
        Egg Timer
      </h1>
      <p className="text-base text-[var(--color-text)]">
        Select the type of egg to start the timer
      </p>
    </div>
  );
};

export default Header;
