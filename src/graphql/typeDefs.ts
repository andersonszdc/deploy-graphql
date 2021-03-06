import path from "path";
import fs from "fs";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { gql } from "apollo-server";
import productSchema from "./modules/products/schema";

// const typesArray = loadFilesSync(
//   path.join(__dirname, "modules", "**", "*.gql")
// );

// export default mergeTypeDefs(typesArray);

const gqlWrapper = (...files: string[]) => {
  return gql`
    ${files}
  `;
};

export default gqlWrapper(productSchema);
