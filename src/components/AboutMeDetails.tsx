import styles from './About.module.css'; // Reusing About.module.css for general styling

const AboutMeDetails = () => (
  <section className={styles.about} id="about">
    <div className={styles.content} style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div className={styles.leftCol} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.description}>
          I'm Adwaith PV, a Computer Science student specializing in Big Data Analytics at SRM Institute of Science & Technology, Chennai. Currently working as an AI/ML Intern at Turn2Law, I'm passionate about creating impactful AI solutions that solve real-world problems.<br /><br />
          I specialize in machine learning, computer vision, and natural language processing. My recent work includes developing predictive algorithms that improved client-lawyer matchmaking by 35%, building AI-powered inventory assistants with 92% accuracy using RAG and fine-tuned LLaMA models, and creating sign language detection systems with 94% validation accuracy.<br /><br />
          Beyond coding, I contribute to the tech community through consulting work with NGOs at 180 Degrees Consulting and have co-authored research on AI-powered disaster assessment that will be published at IEEE in 2025.<br /><br />
          I'm always excited to collaborate on innovative projects that leverage AI and machine learning to create positive impact. Let's connect and build something amazing together!
        </p>
      </div>
      {/* You can add another column here for an image or other visual elements if desired */}
    </div>
  </section>
);

export default AboutMeDetails;