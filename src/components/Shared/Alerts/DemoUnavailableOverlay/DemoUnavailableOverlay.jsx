import s from "./DemoUnavailableOverlay.module.scss";

const DemoUnavailableOverlay = ({ message }) => {
  return (
    <div
      className={s.overlay}
      aria-live="polite"
      role="alert"
      data-domain-unavailable
    >
      <p className={s.message}>{message}</p>
    </div>
  );
};

export default DemoUnavailableOverlay;
