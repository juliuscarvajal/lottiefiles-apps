'use client';
import { Button } from '@headlessui/react';

export type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError(props: GlobalErrorProps) {
  return (
    <div className="">
      <div className="wrapper space-y-8 py-4">
        <h1 className="text-4xl font-bold">
          Oops! There's nothing here. Please try another one.
        </h1>
        <div className="flex justify-center">
          <Button
            onClick={props.reset}
            className="bg-secondary text-secondary px-6 py-4 rounded-lg"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
