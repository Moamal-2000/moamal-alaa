import ArchiveIntroduction from "@/components/Archive/ArchiveIntroduction/ArchiveIntroduction";
import ProjectsTable from "@/components/Archive/ProjectsTable/ProjectsTable";
import s from "./Archive.module.scss";

export default function Archive() {
  return (
    <main className={s.archive} id="archive">
      <ArchiveIntroduction />
      <ProjectsTable />
    </main>
  );
}
