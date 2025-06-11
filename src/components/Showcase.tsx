import Projects from './Projects';
import Skills from './Skills';
import styles from './Showcase.module.css'; // We'll create this next

const Showcase = () => (
  <section id="showcase" className={styles.showcase}>
    <h2 className={styles.sectionTitle}>My Work & Skills</h2>
    <Projects />
    <Skills />
  </section>
);

export default Showcase;