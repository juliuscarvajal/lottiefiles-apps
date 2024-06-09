'use client';
import {
  Controls,
  IPlayerProps,
  Player,
} from '@lottiefiles/react-lottie-player';
import { ComponentPropsWithRef } from 'react';
import { DotLottiePlayer } from './DotLottiePlayer';
import Lottie from 'react-lottie-player';
import LottieLight from 'react-lottie-player/dist/LottiePlayerLight';

type LottiePlayerProps = ComponentPropsWithRef<'div'> & {
  src: string;
  preview?: boolean;
  showControls?: boolean;
  playerProps?: Omit<IPlayerProps, 'src'>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlProps?: any; // NOTE: IControlProps is not exported;
};

const USE_LOTTIE_PLAYER = true;

const JSONLottiePlayer = ({
  preview,
  src,
  showControls,
  controlProps,
  playerProps,
}: LottiePlayerProps) => {
  if (preview) {
    return <LottieLight loop play path={src} />;
  }
  if (USE_LOTTIE_PLAYER) {
    return <Lottie loop play path={src} />;
  }
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
  preview,
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
          preview={preview}
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

export default LottiePlayer;
