'use client'

import { Hero } from './Sections/Hero/Hero'
import { Contact } from './Sections/Contact/Contact'
import { OurWork } from './Sections/OurWork/OurWork'
import { WhatWeDo } from './Sections/WhatWeDo/WhatWeDo'

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
