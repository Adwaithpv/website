import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const publications = [
  {
    title: 'Leveraging Segment Anything Model and Large Language Models for Rapid Post-Disaster Damage Assessment',
    type: 'Conference Paper',
    publisher: 'IEEE',
    year: '2025',
  },
];

const Publication = () => (
  <section className={styles.experience} id="publication">
    <h2>Publication</h2>
    <div className={styles.timeline}>
      {publications.map((pub, idx) => (
        <motion.div
          className={styles.card}
          key={pub.title}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className={styles.header}>
            <span className={styles.role}>{pub.title}</span>
            <span className={styles.company}>({pub.type}, {pub.publisher}, {pub.year})</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Publication; 