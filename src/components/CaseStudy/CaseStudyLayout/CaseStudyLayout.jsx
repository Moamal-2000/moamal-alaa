import s from "./CaseStudyLayout.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const CaseStudyLayout = ({ children }) => {
  return (
    <div className={s.pageShell}>
      <Sidebar />
      {children}
    </div>
  );
};

export default CaseStudyLayout;
