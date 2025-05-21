import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  return (
    <button type="button" className={s.mobileNavBtn} aria-label="Menu Button">
      <div className={s.icon} />
    </button>
  );
};

export default MobileNavBtn;
