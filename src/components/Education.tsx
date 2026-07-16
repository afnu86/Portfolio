import { certificates, education } from '../lib/content';
import { RevealOnScroll } from './RevealOnScroll';

export function Education() {
  return <section className="section" id="education" aria-labelledby="education-title">
    <RevealOnScroll><header className="section-head"><p className="section-kicker">Education & certificates</p><h2 id="education-title">A foundation for building well.</h2></header></RevealOnScroll>
    <div className="education-layout"><RevealOnScroll><article className="education-card"><p className="panel-label">Education</p><h3>{education.degree}</h3><p>{education.institution}</p><p className="muted-meta">{education.meta}</p></article></RevealOnScroll><div className="certificate-stack">{certificates.map((certificate, index) => <RevealOnScroll key={certificate.name} delay={.06 + index * .07}><article className="certificate-card"><p className="panel-label">Certificate</p><h3>{certificate.name}</h3><p>{certificate.issuer}</p><time>{certificate.date}</time></article></RevealOnScroll>)}</div></div>
  </section>;
}
