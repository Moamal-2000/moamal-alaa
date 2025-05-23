import SvgIcon from "@/components/Shared/SvgIcon";
import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
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

        <tbody>
          {OTHER_PROJECTS_DATA.map(
            ({ id, year, title, technologies, liveUrl, repoUrl }) => (
              <tr key={id}>
                <td className={s.year}>{year}</td>
                <td className={s.title}>{title}</td>
                <td className={`${s.tech} ${s.hideOnMobile}`}>
                  {technologies?.map((tech, index) => (
                    <span key={index}>
                      {tech}
                      {index < technologies.length - 1 && (
                        <span className={s.separator}>·</span>
                      )}
                    </span>
                  ))}
                </td>
                <td className={s.links}>
                  {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <SvgIcon name="live" />
                    </a>
                  )}

                  {repoUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <SvgIcon name="github" />
                    </a>
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
        <ProjectsTBody />
      </table>
    </div>
  );
};

export default ProjectsTable;
