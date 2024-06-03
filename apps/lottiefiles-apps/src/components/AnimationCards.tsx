'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { LottiePlayer } from './LottiePlayer';
import Image from 'next/image';

type AnimationData = {
  node: {
    id: string;
    name: string;
    imageUrl: string;
    lottieUrl: string;
  };
};

type AnimationCardsProps = {
  data: AnimationData[];
};

export const AnimationCards = ({ data }: AnimationCardsProps) => {
  const [src, setSrc] = useState<string>();
  return (
    <>
      {data?.map((item) => {
        return (
          <button
            key={item.node.id}
            className="p-2 bg-gray-700 rounded-xl"
            onClick={() => setSrc(item.node.lottieUrl)}
          >
            <div className="p-2 bg-gray-700 rounded-xl">
              <h2>{item.node.name}</h2>
              <div className="relative">
                <Image
                  src={item.node.imageUrl}
                  alt={item.node.name}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </button>
        );
      })}
      {src && (
        <Modal
          cta={{
            label: 'Nice',
          }}
          onClose={() => setSrc(undefined)}
        >
          <LottiePlayer src={src} />
        </Modal>
      )}
    </>
  );
};
