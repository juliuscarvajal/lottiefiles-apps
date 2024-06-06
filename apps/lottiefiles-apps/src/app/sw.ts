import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { ExpirationPlugin, Serwist, StaleWhileRevalidate } from 'serwist';

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    ...defaultCache,
    {
      matcher: /\.(?:json|lottie)$/i,
      handler: new StaleWhileRevalidate({
        cacheName: 'lottiefiles-json',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 128,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
            maxAgeFrom: 'last-used',
          }),
        ],
      }),
    },
  ],
});

serwist.addEventListeners();
