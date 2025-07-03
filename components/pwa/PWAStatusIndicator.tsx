'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePWA } from '@/hooks/usePWA';
import {
  Wifi,
  WifiOff,
  Bell,
  Smartphone,
  Settings
} from 'lucide-react';

export default function PWAStatusIndicator() {
  const { isInstalled, isStandalone, isOnline, requestNotificationPermission, sendNotification } = usePWA();
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNotificationPermission = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      sendNotification('Notifications enabled!', {
        body: 'You will now receive updates from EservOne',
      });
    }
  };

  const testNotification = () => {
    sendNotification('Test Notification', {
      body: 'This is a test notification from EservOne',
    });
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-2">
        {/* Online/Offline Status */}
        <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          {isOnline ? (
            <Wifi size={14} className="text-green-500" />
          ) : (
            <WifiOff size={14} className="text-red-500" />
          )}
          <span className="text-xs text-gray-600 dark:text-gray-300">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* PWA Status */}
        {isInstalled && (
          <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <Smartphone size={14} className="text-green-600 dark:text-green-400" />
            <span className="text-xs text-green-700 dark:text-green-300">
              Installed
            </span>
          </div>
        )}

        {/* Settings Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="h-8 w-8 p-0"
        >
          <Settings size={16} />
        </Button>
      </div>

      {/* PWA Details Panel */}
      {showDetails && (
        <div className="absolute top-12 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            PWA Settings
          </h3>

          <div className="space-y-3">
            {/* Status Info */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">App Status:</span>
                <span className={isInstalled ? 'text-green-600' : 'text-gray-500'}>
                  {isInstalled ? 'Installed' : 'Not Installed'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Display Mode:</span>
                <span className={isStandalone ? 'text-green-600' : 'text-gray-500'}>
                  {isStandalone ? 'Standalone' : 'Browser'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Connection:</span>
                <span className={isOnline ? 'text-green-600' : 'text-red-600'}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Button
                onClick={handleNotificationPermission}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Bell size={14} className="mr-2" />
                Enable Notifications
              </Button>

              <Button
                onClick={testNotification}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Test Notification
              </Button>
            </div>

            {/* PWA Features Info */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                PWA Features
              </h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Offline functionality</li>
                <li>• Push notifications</li>
                <li>• App-like experience</li>
                <li>• Background sync</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 