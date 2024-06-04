'use client';

import { Button } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export const BackNav = () => {
  const router = useRouter();
  return <Button onClick={() => router.back()}>Back</Button>;
};
