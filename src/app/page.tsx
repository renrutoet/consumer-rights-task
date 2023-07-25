import { Hero } from './Sections/Hero/Hero'
import { Contact } from './Sections/Contact/Contact'
import { OurWork } from './Sections/OurWork/OurWork'
import { WhatWeDo } from './Sections/WhatWeDo/WhatWeDo'
import { contentData } from './data/contentData'

export default async function Home() {
    let cmsData
    try {
        const res = await fetch('http://127.0.0.1:1337/api/dlp-contents', {
            cache: 'no-store',
        })
        const content = await res.json()

        cmsData = JSON.parse(content.data[0].attributes.data)
    } catch {
        console.error('CMS FETCH FAILED')
    }

    const fallbackCMSData = contentData
    const cmsSource = cmsData || fallbackCMSData

    return (
        <main>
            <Hero cmsData={cmsSource} />
            <WhatWeDo cmsData={cmsSource} />
            <OurWork cmsData={cmsSource} />
            <Contact cmsData={cmsSource} />
        </main>
    )
}
