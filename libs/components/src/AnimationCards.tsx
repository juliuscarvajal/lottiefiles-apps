import Link from 'next/link';
import { LottiePlayer } from './LottiePlayer';
import { getFeaturedPublicAnimations } from '@lottiefiles-apps/data';

export async function AnimationCards() {
  const data = await getFeaturedPublicAnimations();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item) => {
        return (
          <Link
            key={item.node.id}
            className="p-2 bg-gray-700 rounded-xl"
            href={`/animation/${item.node.id}?url=${item.node.jsonUrl}`}
          >
            <div className="p-2 bg-gray-700 rounded-xl">
              <h2>{item.node.name}</h2>
              <LottiePlayer src={item.node.jsonUrl} />
            </div>
          </Link>
        );
      })}
    </>
  );
}
