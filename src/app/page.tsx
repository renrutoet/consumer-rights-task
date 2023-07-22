'use client'

import { Hero } from './components/Sections/Hero/Hero'
import { Contact } from './components/Sections/Contact/Contact'
import { OurWork } from './components/Sections/OurWork/OurWork'
import { WhatWeDo } from './components/Sections/WhatWeDo/WhatWeDo'

export default function Home() {
    return (
        <main>
            <Hero />
            <WhatWeDo />
            <OurWork />
            <Contact />
        </main>
    )
}
