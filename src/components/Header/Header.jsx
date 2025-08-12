import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <h1 className={s.header}>Egg Timer</h1>
      <p className={s.headerText}>Select the type of egg to start the timer</p>
    </div>
  );
};

export default Header;
