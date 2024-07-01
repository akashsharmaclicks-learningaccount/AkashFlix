import styles from "@/app/styles/common.module.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>

        <h2>Page Not Found</h2>
      </div>
    </section>
  );
}
