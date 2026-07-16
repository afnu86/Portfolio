import { profile, skills, strengths } from '../lib/content';
import { RevealOnScroll } from './RevealOnScroll';

export function About() {
  return <section className="section" id="about" aria-labelledby="about-title">
    <RevealOnScroll><header className="section-head"><p className="section-kicker">About</p><h2 id="about-title">A practical builder with an eye for the interface.</h2></header></RevealOnScroll>
    <div className="about-grid"><RevealOnScroll className="prose" delay={.05}><p>{profile.summary}</p><p>My interests sit at the intersection of frontend development and UI/UX design, supported by a technical foundation in Java, Python, data structures, and databases.</p><div className="strengths"><p className="panel-label">Strengths</p><div>{strengths.map((strength) => <span key={strength}>{strength}</span>)}</div></div><div className="social-links"><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a className="text-link" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <span aria-hidden="true">↗</span></a></div></RevealOnScroll><RevealOnScroll className="skills-panel" delay={.12}><p className="panel-label">Technical skills</p>{Object.entries(skills).map(([group, list]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-tags">{list.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</RevealOnScroll></div>
  </section>;
}
