import whatWeDoStyles from './WhatWeDo.module.scss'
import textStyles from '@styles/text.module.scss'
import pageStyles from '@styles/Page.module.scss'

export const AdditonalContent = ({
    cmsData,
}: {
    cmsData: Record<string, any>
}) => {
    return (
        <>
            <div className={`${whatWeDoStyles.bottom}`}>
                <h2
                    className={`${textStyles['font--primary']} ${whatWeDoStyles['bottom__heading']}`}
                >
                    Vestibulum{' '}
                    <em>
                        <u>interdum</u>
                    </em>{' '}
                    leo a dolor porta,{' '}
                    <span className={`${textStyles['font--secondary']}`}>
                        <em>sed maximus</em>
                    </span>{' '}
                    quam venenatis?
                </h2>
                <div className={`${textStyles['font--primary']}`}>
                    {cmsData.whatWeDo.bottom.paragraphs[0]}
                </div>
                <button className={`${pageStyles.button}`}>
                    {cmsData.generic.buttonText}
                </button>
            </div>
        </>
    )
}
