import { projects } from '../lib/content';
import { RevealOnScroll } from './RevealOnScroll';

export function Work() {
  return <section className="section" id="work" aria-labelledby="work-title">
    <RevealOnScroll><header className="section-head"><p className="section-kicker">Selected work</p><h2 id="work-title">Small products, real problem solving.</h2><p className="section-description">A selection of projects across AI-powered learning, IoT, and data analysis.</p></header></RevealOnScroll>
    <div className="project-grid">{projects.map((project, index) => <RevealOnScroll key={project.number} delay={index * .06}><article className="project-card"><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-detail"><span>Key contribution</span><p>{project.highlight}</p></div><p className="tech">{project.tech}</p></article></RevealOnScroll>)}</div>
  </section>;
}
