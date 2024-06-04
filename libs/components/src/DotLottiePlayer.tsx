'use client';

import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

type DotLottiePlayerProps = {
  src: string;
};

export const DotLottiePlayer = ({ src, ...rest }: DotLottiePlayerProps) => {
  const [dotLottie, setDotLottie] = useState<DotLottie>();
  const dotLottieRefCallback = (dotLottieRef: DotLottie) => {
    /**
     * Repo/Package: @lottiefiles/dotlottie-react
     *
     * Overview:
     * The `DotLottieReact.dotLottieRefCallback` parameter `dotLottieRef` value is null.
     * The `useDotLottie` hook handling of refs needs to be investigated: https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs
     * Also the `useStableCallback` hook called within useEffect needs to be investigated as well: https://react.dev/reference/rules/rules-of-hooks
     *
     * https://github.com/LottieFiles/dotlottie-web/blob/main/packages/react/src/dotlottie.tsx
     * https://github.com/LottieFiles/dotlottie-web/blob/main/packages/react/src/use-dotlottie.tsx
     *
     *  */
    console.log(`>>> dotLottieRef`, dotLottieRef);
    //   setDotLottie(dotLottieRef);
  };

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  function pause() {
    if (dotLottie) {
      dotLottie.pause();
    }
  }

  function stop() {
    if (dotLottie) {
      dotLottie.stop();
    }
  }

  function seek() {
    if (dotLottie) {
      dotLottie.setFrame(30);
    }
  }

  return (
    <>
      <DotLottieReact
        src={src}
        autoplay
        loop
        dotLottieRefCallback={dotLottieRefCallback}
        {...rest}
      />
      {/* <div className="flex gap-2">
        <Button
          className="rounded-md bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={play}
        >
          Play
        </Button>
        <Button
          className="rounded-md bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={pause}
        >
          Pause
        </Button>
        <Button
          className="rounded-md bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={stop}
        >
          Stop
        </Button>
        <Button
          className="rounded-md bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={seek}
        >
          Seek to frame no. 30
        </Button>
      </div> */}
    </>
  );
};
