'use client';

import { WifiOff, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
            <WifiOff size={48} className="text-gray-400" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            You&apos;re Offline
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            It looks like you&apos;ve lost your internet connection.
            Don&apos;t worry, you can still access some features of EservOne.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleRefresh}
            className="w-full"
            size="lg"
          >
            <RefreshCw size={20} className="mr-2" />
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Home size={20} className="mr-2" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Offline Features Available
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• View cached service information</li>
            <li>• Access your saved preferences</li>
            <li>• Review previous bookings</li>
            <li>• Browse service categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 