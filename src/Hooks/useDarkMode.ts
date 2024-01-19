// useDarkMode.ts
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
    setDarkMode(newDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return { darkMode, handleDarkMode };
};

export default useDarkMode;
