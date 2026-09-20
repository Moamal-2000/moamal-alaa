import s from "./FeaturedProject.module.scss";
import FeaturedProjectWrapper from "./FeaturedProjectWrapper";
import PreviewImage from "./PreviewImage/PreviewImage";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectStats from "./ProjectLinks/ProjectStats/ProjectStats";
import ProjectTechList from "./ProjectTechList/ProjectTechList";

const FeaturedProject = ({ data = {}, fetchedData = {}, shouldReverse }) => {
  const {
    title,
    description,
    technologies,
    previewImg,
    underDev,
    caseStudyPath,
  } = data;
  const { liveUrl, commitCount, stars, forks } = fetchedData;

  return (
    <FeaturedProjectWrapper shouldReverse={shouldReverse}>
      <div className={s.content}>
        <ProjectHeader title={title} liveUrl={liveUrl} underDev={underDev} />

        <div className={s.description}>{description}</div>

        <ProjectTechList technologies={technologies} />

        <div className={s.projectMeta}>
          <ProjectLinks
            fetchedData={fetchedData}
            title={title}
            caseStudyPath={caseStudyPath}
          />
          <ProjectStats stars={stars} forks={forks} commitCount={commitCount} />
        </div>
      </div>

      <PreviewImage
        src={previewImg}
        liveUrl={liveUrl}
        title={title}
        loading="lazy"
      />
    </FeaturedProjectWrapper>
  );
};

export default FeaturedProject;
