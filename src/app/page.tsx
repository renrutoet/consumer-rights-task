'use client'

import styles from './styles/Page.module.scss'
import { SplitBackground } from './components/SplitBackground/SplitBackground'
import { Hero } from './components/Sections/Hero/Hero'
import { Contact } from './components/Sections/Contact/Contact'
import { OurWork } from './components/Sections/OurWork/OurWork'

export default function Home() {
    return (
        <main>
            <Hero />
            <section className={`${styles.section} ${styles['what-we-do']}`}>
                <SplitBackground text="Automation"></SplitBackground>
            </section>
            <OurWork />
            <Contact />
        </main>
    )
}
