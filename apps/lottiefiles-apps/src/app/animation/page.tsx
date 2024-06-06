import { LottiePlayerPage } from '@lottiefiles-apps/components';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LottiePlayerPage />
    </Suspense>
  );
}
