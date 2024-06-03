import styles from './page.module.css';
import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';
import { featuredPublicAnimationsQuery } from '../data/queries/featuredPublicAnimations';
import { AnimationCards } from '../components/AnimationCards';
import { Input } from '@headlessui/react';

const graphqlUrl = 'https://graphql.lottiefiles.com/2022-08';
const makeClient = () => {
  return createClient({
    url: graphqlUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export default async function Index() {
  const result = await getClient().query(featuredPublicAnimationsQuery, {});
  const data = result?.data?.featuredPublicAnimations?.edges;
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search animations"
            className="dark:bg-grey-700 text-black p-4 rounded-lg w-full"
          />
        </div>
        <div className="container grid grid-cols-3 gap-4 p-4">
          <AnimationCards data={data} />
        </div>
      </div>
    </div>
  );
}
