import s from "./ProjectsTable.module.scss";
import ProjectsTBody from "./ProjectsTBody/ProjectsTBody";

const ProjectsTable = () => {
  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th className={s.hideOnMobile}>Built with</th>
            <th>Link</th>
          </tr>
        </thead>

        <ProjectsTBody />
      </table>
    </div>
  );
};

export default ProjectsTable;
