import { motion } from 'framer-motion';
import styles from './About.module.css';
import userProfile from '../assets/user-profile.jpg'; // Placeholder for the profile image

const About = () => (
  <section className={styles.about} id="home">
    <div className={styles.content}>
      <div className={styles.leftCol}>
        <h1 className={styles.greeting}>Hi,</h1>
        <h1 className={styles.name}>I am <span className={styles.highlight}>James Ross</span></h1>
        <p className={styles.description}>
          Product and Visual interface designer in Google. Specialize in UI/UX and product development & responsive web design.
        </p>
        <div className={styles.buttons}>
          <button className={styles.getInTouchButton}>
            Get in touch <span className={styles.arrowIcon}>→</span>
          </button>
          <button className={styles.downloadCVButton}>
            Download CV
          </button>
        </div>
      </div>
      <div className={styles.rightCol}>
        <img src={userProfile} alt="James Ross" className={styles.profileImage} />
        <div className={styles.badge1}>UI/UX Designer<br />5 years experience</div>
        <div className={styles.badge2}>Google Certified Designer</div>
        {/* Abstract shapes from screenshot */}
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>
    </div>
  </section>
);

export default About; 