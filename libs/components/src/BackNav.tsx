'use client';
import { Button, ButtonProps } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export const BackNav = ({ className = '', ...rest }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      className={`bg-primary text-primary px-8 py-4 rounded-lg ${className}`}
      onClick={() => router.back()}
      {...rest}
    >
      Go back
    </Button>
  );
};
