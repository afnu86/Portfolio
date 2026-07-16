import type { AnchorHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function MagneticLink({ children, className, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const ref = useRef<HTMLAnchorElement>(null); const reducedMotion = useReducedMotion();
  const move = (event: MouseEvent<HTMLAnchorElement>) => { if (reducedMotion || !ref.current || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return; const box = ref.current.getBoundingClientRect(); ref.current.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .12}px, ${(event.clientY - box.top - box.height / 2) * .12}px)`; };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return <a ref={ref} className={className} {...props} onMouseMove={move} onMouseLeave={leave}>{children}</a>;
}
