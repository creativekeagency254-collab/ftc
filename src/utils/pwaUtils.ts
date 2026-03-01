/**
 * PWA Utility Functions
 * Helper functions for Progressive Web App functionality
 */

export interface PWACapabilities {
  isStandalone: boolean;
  isInstallable: boolean;
  hasServiceWorker: boolean;
  isOnline: boolean;
  supportsNotifications: boolean;
  supportsBackgroundSync: boolean;
  isStackBlitz: boolean;
}

/**
 * Check if running on StackBlitz
 */
export const isStackBlitzEnvironment = (): boolean => {
  return window.location.hostname.includes('stackblitz') || 
         window.location.hostname.includes('webcontainer');
};

/**
 * Check PWA capabilities of the current browser/device
 */
export const checkPWACapabilities = (): PWACapabilities => {
  const isStackBlitz = isStackBlitzEnvironment();
  
  return {
    isStandalone: window.matchMedia('(display-mode: standalone)').matches || 
                  (window.navigator as any).standalone === true,
    isInstallable: !isStackBlitz && 'serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window,
    hasServiceWorker: !isStackBlitz && 'serviceWorker' in navigator,
    isOnline: navigator.onLine,
    supportsNotifications: 'Notification' in window,
    supportsBackgroundSync: !isStackBlitz && 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
    isStackBlitz
  };
};

/**
 * Register service worker with StackBlitz detection
 */
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  // Check if running on StackBlitz
  if (isStackBlitzEnvironment()) {
    console.log('PWA: Skipping service worker registration on StackBlitz');
    return null;
  }

  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    });

    console.log('Service Worker registered successfully:', registration);

    // Handle service worker updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New service worker is available
            console.log('New service worker available');
            
            // Optionally show update notification to user
            if (confirm('A new version of the app is available. Reload to update?')) {
              window.location.reload();
            }
          }
        });
      }
    });

    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
};

/**
 * Request notification permission
 */
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    console.warn('Notifications are not supported');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission === 'denied') {
    return 'denied';
  }

  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return 'denied';
  }
};

/**
 * Show local notification
 */
export const showNotification = (title: string, options?: NotificationOptions): void => {
  if (Notification.permission !== 'granted') {
    console.warn('Notification permission not granted');
    return;
  }

  const defaultOptions: NotificationOptions = {
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    ...options
  };

  new Notification(title, defaultOptions);
};

/**
 * Add to home screen prompt for iOS
 */
export const showIOSInstallPrompt = (): void => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isInStandaloneMode = (window.navigator as any).standalone;

  if (isIOS && !isInStandaloneMode) {
    // Show iOS-specific install instructions
    alert('To install this app on your iOS device, tap the share button and then "Add to Home Screen".');
  }
};

/**
 * Check if app is running in standalone mode
 */
export const isStandaloneMode = (): boolean => {
  return window.matchMedia('(display-mode: standalone)').matches || 
         (window.navigator as any).standalone === true;
};

/**
 * Get app installation status
 */
export const getInstallationStatus = (): 'installed' | 'installable' | 'not-supported' | 'stackblitz' => {
  if (isStackBlitzEnvironment()) {
    return 'stackblitz';
  }

  if (isStandaloneMode()) {
    return 'installed';
  }

  if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
    return 'installable';
  }

  return 'not-supported';
};

/**
 * Cache important resources
 */
export const cacheResources = async (urls: string[]): Promise<void> => {
  if (!('caches' in window) || isStackBlitzEnvironment()) {
    console.warn('Cache API not supported or running on StackBlitz');
    return;
  }

  try {
    const cache = await caches.open('farmtrack-manual-cache');
    await cache.addAll(urls);
    console.log('Resources cached successfully');
  } catch (error) {
    console.error('Failed to cache resources:', error);
  }
};

/**
 * Clear all caches
 */
export const clearAllCaches = async (): Promise<void> => {
  if (!('caches' in window) || isStackBlitzEnvironment()) {
    return;
  }

  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('All caches cleared');
  } catch (error) {
    console.error('Failed to clear caches:', error);
  }
};

/**
 * Get cache storage usage
 */
export const getCacheStorageUsage = async (): Promise<{ used: number; quota: number } | null> => {
  if (!('storage' in navigator && 'estimate' in navigator.storage) || isStackBlitzEnvironment()) {
    return null;
  }

  try {
    const estimate = await navigator.storage.estimate();
    return {
      used: estimate.usage || 0,
      quota: estimate.quota || 0
    };
  } catch (error) {
    console.error('Failed to get storage estimate:', error);
    return null;
  }
};

/**
 * Format bytes to human readable format
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Get device type
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const userAgent = navigator.userAgent;
  
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    return 'tablet';
  }
  
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
    return 'mobile';
  }
  
  return 'desktop';
};

/**
 * Track PWA usage analytics
 */
export const trackPWAEvent = (event: string, data?: any): void => {
  // This would integrate with your analytics service
  console.log('PWA Event:', event, data);
  
  // Example: Send to Google Analytics, Mixpanel, etc.
  if ((window as any).gtag) {
    (window as any).gtag('event', event, {
      event_category: 'PWA',
      event_label: 'FarmTrack App',
      custom_parameter_1: data
    });
  }
};
