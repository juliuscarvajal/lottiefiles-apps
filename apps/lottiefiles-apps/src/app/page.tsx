import Link from 'next/link';
import styles from './page.module.css';
import { LottiePlayer } from '@lottiefiles-apps/components';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper py-4 md:py-24 flex flex-wrap md:grid md:grid-cols-2 items-center">
        <div className="space-y-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Find cool animations.
            <br />
            Works offline too...
          </h1>
          <div>
            <Link
              href="/free-animations"
              className="bg-primary text-primary text-lg px-8 py-4 rounded-lg"
            >
              See some animations
            </Link>
          </div>
        </div>
        <div>
          <LottiePlayer src="https://assets-v2.lottiefiles.com/a/9d361936-1b17-11ef-a120-3b9cdab96790/29cA9SZojU.json" />
        </div>
      </div>
    </div>
  );
}
