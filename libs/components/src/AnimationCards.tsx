import Link from 'next/link';
import { LottiePlayer } from './LottiePlayer';
import { getFeaturedPublicAnimations } from '@lottiefiles-apps/data';

type SearchAnimationData = {
  id: string;
  name: string;
  jsonSource: string;
  lottieSource: string;
  imageSource: string;
};

async function getAnimationsSearchResults() {
  const res = await fetch(
    'https://lottiefiles.com/api/search/get-animations?query=loading+dots&type=all&aep=false&sort=popular&page=1'
  );
  const response = await res.json();
  const data = response?.data?.data;
  return data as SearchAnimationData[];
}

async function SearchResultAnimationsCards() {
  const data = await getAnimationsSearchResults();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item) => {
        return (
          <Link
            key={item.id}
            className="p-2 bg-gray-700 rounded-xl"
            href={`/animation/${item.id}?url=${item.jsonSource}`}
          >
            <div className="p-2 bg-gray-700 rounded-xl">
              <h2>{item.name}</h2>
              <LottiePlayer src={item.lottieSource} />
            </div>
          </Link>
        );
      })}
    </>
  );
}

async function PublicAninationsCards() {
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

export async function AnimationCards() {
  return (
    <>
      <SearchResultAnimationsCards />
      <PublicAninationsCards />
    </>
  );
}
