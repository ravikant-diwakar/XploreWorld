import styles from "./About.module.css";
import PageNav from "../components/PageNav";

export default function About() {
  return (
    <main className={styles.about}>
      <PageNav />
      <section>
        <img src="about.png" alt="abc" />
        <div>
          <h2>Time to Travel</h2>
          <p>Are You Ready?</p>
        </div>
      </section>
    </main>
  );
}
