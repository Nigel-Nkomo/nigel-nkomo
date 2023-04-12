import styles from "./Projects.module.css";
import Project from "../Project/Project";
import workit from "../Images/workit.png";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <Project imgUrl={workit} />
      <Project />
    </section>
  );
}
