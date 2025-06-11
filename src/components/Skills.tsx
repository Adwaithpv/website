import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'AWS', img: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Tensorflow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
  { name: 'Scikit-learn', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'OpenCV', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Unity', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'LangChain', img: 'https://www.vectorlogo.zone/logos/langchain/langchain-icon.svg' },
  { name: 'Data Structures & Algorithms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'DBMS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Cloud', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
];

const Skills = () => (
  <section className={styles.skills} id="skills">
    <h2>Skills</h2>
    <div className={styles.allSkills}>
      {skills.map((skill, idx) => (
        <motion.div
          className={styles.skill}
          key={skill.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <img src={skill.img} alt={skill.name} height={60} />
          <h4>{skill.name}</h4>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills; 