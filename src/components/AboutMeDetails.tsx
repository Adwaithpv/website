import { motion } from 'framer-motion';
import styles from './About.module.css'; // Reusing About.module.css for general styling

const AboutMeDetails = () => (
  <section className={styles.about} id="about">
    <div className={styles.content} style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div className={styles.leftCol} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.description}>
          Here you can provide more detailed information about yourself. Expand on your experience, skills, and what drives you. This section can include a longer bio, your philosophy, or specific achievements that don't fit into the main hero section.
          <br /><br />
          For instance, you might elaborate on:
          <ul>
            <li>Your journey into UI/UX design.</li>
            <li>Key projects you're most proud of.</li>
            <li>Your design process and methodologies.</li>
            <li>Any volunteer work or community involvement.</li>
            <li>Your passion for learning and continuous improvement.</li>
          </ul>
          Feel free to make this section as detailed as needed to tell your story!
        </p>
      </div>
      {/* You can add another column here for an image or other visual elements if desired */}
    </div>
  </section>
);

export default AboutMeDetails;