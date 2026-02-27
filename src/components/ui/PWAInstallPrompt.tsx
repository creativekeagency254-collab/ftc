import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Wifi, WifiOff } from 'lucide-react';
import { isStackBlitzEnvironment } from '../../utils/pwaUtils';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    // Don't show PWA prompt on StackBlitz
    if (isStackBlitzEnvironment()) {
      console.log('PWA: Skipping install prompt on StackBlitz');
      return;
    }

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone === true) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 6 seconds on every page refresh
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 6000);

      return () => clearTimeout(timer);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      
      // Show success message
      setTimeout(() => {
        alert('FarmTrack app installed successfully! You can now access it from your home screen.');
      }, 1000);
    };

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
      setTimeout(() => setShowOfflineMessage(false), 5000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setShowPrompt(false);
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Error during app installation:', error);
    }
  };

  const handleCancel = () => {
    setShowPrompt(false);
  };

  // Don't show if already installed, no prompt available, or on StackBlitz
  if (isInstalled || !showPrompt || !deferredPrompt || isStackBlitzEnvironment()) {
    return (
      <>
        {/* Offline indicator */}
        {showOfflineMessage && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-scaleUp">
            <div className="bg-orange-500 text-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
              <WifiOff size={20} />
              <div className="flex-1">
                <p className="font-medium">You're offline</p>
                <p className="text-sm opacity-90">The app will work offline with cached content</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slideInUp">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105 relative">
        
        {/* Produce background image */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400)'
          }}
        ></div>
        
        {/* Header with FarmTrack branding */}
        <div className="p-4 text-gray-800 relative overflow-hidden z-10">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-500/10 rounded-full translate-y-8 -translate-x-8"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                      backgroundImage: 'url(https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=100)'
                    }}
                  ></div>
                  <img
                    src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="FarmTrack BioSciences app icon"
                    className="w-6 h-6 object-contain relative z-10 filter drop-shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Get FarmTrack App</h3>
                  <p className="text-gray-600 text-xs">Access anywhere, anytime</p>
                </div>
              </div>
              <button
                onClick={handleCancel}
                className="w-8 h-8 rounded-full bg-gray-200/50 hover:bg-gray-200/70 flex items-center justify-center transition-colors duration-300"
              >
                <X size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Smartphone size={12} className="text-green-600" />
                </div>
                <span className="text-gray-700">Quick Access</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <WifiOff size={12} className="text-blue-600" />
                </div>
                <span className="text-gray-700">Works Offline</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <Download size={16} />
              <span>Install App</span>
            </button>
            
            <button
              onClick={handleCancel}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Later
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Free • No app store required • Works on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;