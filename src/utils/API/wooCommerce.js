import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import ProductFormatter from "@/utils/Formatter/ProductList";
const api = new WooCommerceRestApi({
  url: "bebecook.vn",
  consumerKey: "ck_65130d9db14377e211f9fffba5e0673a4caefeec",
  consumerSecret: "cs_04c36395b5fa9149228b23f75e02ee570dbce1ee",
  version: "wc/v3",
});

//Fetch All Products
export const fetchWooCommerceProducts = async () => {
  try {
    const response = await api.get("products");
    const products = response.data.map((product) => ProductFormatter(product));

    return products;
  } catch (error) {
    throw new Error(error);
  }
};
// const consumerKey = "ck_65130d9db14377e211f9fffba5e0673a4caefeec";
// const consumerSecret = "cs_04c36395b5fa9149228b23f75e02ee570dbce1ee";
// const BASE_URL = "https://bebecook.vn/wp-json/wc/v3/";
// const api = {
//   get: async (url) => {
//     const res = await axios.get(
//       // `${BASE_URL} + ${url}`,
//       "https://bebecook.vn/wp-json/wc/v3/products",
//       {},
//       {
//         auth: {
//           consumerKey: consumerKey,
//           consumerSecret: consumerSecret,
//         },
//       }
//     );
//     console.log(res);
//   },
// };
