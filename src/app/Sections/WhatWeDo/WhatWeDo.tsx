import pageStyles from '@styles/Page.module.scss'
import whatWeDoStyles from './WhatWeDo.module.scss'
import { SplitBackground } from '@components/Graphics/SplitBackground/SplitBackground'
import { Column } from '@components/Layout/Column/Column'
import { AutomationContent } from './AutomationContent'
import { GraphicSection } from './GraphicSection'
import { AdditonalContent } from './AdditionalContent'

export const WhatWeDo = ({
    cmsData,
}: Record<string, any>): React.JSX.Element => {
    const { whatWeDo } = cmsData
    return (
        <section className={`${whatWeDoStyles['what-we-do']}`} id="what-we-do">
            <SplitBackground text={whatWeDo.backgroundText} />
            <Column classes={['flex-column--width-60']}>
                <AutomationContent cmsData={whatWeDo} />
                <GraphicSection />
                <AdditonalContent cmsData={cmsData} />
            </Column>
            <div
                className={`${pageStyles['centered-dash--bottom']} ${pageStyles['centered-dash--relative']}`}
            ></div>
        </section>
    )
}
