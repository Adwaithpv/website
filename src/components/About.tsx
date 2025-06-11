import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => (
  <section className={styles.about} id="about">
    <h2 className={styles.sectionTitle}>About Me <span role="img" aria-label="wave">👋</span></h2>
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.leftCol}>
        <div className={styles.bigName}>Adwaith PV <span className={styles.emoji}>🚀</span></div>
        <div className={styles.role}>AI/ML Intern & B.Tech Student</div>
      </div>
      <motion.div
        className={styles.rightCol}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className={styles.summary}>
          Hey there! I'm Adwaith, an AI/ML Intern at Turn2Law and a B.Tech student in Computer Science (Big Data Analytics) at SRM Institute of Science & Technology (2023-2027), based in Chennai, Tamilnadu. I love building smart things with code—whether it's AI, web apps, or cloud projects, I'm always up for a challenge and a good cup of coffee ☕. Fun fact: I can solve a Rubik's cube in under a minute! 🧩<br /><br />
          Feel free to reach out at <a href="mailto:adwaith.pv@gmail.com">adwaith.pv@gmail.com</a> or connect on <a href="https://linkedin.com/in/adwaithpv" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
        <div className={styles.bgAccent} aria-hidden="true">🌈</div>
      </motion.div>
    </motion.div>
  </section>
);

export default About; 