import { LottiePlayerPage } from 'apps/lottiefiles-apps/src/components/LottiePlayerPage';

type DynamicPageIdProps = {
  params: {
    id: string;
  };
};

export default function Page(props: DynamicPageIdProps) {
  return <LottiePlayerPage />;
}
