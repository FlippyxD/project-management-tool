import styles from "./page.module.css";

import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main className={styles["main"]}>
      <h1>Project management tool</h1>
      <p>Your workspace starts here.</p>
    </main>
  );
}
