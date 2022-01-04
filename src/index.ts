import dotenv from "dotenv";
import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import "./database";
import { getRepository } from "typeorm";
import { Product } from "./entities/Product";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

dotenv.config();

// const typeDefs2 = gql`
//   type Product {
//     name: String
//     description: String
//   }

//   type Query {
//     products: [Product]
//   }
// `;

const resolvers2 = {
  Query: {
    products: async () => {
      const repo = getRepository(Product);
      return await repo.find();
    },
  },
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
