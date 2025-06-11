import styles from './NavigationBar.module.css';
import { useState } from 'react';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.name}>Adwaith PV</span>
        <div className={styles.contactInfo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="email" />
          <a href="mailto:adwaith.pv@gmail.com">adwaith.pv@gmail.com</a>
        </div>
        <div className={styles.contactInfo}>
          <img src="https://www.svgrepo.com/download/111201/phone-call.svg" alt="phone" />
          <span>+91 9884922459</span>
        </div>
        <div className={styles.contactInfo}>
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="linkedin" />
          <a href="https://linkedin.com/in/adwaithpv" target="_blank" rel="noopener noreferrer">linkedin.com/in/adwaithpv</a>
        </div>
      </div>
      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
      </button>
      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#involvement">Involvement</a>
        <a href="#publication">Publication</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavigationBar; 