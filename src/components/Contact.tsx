import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact} id="contact">
    <h2>Contact</h2>
    <motion.div
      className={styles.info}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.item}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="email" />
        <a href="mailto:adwaith.pv@gmail.com">adwaith.pv@gmail.com</a>
      </div>
      <div className={styles.item}>
        <img src="https://www.svgrepo.com/download/111201/phone-call.svg" alt="phone" />
        <span>+91 9884922459</span>
      </div>
      <div className={styles.socials}>
        <a href="https://linkedin.com/in/adwaithpv" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </motion.div>
  </section>
);

export default Contact; 