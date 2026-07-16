import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null); const ring = useRef<HTMLDivElement>(null); const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)'); const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduced.matches) return;
    document.body.classList.add('cursor-active'); let x = 0; let y = 0; let rx = 0; let ry = 0; let frame = 0;
    const move = (event: MouseEvent) => { x = event.clientX; y = event.clientY; };
    const tick = () => { rx += (x - rx) * .18; ry += (y - ry) * .18; if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`; if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`; frame = requestAnimationFrame(tick); };
    const over = (event: MouseEvent) => setHovered(Boolean((event.target as Element).closest('a, button, .chip')));
    window.addEventListener('mousemove', move); document.addEventListener('mouseover', over); frame = requestAnimationFrame(tick);
    return () => { document.body.classList.remove('cursor-active'); window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); cancelAnimationFrame(frame); };
  }, []);
  return <div aria-hidden="true" className="custom-cursor"><div ref={dot} className="cursor-dot" /><div ref={ring} className={`cursor-ring ${hovered ? 'hover' : ''}`} /></div>;
}
