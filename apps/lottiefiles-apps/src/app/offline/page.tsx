'use client';
import { Button } from '@headlessui/react';
import { useRouter } from 'next/router';

export default function OfflinePage() {
  const router = useRouter();
  return (
    <div className="wrapper space-y-8 py-4">
      <h1 className="text-4xl font-bold">Oops! This page wasn't cached.</h1>
      <div className="flex justify-center">
        <Button
          onClick={() => router.back()}
          className="bg-secondary text-secondary px-6 py-4 rounded-lg"
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
