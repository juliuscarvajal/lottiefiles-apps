'use client';

import { useSearchParams } from 'next/navigation';
import { LottiePlayer } from './LottiePlayer';

export function LottiePlayerPage() {
  const queryParams = useSearchParams();
  const url = queryParams.get('url');
  if (!url) {
    return null;
  }
  return (
    <LottiePlayer
      src={url}
      className="max-w-md mx-auto"
      playerProps={{
        lottieRef: (instance) => {
          console.log(`>>> ref`, instance);
        },
      }}
      showControls
      controlProps={{
        className: 'bg-gray-700',
      }}
    />
  );
}
