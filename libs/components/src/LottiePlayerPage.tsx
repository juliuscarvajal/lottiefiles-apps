'use client';

import { LottiePlayer } from './LottiePlayer';
import { useEffect, useState } from 'react';

function useLocalStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    const itemValue = localStorage.getItem(key);
    setValue(itemValue);
  }, [key]);
  return value;
}

export function LottiePlayerPage() {
  const url = useLocalStorage('currentAnimationUrl');
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
