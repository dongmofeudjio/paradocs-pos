import { PosEnvironment } from "./environment.model";

export const environment : PosEnvironment = {
  production: true,
  api : {
    url : {
        category : "https://category.paradocs.ca/api",
        product : "https://product.paradocs.ca/api"
    }
  }
};
