
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Content protection
const disableContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};

const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable common screenshot, screen recording and copy shortcuts
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) || // Chrome DevTools screenshot
    (e.key === 'PrintScreen') || // Print Screen
    (e.metaKey && e.shiftKey && e.key === '3') || // Mac screenshot
    (e.metaKey && e.shiftKey && e.key === '4') || // Mac partial screenshot
    (e.metaKey && e.shiftKey && e.key === '5') || // Mac screen recording
    (e.ctrlKey && e.key === 'p') || // Print
    (e.metaKey && e.key === 'p') || // Mac print
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || // DevTools
    (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) || // DevTools inspect
    (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) || // DevTools console
    (e.key === 'F12') || // DevTools
    (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // View source
    (e.ctrlKey && (e.key === 's' || e.key === 'S')) // Save page
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

const ProtectedApp = () => {
  useEffect(() => {
    // Disable context menu
    document.addEventListener('contextmenu', disableContextMenu);

    // Disable keyboard shortcuts
    document.addEventListener('keydown', disableKeyboardShortcuts);

    // Disable drag and drop
    document.addEventListener('dragstart', (e) => e.preventDefault());

    // Disable copy
    document.addEventListener('copy', (e) => e.preventDefault());

    // Disable cut
    document.addEventListener('cut', (e) => e.preventDefault());

    // Detect screen recording attempts
    const detectScreenRecording = () => {
      if (document.visibilityState === 'hidden') {
        console.log('Possible screen recording detected');
      }
    };

    document.addEventListener('visibilitychange', detectScreenRecording);

    // Disable text selection on mobile
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('dragstart', (e) => e.preventDefault());
      document.removeEventListener('copy', (e) => e.preventDefault());
      document.removeEventListener('cut', (e) => e.preventDefault());
      document.removeEventListener('visibilitychange', detectScreenRecording);
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>
);
