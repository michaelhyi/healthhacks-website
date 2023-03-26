"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Application_1 = require("./entities/Application");
const User_1 = require("./entities/User");
const application_1 = require("./resolvers/application");
const user_1 = require("./resolvers/user");
const main = async () => {
    const conn = await (0, typeorm_1.createConnection)({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        entities: [User_1.User, Application_1.Application],
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
    });
    await User_1.User.delete({});
    await Application_1.Application.delete({});
    await conn.runMigrations();
    const app = (0, express_1.default)();
    app.set("trust proxy", 1);
    app.use((0, cors_1.default)({
        origin: process.env.ORIGIN,
        credentials: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver, application_1.ApplicationResolver],
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
//# sourceMappingURL=index.js.map