import ProjectsTable from "@/components/Archive/ProjectsTable/ProjectsTable";
import s from "./Archive.module.scss";

export default function Archive() {
  return (
    <main className={s.archive} id="archive">
      <header>
        <h1>Archive</h1>
        <p>A list of things I’ve worked on</p>
      </header>

      <ProjectsTable />
    </main>
  );
}
