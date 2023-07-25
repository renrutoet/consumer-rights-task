import textStyles from '@styles/text.module.scss'
import whatWeDoStyles from './WhatWeDo.module.scss'

export const AutomationContent = ({
    cmsData,
}: {
    cmsData: Record<string, any>
}) => {
    const splitTopTitle = cmsData.top.title.split(' ')

    return (
        <div className={`${whatWeDoStyles['top']}`}>
            <div className={`${whatWeDoStyles['top__grid--top-left']} `}></div>
            <div
                className={`${whatWeDoStyles['top__grid--top-right']} ${textStyles['font--secondary']} ${textStyles['font--regular']}`}
            >
                {cmsData.top.paragraphs[0]}
            </div>
            <h2
                className={`${whatWeDoStyles['top__grid--bottom-left']} ${textStyles['font--primary']} ${textStyles['font--bold']} ${textStyles['font--size-large']}`}
            >
                {`${splitTopTitle[0]} `}
                <span
                    className={` ${textStyles['font--secondary']} ${textStyles['font--bold']}`}
                >
                    <em>{`${splitTopTitle[1]} `} </em>
                </span>
                <br />
                <span className={` ${textStyles['font--size-xlarge']}`}>
                    {`${splitTopTitle[2]} `}
                </span>
            </h2>
            <div
                className={`${whatWeDoStyles['top__grid--bottom-right']} ${textStyles['font--primary']} ${textStyles['font--regular']}`}
            >
                {cmsData.top.paragraphs[1]}{' '}
            </div>
        </div>
    )
}
