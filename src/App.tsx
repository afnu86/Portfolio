import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { TopBar } from './components/TopBar';
import { Work } from './components/Work';
import { useScrollSpy } from './hooks/useScrollSpy';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

function App() {
  const activeId = useScrollSpy(sections.map((section) => section.id));
  return (
    <div className="site-shell">
      <TopBar sections={sections} activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Afifah Nuha. Built with care.</footer>
    </div>
  );
}

export default App;
