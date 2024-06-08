'use client';
import {
  Controls,
  IPlayerProps,
  Player,
} from '@lottiefiles/react-lottie-player';
import { ComponentPropsWithRef } from 'react';
import { DotLottiePlayer } from './DotLottiePlayer';

type LottiePlayerProps = ComponentPropsWithRef<'div'> & {
  src: string;
  showControls?: boolean;
  playerProps?: Omit<IPlayerProps, 'src'>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlProps?: any; // NOTE: IControlProps is not exported;
};

const JSONLottiePlayer = ({
  src,
  showControls,
  controlProps,
  playerProps,
}: LottiePlayerProps) => {
  return (
    <Player autoplay loop src={src} {...playerProps}>
      {showControls && (
        <Controls
          transparentTheme
          visible
          buttons={['play', 'repeat', 'frame', 'debug']}
          {...controlProps}
        />
      )}
    </Player>
  );
};

export const LottiePlayer = ({
  src,
  showControls,
  controlProps,
  playerProps,
  ...rest
}: LottiePlayerProps) => {
  if (!src) {
    return null;
  }
  return (
    <div {...rest}>
      {src.endsWith('.json') ? (
        <JSONLottiePlayer
          src={src}
          showControls={showControls}
          controlProps={controlProps}
          playerProps={playerProps}
        />
      ) : (
        <DotLottiePlayer src={src} />
      )}
    </div>
  );
};
