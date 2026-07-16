import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, decimals: number, duration = 1000) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(target * (1 - (1 - progress) ** 3));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      observer.disconnect();
    }, { threshold: .5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, target]);
  return { ref, value: value.toFixed(decimals) };
}
