import styles from "./About.module.css";
import PageNav from "../components/PageNav";

const About = () => {
  return (
    <div className={styles.about}>
      <PageNav />

      <div className={styles.aboutHero}>
        <h1>About XploreWorld</h1>
        <p>Your trusted partner in creating unforgettable travel experiences</p>
      </div>

      <section className={styles.ourStory}>
        <h2>Our Story</h2>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <p>
              Founded in 2024, XploreWorld has been helping travelers explore
              the world's most beautiful destinations. Our passion for travel
              and commitment to excellence has made us one of the leading travel
              companies in the industry.
            </p>
            <p>
              We believe that travel has the power to transform lives and create
              lasting memories. That's why we're dedicated to providing
              exceptional travel experiences for our clients.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
              alt="Our Story"
            />
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Customized Tours</h3>
            <p>
              Personalized itineraries tailored to your preferences and
              interests
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Luxury Travel</h3>
            <p>Premium accommodations and exclusive experiences</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Adventure Tours</h3>
            <p>Thrilling experiences for the adventurous soul</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cultural Immersion</h3>
            <p>Deep dive into local traditions and customs</p>
          </div>
        </div>
      </section>

      <section className={styles.achievementsSection}>
        <h2>Our Achievements</h2>
        <div className={styles.achievementsGrid}>
          <div className={styles.achievementCard}>
            <h3>10K+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className={styles.achievementCard}>
            <h3>50+</h3>
            <p>Destinations</p>
          </div>
          <div className={styles.achievementCard}>
            <h3>05+</h3>
            <p>Months Experience</p>
          </div>
          <div className={styles.achievementCard}>
            <h3>100+</h3>
            <p>Local Partners</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>What Our Travelers Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>
                "An incredible experience! The team went above and beyond to
                make our trip special."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4>Amit Jaiswal</h4>
                <p>Adventure Tour to Nepal</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>
                "Perfect organization and amazing local guides. Couldn't have
                asked for better!"
              </p>
              <div className={styles.testimonialAuthor}>
                <h4>Gaurav kumar</h4>
                <p>Cultural Tour in Japan</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>
                "The attention to detail and personalized service made our
                honeymoon unforgettable."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4>Abhijit Kumar</h4>
                <p>Luxury Maldives Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.awardsSection}>
        <h2>Awards & Recognition</h2>
        <div className={styles.awardsGrid}>
          <div className={styles.awardCard}>
            <h3>Best Tour Operator 2024</h3>
            <p>Travel Excellence Awards</p>
          </div>
          <div className={styles.awardCard}>
            <h3>Sustainable Tourism Award</h3>
            <p>Global Travel Association</p>
          </div>
          <div className={styles.awardCard}>
            <h3>Customer Service Excellence</h3>
            <p>Tourism Industry Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
