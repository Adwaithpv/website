import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'Turn2Law',
    period: 'June 2025 - Present',
    description: 'Engineered an automated web scraping framework with Selenium for legal news. Built a predictive algorithm (Python, TensorFlow) improving client-lawyer matchmaking by 35%. Deployed a chatbot using NLP, improving client interaction response times by 50%.',
  },
  {
    role: 'Consultant Lead',
    company: '180 Degrees Consulting, SRM Institute of Science and Technology',
    period: 'September 2023 - Present',
    description: 'Led consulting projects for NGOs (social impact, strategy). Integrated cloud services (AWS, Azure), improved efficiency by 30%. Deployed monitoring tools (Prometheus, Grafana), reduced downtime by 25%.',
  },
];

const Experience = () => (
  <section className={styles.experience} id="experience">
    <h2>Experience</h2>
    <div className={styles.timeline}>
      {experiences.map((exp, idx) => (
        <motion.div
          className={styles.card}
          key={exp.role + exp.company}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className={styles.header}>
            <span className={styles.role}>{exp.role}</span>
            <span className={styles.company}>@ {exp.company}</span>
            <span className={styles.period}>{exp.period}</span>
          </div>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience; 