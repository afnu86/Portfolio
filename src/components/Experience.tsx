import { experience } from '../lib/content';
import { RevealOnScroll } from './RevealOnScroll';

export function Experience() {
  return <section className="section" id="experience" aria-labelledby="experience-title">
    <RevealOnScroll><header className="section-head"><p className="section-kicker">Experience</p><h2 id="experience-title">Learning in the work.</h2><p className="section-description">Hands-on experience across responsive UI development, applied machine learning, and model evaluation.</p></header></RevealOnScroll>
    <div className="timeline">{experience.map((item, index) => <RevealOnScroll key={item.org} delay={index * .07}><article className="timeline-item"><div className="timeline-marker" aria-hidden="true" /><p className="item-dates">{item.dates}</p><div className="timeline-role"><h3>{item.role}</h3><p className="organisation">{item.org}</p></div><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article></RevealOnScroll>)}</div>
  </section>;
}
