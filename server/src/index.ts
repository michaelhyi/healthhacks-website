import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Application } from "./entities/Application";
import { User } from "./entities/User";
import { ApplicationResolver } from "./resolvers/application";
import { ConfirmationResolver } from "./resolvers/confirmation";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    entities: [User, Application],
    migrations: [path.join(__dirname, "./migrations/*")],
  });

  await conn.runMigrations();

  const app = express();
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: false,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [UserResolver, ApplicationResolver, ConfirmationResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log("Server started on localhost:4000");
  });
};

main().catch((e) => console.error(e));
