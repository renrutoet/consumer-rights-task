import Image from 'next/image'
import phoneChattingIcon from '@public/icons/phone-chatting.svg'
import fileIcon from '@public/icons/common-file-text-edit.svg'
import emailIcon from '@public/icons/send-email-1.svg'
import brainIcon from '@public/icons/settings-human.svg'
import textStyles from '@styles/text.module.scss'
import pageStyles from '@styles/Page.module.scss'
import whatWeDoStyles from './WhatWeDo.module.scss'
import { SplitBackground } from '@components/Graphics/SplitBackground/SplitBackground'
import { Column } from '@components/Layout/Column/Column'
import { Row } from '@components/Layout/Row/Row'
import { IconWrapper } from '@components/Graphics/Icon/Icon'
import { Circle } from '@components/Graphics/Circle/Circle'
// import { contentData } from '@/app/data/contentData'

const mockIconData = [
    {
        content: <Image src={phoneChattingIcon} alt="phone device icon" />,
    },
    {
        content: <Image src={fileIcon} alt="file icon" />,
    },
    {
        content: <Image src={emailIcon} alt="email icon" />,
    },
    {
        content: <Image src={brainIcon} alt="mechanical brain icon" />,
    },
]

export const WhatWeDo = ({
    cmsData,
}: Record<string, any>): React.JSX.Element => {
    const { whatWeDo } = cmsData
    const splitTopTitle = whatWeDo.top.title.split(' ')
    return (
        <section className={`${whatWeDoStyles['what-we-do']}`} id="what-we-do">
            <SplitBackground text={whatWeDo.backgroundText} />
            <Column classes={['flex-column--width-60']}>
                <div className={`${whatWeDoStyles['top']}`}>
                    <div
                        className={`${whatWeDoStyles['top__grid--top-left']} `}
                    ></div>
                    <div
                        className={`${whatWeDoStyles['top__grid--top-right']} ${textStyles['font--secondary']} ${textStyles['font--regular']}`}
                    >
                        {whatWeDo.top.paragraphs[0]}
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
                        {whatWeDo.top.paragraphs[1]}{' '}
                    </div>
                </div>
                <div
                    className={`${whatWeDoStyles['border-details__top-offset']}`}
                >
                    <Circle />
                </div>
                <div
                    className={`${whatWeDoStyles['border-details__top-offset__bottom']}`}
                ></div>
                <div className={`${whatWeDoStyles.middle}`}>
                    <Row>
                        {mockIconData
                            ? mockIconData.map((iconData, index) => {
                                  return (
                                      <IconWrapper
                                          key={`what-we-do-icons-${index}`}
                                          circle
                                          fixed
                                      >
                                          {iconData.content}
                                      </IconWrapper>
                                  )
                              })
                            : null}
                    </Row>
                    <div
                        className={`${whatWeDoStyles['border-details__top']}`}
                    ></div>
                    <div
                        className={`${whatWeDoStyles['border-details__bottom']}`}
                    ></div>
                </div>
                <div className={`${whatWeDoStyles['border-details__offset']}`}>
                    <div
                        className={`${pageStyles['centered-dash--bottom']} ${pageStyles['centered-dash--relative']} ${pageStyles['centered-dash--solid']}`}
                    ></div>
                </div>
                <div className={`${whatWeDoStyles['circle--offset']}`}>
                    <Circle />
                </div>
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
                        {whatWeDo.bottom.paragraphs[0]}
                    </div>
                    <button className={`${pageStyles.button}`}>
                        {cmsData.generic.buttonText}
                    </button>
                </div>
            </Column>
            <div
                className={`${pageStyles['centered-dash--bottom']} ${pageStyles['centered-dash--relative']}`}
            ></div>
        </section>
    )
}
