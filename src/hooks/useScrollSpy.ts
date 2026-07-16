import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsRef = useRef(ids);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: 0 },
    );
    idsRef.current.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
