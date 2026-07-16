import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../lib/content';

const ease: [number, number, number, number] = [.22, 1, .36, 1];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const reveal = (delay: number) => reducedMotion ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: .65, ease } };

  return <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero-layout">
      <div className="hero-copy">
        <motion.h1 className="hero-name" id="hero-title" {...reveal(.12)}>{profile.name}</motion.h1>
        <motion.p className="hero-role" {...reveal(.2)}>{profile.role}</motion.p>
        <motion.h2 className="hero-tagline" {...reveal(.28)}>Responsive web experiences, thoughtfully built<span className="title-dot">.</span></motion.h2>
        <motion.p className="hero-summary" {...reveal(.36)}>{profile.summary}</motion.p>
        <motion.div className="hero-actions" {...reveal(.44)}>
          <a className="button primary" href="#work">View projects <span aria-hidden="true">↓</span></a>
          <a className="button secondary" href="/afifah-nuha-resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
        </motion.div>
      </div>
      <motion.aside className="hero-aside" {...reveal(.52)} aria-label="Profile highlights">
        <div><span>Currently</span><strong>B.Tech Information Technology</strong></div>
        <div><span>Focus</span><strong>Frontend development &amp; UI/UX design</strong></div>
        <div><span>Based in</span><strong>{profile.location}</strong></div>
      </motion.aside>
    </div>
  </section>;
}
