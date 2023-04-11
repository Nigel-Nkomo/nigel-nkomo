import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.textBox}>
        <p className={styles.pText}>
          Hi, My name's Nigel. I'm a web developer, based in Poznań.
        </p>
        <h1 className={styles.hText}>React · Node</h1>
      </div>
      <div className={styles.email}>
        <p>nigel.nkomo@icloud.com</p>
      </div>
    </section>
  );
}
