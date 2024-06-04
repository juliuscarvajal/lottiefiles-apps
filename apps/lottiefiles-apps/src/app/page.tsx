import styles from './page.module.css';
import { Button, Input } from '@headlessui/react';
import { AnimationCards } from '@lottiefiles-apps/components';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="p-4">
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
            <Input
              type="search"
              placeholder="Search animations"
              className="dark:bg-grey-700 text-black p-4 rounded-lg w-full"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
        <div className="container grid grid-cols-3 gap-4 p-4">
          <AnimationCards />
        </div>
      </div>
    </div>
  );
}
