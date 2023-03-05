import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";

export const createUrqlClient = () => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL,
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {},
        },
      }),
      fetchExchange,
    ],
  };
};
