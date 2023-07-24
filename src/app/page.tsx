import { Hero } from './Sections/Hero/Hero'
import { Contact } from './Sections/Contact/Contact'
import { OurWork } from './Sections/OurWork/OurWork'
import { WhatWeDo } from './Sections/WhatWeDo/WhatWeDo'

export default async function Home() {
    const res = await fetch('http://127.0.0.1:1337/api/dlp-contents', {
        cache: 'no-store',
    })
    const content = await res.json()

    const cmsData = content.data[0].attributes.data

    // console.log('cmsData', cmsData)

    return (
        <main>
            <Hero cmsData={cmsData} />
            <WhatWeDo cmsData={cmsData} />
            <OurWork cmsData={cmsData} />
            <Contact cmsData={cmsData} />
        </main>
    )
}
