import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { HiResolver } from "./resolvers/hi";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "healthhacks",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [],
  });

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:4000",
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HiResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

main().catch((e) => console.error(e));
