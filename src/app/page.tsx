import styles from "./styles/Page.module.scss";

export default function Home() {
  return (
    <main>
      <section className={`${styles.section} ${styles["background--blue"]} `}>
        Hello World
      </section>
      <section className={`${styles.section} ${styles["background--red"]} `}>
        Hello World
      </section>
      <section className={`${styles.section} ${styles["background--green"]} `}>
        Hello World
      </section>
      <section className={`${styles.section} ${styles["background--yellow"]} `}>
        Hello World
      </section>
    </main>
  );
}
