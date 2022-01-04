import { getRepository } from "typeorm";
import { Product } from "../../../entities/Product";

export default {
  Query: {
    products: async () => {
      const repo = getRepository(Product);
      return await repo.find();
    },
  },
};
