'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LottiePlayer } from './LottiePlayer';

type AnimationData = {
  node: {
    id: string;
    name: string;
    imageUrl: string;
    lottieUrl: string;
    jsonUrl: string;
  };
};

type AnimationCardsProps = {
  data: AnimationData[];
};

export const AnimationCards = ({ data }: AnimationCardsProps) => {
  return (
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
              {/* <div className="relative">
                <Image
                  src={item.node.imageUrl}
                  alt={item.node.name}
                  width={300}
                  height={300}
                />
              </div> */}
            </div>
          </Link>
        );
      })}
    </>
  );
};
