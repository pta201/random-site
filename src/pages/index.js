import styles from "../styles/Home.module.css";
import Category from "@/layout/Category";
import BestSeller from "@/layout/BestSeller";
import { fetchWooCommerceProducts } from "@/utils/API/wooCommerce";
export default function Home(props) {
  const { products } = props;

  // console.log("--WooCommerce Products: ", products);
  return (
    <div className={styles.container}>
      <main
        className="flex flex-col gap-4 lg:gap-12 "
        style={{ minHeight: "100vh" }}
      >
        <Category className="mb-8 lg:mb-12" />
        <BestSeller />
      </main>
    </div>
  );
}
// export async function getServerSideProps(context) {
//   const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
//     console.error(error)
//   );

//   if (!wooCommerceProducts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products: wooCommerceProducts.data,
//     },
//     // revalidate: 60 // regenerate page with new data fetch after 60 seconds
//   };
// }
// export const getStaticProps = async () => {
// const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
//   console.error(error)
// );
// if (!wooCommerceProducts) {
//   return {
//     // notFound: true,
//     props: {},
//   };
// }
// return {
//   props: {
//     products: wooCommerceProducts,
//   },
// revalidate: 60 // regenerate page with new data fetch after 60 seconds
// };
// };
