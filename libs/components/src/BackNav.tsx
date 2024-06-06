'use client';

import { Button, ButtonProps } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export const BackNav = ({ className = '', ...rest }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      className={`bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg ${className}`}
      onClick={() => router.back()}
      {...rest}
    >
      Go back
    </Button>
  );
};
