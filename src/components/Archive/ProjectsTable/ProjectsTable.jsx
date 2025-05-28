import s from "./ProjectsTable.module.scss";
import ProjectsTBody from "./ProjectsTBody/ProjectsTBody";
import ProjectsTHead from "./ProjectsTHead/ProjectsTHead";

const ProjectsTable = () => {
  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <ProjectsTHead />
        <ProjectsTBody />
      </table>
    </div>
  );
};

export default ProjectsTable;
