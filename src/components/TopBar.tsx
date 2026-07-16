type Section = { id: string; label: string };

export function TopBar({ sections, activeId }: { sections: readonly Section[]; activeId: string }) {
  return <header className="topbar"><a className="brand" href="#home">Afifah Nuha<span aria-hidden="true">.</span></a><nav className="tabs" aria-label="Portfolio sections">{sections.slice(1).map((section) => <a className={`tab ${section.id === activeId ? 'active' : ''}`} href={`#${section.id}`} key={section.id} aria-current={section.id === activeId ? 'page' : undefined}>{section.label}</a>)}</nav><a className="nav-cta" href="#contact">Let's talk</a></header>;
}
