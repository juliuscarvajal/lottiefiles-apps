import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const graphqlUrl = 'https://graphql.lottiefiles.com/2022-08';
const makeClient = () => {
  return createClient({
    url: graphqlUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);
