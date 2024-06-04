'use client';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef, useState } from 'react';

type LottiePlayerProps = {
  src: string;
};

export const LottiePlayer = ({ src, ...rest }: LottiePlayerProps) => {
  return (
    <Player
      lottieRef={(instance) => {
        console.log(`>>> ref`, instance);
      }}
      autoplay
      loop
      src={src}
    >
      {/* <Controls visible buttons={['play', 'repeat', 'frame', 'debug']} /> */}
    </Player>
  );
};
