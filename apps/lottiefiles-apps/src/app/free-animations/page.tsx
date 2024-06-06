import { Button, Input } from '@headlessui/react';
import { AnimationCards } from '@lottiefiles-apps/components';

export default function Page() {
  return (
    <div className="">
      <div className="wrapper space-y-4 py-4">
        <form
          action={async (e: FormData) => {
            'use server';
            console.log(`>>> form`, e);
            const res = await fetch(
              'https://lottiefiles.com/api/search/get-animations?query=loading+dots&type=all&aep=false&sort=popular&page=1'
            );
            const data = await res.json();
            console.log(`>>> data`, data?.data);
          }}
        >
          <div className="flex gap-2">
            <Input
              type="search"
              name="search"
              placeholder="Search animations"
              className="dark:bg-gray-700 dark:text-white p-4 rounded-lg w-full border border-gray-900/20"
            />
            <Button
              type="submit"
              className="bg-primary text-primary px-8 rounded-lg"
            >
              Search
            </Button>
          </div>
        </form>
        <div className="container grid grid-cols-autofill gap-4">
          <AnimationCards />
        </div>
      </div>
    </div>
  );
}
