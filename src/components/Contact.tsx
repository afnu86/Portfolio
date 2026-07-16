import { profile } from '../lib/content';
import { RevealOnScroll } from './RevealOnScroll';

export function Contact() {
  return <section className="section contact" id="contact" aria-labelledby="contact-title">
    <RevealOnScroll className="contact-card"><p className="section-kicker">Contact</p><h2 id="contact-title">Let's make something useful.</h2><p>Open to frontend, UI/UX, and software development internships.</p><div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">↗</span></a><a className="button secondary" href="/afifah-nuha-resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a></div><div className="contact-meta"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a><a href={profile.phoneHref}>{profile.phone}</a></div></RevealOnScroll>
  </section>;
}
