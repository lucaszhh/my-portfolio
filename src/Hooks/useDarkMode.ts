// useDarkMode.ts
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const canUseLocalStorage = typeof window !== 'undefined' && window.localStorage;
  const storedDarkMode = canUseLocalStorage ? localStorage.getItem('darkMode') === 'true' : false;

  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;

    if (canUseLocalStorage) {
      localStorage.setItem('darkMode', String(newDarkMode));
    }

    document.documentElement.classList.toggle('dark', newDarkMode);
    setDarkMode(newDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return { darkMode, handleDarkMode };
};

export default useDarkMode;
