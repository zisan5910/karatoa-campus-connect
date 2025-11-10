
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Content protection
const disableContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};

const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable common screenshot and copy shortcuts
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) || // Chrome DevTools screenshot
    (e.key === 'PrintScreen') || // Print Screen
    (e.metaKey && e.shiftKey && e.key === '3') || // Mac screenshot
    (e.metaKey && e.shiftKey && e.key === '4') || // Mac partial screenshot
    (e.ctrlKey && e.key === 'p') || // Print
    (e.metaKey && e.key === 'p') // Mac print
  ) {
    e.preventDefault();
    return false;
  }
};

const ProtectedApp = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>
);
