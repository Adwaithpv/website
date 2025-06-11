import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'American Hand Sign Detection',
    description: 'Developed an American sign language detection website using OpenCV and CNNs (90%+ accuracy). Data visualization and model interpretability with seaborn.',
    img: 'https://placehold.co/300x180?text=Handsign',
    link: 'https://github.com/Adwaithpv/Handsign-CNN',
  },
  {
    title: 'MediBOT: Medicine Inventory Assistant using RAG',
    description: 'AI-powered inventory assistant with RAG, fine-tuned LLaMA 3.2, LangChain, Firebase.',
    img: 'https://placehold.co/300x180?text=MediBOT',
    link: 'https://github.com/Adwaithpv/SharkBYTE/tree/main/chatbot',
  },
  {
    title: 'InvAR: AR Inventory Management Application',
    description: 'AR app scans QR codes for real-time product info, integrated with real-time database.',
    img: 'https://placehold.co/300x180?text=InvAR',
    link: '',
  },
  {
    title: 'Skin Disease Detection using Tensorflow',
    description: 'CNNs for skin disease classification, improved accuracy from 82% to 88%.',
    img: 'https://placehold.co/300x180?text=Skin+Detection',
    link: 'https://github.com/Adwaithpv/Skin-Detection-using-keras-98-acc',
  },
  {
    title: 'Portfolio Website Development',
    description: 'Portfolio site using HTML, CSS, JS. Clean UI, interactive elements.',
    img: 'https://placehold.co/300x180?text=Portfolio',
    link: '',
  },
];

const Projects = () => (
  <section className={styles.projects} id="projects">
    <h2>Projects</h2>
    <div className={styles.projectsContainer}>
      {projects.map((project, idx) => (
        <motion.div
          className={styles.projectCard}
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <img src={project.img} alt={project.title} />
          <h3>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a> : project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects; 