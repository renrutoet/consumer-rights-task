'use client'

import { Hero } from './Sections/Hero/Hero'
import { Contact } from './Sections/Contact/Contact'
import { OurWork } from './Sections/OurWork/OurWork'
import { WhatWeDo } from './Sections/WhatWeDo/WhatWeDo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        fetch('http://localhost:1337/api/dlp-contents')
            .then((res) => res.json())
            .then((json) => console.log(json))
    }, [])

    return (
        <main>
            <Hero />
            <WhatWeDo />
            <OurWork />
            <Contact />
        </main>
    )
}

// export const getServerSideProps: GetServerSideProps<any> = async () => {
//     const res = await fetch('http://localhost:1337/api/dlp-contents')
//     console.log('res', res)
//     const content = await res.json()
//     console.log(content)

//     return { props: { content } }
// }
