import { PublicAnimationsCards } from './PublicAnimationsCards';

// type SearchAnimationData = {
//   id: string;
//   name: string;
//   jsonSource: string;
//   lottieSource: string;
//   imageSource: string;
// };

// async function getAnimationsSearchResults() {
//   const res = await fetch(
//     'https://lottiefiles.com/api/search/get-animations?query=loading+dots&type=all&aep=false&sort=popular&page=1'
//   );
//   const response = await res.json();
//   const data = response?.data?.data;
//   return data as SearchAnimationData[];
// }

// async function SearchResultAnimationsCards() {
//   const data = await getAnimationsSearchResults();
//   return (
//     // eslint-disable-next-line react/jsx-no-useless-fragment
//     <>
//       {data?.map((item) => {
//         return (
//           <AnimationCard
//             key={item.id}
//             className="dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl"
//             linkProps={{ href: `/animation?url=${item.jsonSource}` }}
//             header={<LottiePlayer src={item.lottieSource} />}
//             footer={<h2>{item.name}</h2>}
//           />
//         );
//       })}
//     </>
//   );
// }

export async function AnimationCards() {
  return (
    <>
      {/* <SearchResultAnimationsCards /> */}
      <PublicAnimationsCards />
    </>
  );
}
