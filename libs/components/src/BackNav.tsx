'use client';

import { Button } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export const BackNav = () => {
  const router = useRouter();
  return (
    <Button
      className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg"
      onClick={() => router.back()}
    >
      Go back
    </Button>
  );
};
