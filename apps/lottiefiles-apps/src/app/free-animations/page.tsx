import { AnimationCards } from '@lottiefiles-apps/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="">
      <div className="wrapper space-y-8 py-4">
        <h1 className="text-4xl font-bold">Free Animations</h1>
        <div className="container grid grid-cols-autofill gap-4">
          <AnimationCards />
        </div>
        <div className="flex justify-center">
          <Link
            href="/explore"
            className="bg-secondary text-secondary px-6 py-4 rounded-lg"
          >
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
}
