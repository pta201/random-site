import styles from "../styles/Home.module.css";
import Category from "@/layout/Category";
import BestSeller from "@/layout/BestSeller";
export default function Home() {
  return (
    <div className={styles.container}>
      <main
        className="flex flex-col gap-4 lg:gap-12"
        style={{ minHeight: "100vh" }}
      >
        <Category />
        <BestSeller />
      </main>
    </div>
  );
}
