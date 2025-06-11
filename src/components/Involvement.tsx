import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const involvement = [
  {
    role: 'Consultant Lead',
    org: '180 Degrees Consulting, SRM Institute of Science and Technology',
    period: 'September 2023 - Present',
    bullets: [
      'Collaborated on multiple consulting projects for NGOs, focusing on social impact and strategic development.',
      'Spearheaded the integration of cloud services into client solutions, improving operational efficiency by 30% over a 6-month period, utilizing AWS and Azure tools.',
      'Orchestrated the deployment of monitoring tools to track and optimize client system performance, reducing downtime by 25% within a 3-month timeframe using Prometheus and Grafana.',
    ],
  },
];

const Involvement = () => (
  <section className={styles.experience} id="involvement">
    <h2>Involvement</h2>
    <div className={styles.timeline}>
      {involvement.map((inv, idx) => (
        <motion.div
          className={styles.card}
          key={inv.role + inv.org}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className={styles.header}>
            <span className={styles.role}>{inv.role}</span>
            <span className={styles.company}>@ {inv.org}</span>
            <span className={styles.period}>{inv.period}</span>
          </div>
          <ul>
            {inv.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Involvement; 