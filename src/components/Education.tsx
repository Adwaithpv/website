import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const education = [
  {
    degree: 'B.Tech in Computer Science (Big Data Analytics)',
    school: 'SRM Institute Of Science & Technology, Kattankulathur, Tamilnadu',
    period: 'Jun 2023 - May 2027',
    details: 'CGPA: 9.40',
  },
  {
    degree: 'Higher Secondary',
    school: 'Sri Chaitanya Techno School, Chennai, Tamilnadu',
    period: '2021 - 2023',
    details: '',
  },
];

const Education = () => (
  <section className={styles.experience} id="education">
    <h2>Education</h2>
    <div className={styles.timeline}>
      {education.map((edu, idx) => (
        <motion.div
          className={styles.card}
          key={edu.degree + edu.school}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className={styles.header}>
            <span className={styles.role}>{edu.degree}</span>
            <span className={styles.company}>@ {edu.school}</span>
            <span className={styles.period}>{edu.period}</span>
          </div>
          {edu.details && <p>{edu.details}</p>}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education; 