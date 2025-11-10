
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Comprehensive content protection
const disableContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};

const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable all screenshot, screen recording, and copy shortcuts
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) || // Chrome DevTools screenshot
    (e.key === 'PrintScreen') || // Print Screen
    (e.metaKey && e.shiftKey && e.key === '3') || // Mac screenshot (full screen)
    (e.metaKey && e.shiftKey && e.key === '4') || // Mac screenshot (partial)
    (e.metaKey && e.shiftKey && e.key === '5') || // Mac screenshot & recording
    (e.ctrlKey && e.key === 'p') || // Print (Windows)
    (e.metaKey && e.key === 'p') || // Print (Mac)
    (e.ctrlKey && e.key === 'c') || // Copy (Windows)
    (e.metaKey && e.key === 'c') || // Copy (Mac)
    (e.ctrlKey && e.key === 'x') || // Cut (Windows)
    (e.metaKey && e.key === 'x') || // Cut (Mac)
    (e.ctrlKey && e.shiftKey && e.key === 'C') || // Chrome DevTools
    (e.key === 'F12') // DevTools
  ) {
    e.preventDefault();
    return false;
  }
};

const disableSelection = (e: Event) => {
  const target = e.target as HTMLElement;
  // Allow selection only on input and textarea elements
  if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
    e.preventDefault();
  }
};

const disableDrag = (e: DragEvent) => {
  e.preventDefault();
};

const ProtectedApp = () => {
  useEffect(() => {
    // Add event listeners
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('dragstart', disableDrag);
    
    // Prevent screenshot APIs
    if ('getDisplayMedia' in navigator.mediaDevices) {
      navigator.mediaDevices.getDisplayMedia = function() {
        return Promise.reject(new Error('Screen capture is disabled'));
      };
    }

    // Disable copy event
    document.addEventListener('copy', (e) => {
      e.preventDefault();
    });

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('dragstart', disableDrag);
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>
);
