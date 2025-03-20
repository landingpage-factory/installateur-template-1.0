// app/components/AOSProvider.js
// app/components/AOSProvider.js
'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 600,
        once: true,
      });
      setIsReady(true); // Markiere AOS als initialisiert
    }
  }, []);

  // Rendere die Children erst, wenn AOS bereit ist
  return isReady ? children : null;
}