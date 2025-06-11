import styles from './NavigationBar.module.css';
import { useState } from 'react';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.logo}>JR</span>
      </div>
      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
      </button>
      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#showcase">Showcase</a>
      </div>
      <div className={styles.right}>
        <span className={styles.lang}>ENG</span>
        <a href="tel:+1234567890" aria-label="Phone"><img src="https://www.svgrepo.com/download/111201/phone-call.svg" alt="phone icon" className={styles.icon} /></a>
        <a href="#share" aria-label="Share"><img src="https://www.svgrepo.com/show/475471/share-alt.svg" alt="share icon" className={styles.icon} /></a>
      </div>
    </nav>
  );
};

export default NavigationBar; 