import { appApi } from "../helpers/httpClient";

const getProducts = async () => {
  const url = "http://localhost:3000/posts";
  const reponse = await appApi.get(url);
  return reponse.data;
};
const ProductServices = {
  getProducts,
};

export { ProductServices };
