import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Application } from "./entities/Application";
import { User } from "./entities/User";
import { ApplicationResolver } from "./resolvers/application";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "healthhacks",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [User, Application],
  });

  const app = express();

  app.use(cors());

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [UserResolver, ApplicationResolver],
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
