import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

const isStandalone = () => {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as NavigatorStandalone).standalone === true ||
    document.referrer.includes("android-app://")
  );
};

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (isStandalone()) {
      console.log('App is already running in standalone mode');
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton || isStandalone()) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 right-6 bg-black text-white p-6 rounded-2xl shadow-2xl z-50 md:left-auto md:right-6 md:max-w-md border-2 border-yellow-400">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">ติดตั้งแอป</h3>
          <p className="text-sm opacity-95 leading-relaxed">
            ติดตั้งแอปนี้บนอุปกรณ์ของคุณเพื่อประสบการณ์ที่ดีกว่า
          </p>
        </div>
        <div className="flex flex-col gap-3 min-w-0">
          <button
            onClick={handleInstallClick}
            className="cursor-pointer px-6 py-3 text-base bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 active:scale-95 transition-all duration-200 font-bold shadow-md whitespace-nowrap"
          >
            ติดตั้ง
          </button>
          <button
            onClick={() => setShowInstallButton(false)}
            className="cursor-pointer px-6 py-2 text-sm bg-gray-800 rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-200 font-medium border border-yellow-400 whitespace-nowrap"
          >
            ทีหลัง
          </button>
        </div>
      </div>
    </div>
  );
}