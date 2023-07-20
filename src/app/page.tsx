'use client'

import styles from './styles/Page.module.scss'
import { SplitBackground } from './components/SplitBackground/SplitBackground'
import { Hero } from './components/Sections/Hero/Hero'

export default function Home() {
    return (
        <main>
            <Hero />
            <section className={`${styles.section} ${styles['what-we-do']}`}>
                <SplitBackground text="Automation"></SplitBackground>
            </section>
            <section
                className={`${styles.section} ${styles['our-work']} `}
            ></section>
            <section
                className={`${styles.section} ${styles['get-in-touch']} `}
            ></section>
        </main>
    )
}
