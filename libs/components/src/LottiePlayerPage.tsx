'use client';
import { useSearchParams } from 'next/navigation';
import { LottiePlayer } from './LottiePlayer';

export function LottiePlayerPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
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
