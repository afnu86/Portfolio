import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = PropsWithChildren<{ className?: string; delay?: number }>;

export function RevealOnScroll({ children, className, delay = 0 }: Props) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={false} animate={reducedMotion ? undefined : { y: 0 }} transition={{ duration: .45, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
