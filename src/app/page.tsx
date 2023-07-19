import styles from "./styles/Page.module.scss";
import { SplitBackground } from "./components/SplitBackground/SplitBackground";

export default function Home() {
  return (
    <main>
      <section
        className={`${styles.section} ${styles["background--blue"]} ${styles["hero"]} `}
      ></section>
      <section className={`${styles.section} ${styles["what-we-do"]}`}>
        <SplitBackground text="Automation"></SplitBackground>
      </section>
      <section className={`${styles.section} ${styles["our-work"]} `}></section>
      <section
        className={`${styles.section} ${styles["get-in-touch"]} `}
      ></section>
    </main>
  );
}
