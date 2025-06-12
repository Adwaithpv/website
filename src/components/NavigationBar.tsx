import styles from './NavigationBar.module.css';
import { useState } from 'react';
import PhoneIcon from '../assets/phone-call-svgrepo-com.svg';
import ShareIcon from '../assets/share-svgrepo-com.svg';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('https://website-sigma-eight-49.vercel.app/');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.logo}>AD</span>
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
        <a href="tel:+1234567890" aria-label="Phone"><span className={styles.icon}><img src={PhoneIcon} alt="phone icon" /></span></a>
        <a href="#share" aria-label="Share" onClick={handleShareClick}><span className={styles.icon}><img src={ShareIcon} alt="share icon" /></span></a>
      </div>
      {copied && (
        <div className={styles.copiedNotification}>
          Profile link copied to clipboard!
        </div>
      )}
    </nav>
  );
};

export default NavigationBar; 