'use client';

import {
  Player,
  Controls,
  IPlayerProps,
} from '@lottiefiles/react-lottie-player';
import { ComponentPropsWithRef } from 'react';

type LottiePlayerProps = ComponentPropsWithRef<'div'> & {
  src: string;
  showControls?: boolean;
  playerProps?: Omit<IPlayerProps, 'src'>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlProps?: any; // NOTE: IControlProps is not exported;
};

export const LottiePlayer = ({
  src,
  showControls,
  controlProps,
  playerProps,
  ...rest
}: LottiePlayerProps) => {
  return (
    <div {...rest}>
      <Player autoplay loop src={src} {...playerProps}>
        {showControls && (
          <Controls
            visible
            buttons={['play', 'repeat', 'frame', 'debug']}
            {...controlProps}
          />
        )}
      </Player>
    </div>
  );
};
