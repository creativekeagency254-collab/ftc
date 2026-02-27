import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerServiceWorker, isStackBlitzEnvironment } from './utils/pwaUtils';

// Add error boundary for debugging
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error: Root element not found. Please check the HTML structure.</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    // Register service worker for PWA functionality (skip on StackBlitz)
    if ('serviceWorker' in navigator && !isStackBlitzEnvironment()) {
      window.addEventListener('load', async () => {
        try {
          const registration = await registerServiceWorker();
          if (registration) {
            console.log('PWA: Service Worker registered successfully');
            
            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60000); // Check every minute
          }
        } catch (error) {
          console.error('PWA: Service Worker registration failed:', error);
        }
      });
    } else if (isStackBlitzEnvironment()) {
      console.log('PWA: Running on StackBlitz, skipping service worker registration');
    }

    // Add PWA install prompt handling (skip on StackBlitz)
    if (!isStackBlitzEnvironment()) {
      let deferredPrompt: any;
      
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        console.log('PWA: Install prompt available');
      });

      window.addEventListener('appinstalled', () => {
        console.log('PWA: App was installed');
        deferredPrompt = null;
      });

      // Handle app updates
      let refreshing = false;
      navigator.serviceWorker?.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    }

  } catch (error) {
    console.error('Error rendering app:', error);
    rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error loading application. Please check the console for details.</div>';
  }
}