import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const certifications = [
  'Introduction to Web Development with HTML, CSS, and JavaScript',
  'Programming in Python',
  'AWS Academy Graduate: AWS Academy Cloud Architecting',
  'AWS Academy Graduate: AWS Academy Cloud Foundations',
  'C for Everyone: Structured Programming',
  'C for Everyone: Programming Fundamentals',
  'Google Cloud Gen AI Virtual Internship (Jun. 2024)',
  'Google AI-ML Virtual Internship (Jan. 2024)',
  'Cloud Virtual Internship by AWS Academy (Sep. 2023)',
];

const Certifications = () => (
  <section className={styles.experience} id="certifications">
    <h2>Certifications</h2>
    <ul>
      {certifications.map((cert, idx) => (
        <motion.li
          key={cert}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
        >
          {cert}
        </motion.li>
      ))}
    </ul>
  </section>
);

export default Certifications; 