import Link from 'next/link';

export default function Page() {
  return (
    <div className="wrapper space-y-8 py-4">
      <h1 className="text-4xl font-bold">Oops! This page wasn't cached.</h1>
      <div className="flex justify-center">
        <Link
          href="/"
          className="bg-secondary text-secondary px-6 py-4 rounded-lg"
        >
          Home page
        </Link>
      </div>
    </div>
  );
}
