import s from "./NumberedHeading.module.scss";

const NumberedHeading = ({ title, number }) => {
  return (
    <h2 className={s.numberedHeading}>
      <span>{number}.</span>
      {title}
    </h2>
  );
};

export default NumberedHeading;
