import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

const NUM_PARTICLES = 40;
const COLORS = ['#7f5af0', '#2cb67d', '#ff8906', '#e8bcf0'];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: random(0, width),
      y: random(0, height),
      r: random(12, 32),
      dx: random(-0.2, 0.2),
      dy: random(-0.2, 0.2),
      color: COLORS[Math.floor(random(0, COLORS.length))],
      alpha: random(0.08, 0.18),
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;
      }
      requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className={styles.particles} />;
};

export default ParticlesBackground; 