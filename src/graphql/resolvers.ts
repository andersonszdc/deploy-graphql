import path from "path";
import fs from "fs";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { gql } from "apollo-server";

const resolversArray = loadFilesSync(
  path.join(__dirname, "modules", "**", `resolvers.*`)
);

export default mergeResolvers(resolversArray);
