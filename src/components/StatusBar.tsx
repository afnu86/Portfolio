import { useEffect, useState } from 'react';
import { profile } from '../lib/content';

type Section = { file: string; line: number };
export function StatusBar({ section }: { section: Section }) {
  const [time, setTime] = useState('');
  useEffect(() => { const update = () => setTime(new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date())); update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer); }, []);
  return <footer className="statusbar"><span className="availability"><i className="availability-dot" />available for work</span><span className="status-file">Ln {section.line} · {section.file}</span><span className="status-branch">⎇ main</span><span className="status-location">{profile.location}</span><time className="status-time">{time}</time><a className="status-link status-email" href={`mailto:${profile.email}`}>{profile.email}</a></footer>;
}
