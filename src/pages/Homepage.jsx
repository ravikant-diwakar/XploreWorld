import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Begin Your Journey
          <br />
          Explore, Experience, and Relive Every Adventure
        </h1>
        <h2>
          Duniya Ko Dekho, Apni Nazar Se – Aapki Yadein, Aapki Kahaniyan, Aapka
          XploreWorld.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
