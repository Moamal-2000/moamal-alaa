import SvgIcon from "@/components/Shared/SvgIcon";
import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
import s from "./ProjectsTBody.module.scss";

const ProjectsTBody = () => {
  return (
    <tbody className={s.tbody}>
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
  );
};

export default ProjectsTBody;
