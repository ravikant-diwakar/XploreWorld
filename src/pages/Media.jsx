import styles from "./Media.module.css";
import PageNav from "../components/PageNav";

export default function Media() {
  return (
    <div className={styles.mediaPage}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted>
          <source src="video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className={styles.pageHeader}>
          <PageNav />
        </header>

        <div className={styles.overlayText}>
          <h2 className={styles.heading}>FIND THE PERFECT PLACE TO GO</h2>
          <p className={styles.subheading}>
            SHINE WITH US! SHARING IS BEAUTIFUL
          </p>
        </div>
      </div>
      <h2 className={styles.galleryHeading}>Photo Gallery</h2>
      <div className={styles.gallery}>
        {/* Add your travel photos here */}
        <div className={styles.photo}>
          <img src="bg.jpg" alt="Travel Photo 1" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img src="bg2.jpg" alt="Travel Photo 2" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img
            src="travel-1.jpeg"
            alt="Travel Photo 3"
            className={styles.image}
          />
        </div>
        <div className={styles.photo}>
          <img src="img-1.jpg" alt="Travel Photo 1" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img
            src="janakpur.jpeg"
            alt="Travel Photo 2"
            className={styles.image}
          />
        </div>
        <div className={styles.photo}>
          <img
            src="ganeshpuja.jpeg"
            alt="Travel Photo 3"
            className={styles.image}
          />
        </div>
        <div className={styles.photo}>
          <img
            src="khandgiri.jpg"
            alt="Travel Photo 1"
            className={styles.image}
          />
        </div>
        <div className={styles.photo}>
          <img src="ksom.jpeg" alt="Travel Photo 2" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img
            src="lingraja.jpeg"
            alt="Travel Photo 3"
            className={styles.image}
          />
        </div>
        <div className={styles.photo}>
          <img src="puri.jpeg" alt="Travel Photo 1" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img src="img-2.jpg" alt="Travel Photo 2" className={styles.image} />
        </div>
        <div className={styles.photo}>
          <img src="img-1.jpg" alt="Travel Photo 3" className={styles.image} />
        </div>
        {/* Add more photos as needed */}
      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} Xploreworld
        </p>
      </footer>
    </div>
  );
}
