
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced content protection
const disableContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable all screenshot, copy, and print shortcuts
  if (
    e.key === 'PrintScreen' || 
    (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) ||
    (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5')) ||
    (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
    (e.metaKey && (e.key === 'p' || e.key === 'P')) ||
    (e.ctrlKey && e.key === 'c') || // Copy
    (e.metaKey && e.key === 'c') ||
    (e.ctrlKey && e.shiftKey && e.key === 'C')
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

const disableDragAndDrop = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

const ProtectedApp = () => {
  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', disableContextMenu);
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', disableKeyboardShortcuts);
    document.addEventListener('keyup', disableKeyboardShortcuts);
    
    // Disable drag and drop
    document.addEventListener('dragstart', disableDragAndDrop);
    document.addEventListener('drop', disableDragAndDrop);
    
    // Disable text selection on certain events
    document.addEventListener('selectstart', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('input') && !target.closest('textarea')) {
        e.preventDefault();
      }
    });
    
    // Prevent copy event
    document.addEventListener('copy', (e) => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        e.preventDefault();
        e.clipboardData?.setData('text/plain', '');
      }
    });

    // Disable screenshot APIs
    if ('mediaDevices' in navigator && 'getDisplayMedia' in navigator.mediaDevices) {
      navigator.mediaDevices.getDisplayMedia = function() {
        return Promise.reject(new Error('Screen capture is disabled'));
      };
    }

    // Add watermark overlay for extra protection
    const watermark = document.createElement('div');
    watermark.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 100px,
        rgba(0,0,0,0.01) 100px,
        rgba(0,0,0,0.01) 200px
      );
    `;
    document.body.appendChild(watermark);
    
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('keyup', disableKeyboardShortcuts);
      document.removeEventListener('dragstart', disableDragAndDrop);
      document.removeEventListener('drop', disableDragAndDrop);
      watermark.remove();
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>
);
