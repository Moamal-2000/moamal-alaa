import s from "./CaseStudyHeading.module.scss";

const CaseStudyHeading = ({ id, children }) => (
  <h2 id={id} className={s.heading}>
    {children}
  </h2>
);

export default CaseStudyHeading;
