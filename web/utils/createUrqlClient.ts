import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";

export const createUrqlClient = () => {
  return {
    url: "http://localhost:4000/graphql",
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
