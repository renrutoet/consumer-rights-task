import styles from "./styles/Page.module.scss";

export default function Home() {
  return (
    <main>
      <section
        className={`${styles.section} ${styles["background--blue"]} ${styles["hero"]} `}
      ></section>
      <section className={`${styles.section} ${styles["what-we-do"]}`}>
        <div className={` ${styles["what-we-do__background-left"]}`}>
          <div className={`${styles["what-we-do__background-text"]}`}>
            Automation
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles["our-work"]} `}></section>
      <section
        className={`${styles.section} ${styles["get-in-touch"]} `}
      ></section>
    </main>
  );
}
