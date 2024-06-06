import { getFeaturedPublicAnimations } from '@lottiefiles-apps/data';
import { AnimationCard } from './AnimationCard';
import { LottiePlayer } from './LottiePlayer';

export async function PublicAnimationsCards() {
  const data = await getFeaturedPublicAnimations();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item) => {
        return (
          <AnimationCard
            key={item.node.id}
            className="dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl"
            url={`${item.node.jsonUrl}`}
            header={
              <LottiePlayer
                src={item.node.jsonUrl}
                className="bg-gray-100 dark:bg-gray-700"
              />
            }
            footer={<h2 className="truncate">{item.node.name}</h2>}
          />
        );
      })}
    </>
  );
}
