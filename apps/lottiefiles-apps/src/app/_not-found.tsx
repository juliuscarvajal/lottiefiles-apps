'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="">
      <div className="wrapper space-y-8 py-4">
        <h1 className="text-4xl font-bold">
          Oops! There something went wrong. Please try again.
        </h1>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-secondary text-secondary px-6 py-4 rounded-lg"
          >
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
