import { useEffect, useState } from 'react';

export function useTypewriter(text: string, delay = 22, disabled = false) {
  const [value, setValue] = useState(disabled ? text : '');
  useEffect(() => {
    if (disabled) { setValue(text); return; }
    setValue('');
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, delay);
    return () => window.clearInterval(timer);
  }, [delay, disabled, text]);
  return value;
}
