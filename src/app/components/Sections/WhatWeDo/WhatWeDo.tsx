import Image from 'next/image'
import phoneChattingIcon from '../../../../../public/icons/phone-chatting.svg'
import fileIcon from '../../../../../public/icons/common-file-text-edit.svg'
import emailIcon from '../../../../../public/icons/send-email-1.svg'
import brainIcon from '../../../../../public/icons/settings-human.svg'
import { SplitBackground } from '../../SplitBackground/SplitBackground'
import textStyles from '../../../styles/text.module.scss'
import pageStyles from '../../../styles/Page.module.scss'
import whatWeDoStyles from './WhatWeDo.module.scss'
import { Column } from '../../Column/Column'
import { Row } from '../../Row/Row'
import { IconWrapper } from '../../Icon/Icon'

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

export const WhatWeDo = (): JSX.Element => {
    return (
        <section
            className={`${pageStyles.section} ${whatWeDoStyles['what-we-do']}`}
        >
            <SplitBackground text="Automation" />
            <Column classes={['flex-column--width-60']}>
                <div>
                    <div>TEST</div>
                    <div>TEST</div>
                    <div>TEST</div>
                </div>
                <Row height="eighth">
                    {mockIconData
                        ? mockIconData.map((iconData, index) => {
                              return (
                                  <IconWrapper
                                      key={`what-we-do-icons-${index}`}
                                      circle
                                  >
                                      {iconData.content}
                                  </IconWrapper>
                              )
                          })
                        : null}
                </Row>
                <div className={`${whatWeDoStyles.bottom}`}>
                    <h4
                        className={`${textStyles['font-primary']} ${whatWeDoStyles['bottom__heading']}`}
                    >
                        Vestibulum{' '}
                        <em>
                            <u>interdum</u>
                        </em>{' '}
                        leo a dolor porta,{' '}
                        <span className={`${textStyles['font-secondary']}`}>
                            <em>sed maximus</em>
                        </span>{' '}
                        quam venenatis?
                    </h4>
                    <div className={`${textStyles['font-primary']}`}>
                        Etiam elementum efficitur auctor. Duis tempor nisi ut
                        risus pellentesque posuere. Fusce vehicula massa at
                        sodales porta. Proin sodales, mauris ac blandit
                        sagittis, nunc ligula auctor dolor, quis euismod ligula
                        erat eget erat. Aliquam faucibus libero vitae turpis
                        molestie, feugiat commodo.
                    </div>
                    <button className={`${pageStyles.button}`}>
                        LEARN MORE
                    </button>
                </div>
            </Column>
        </section>
    )
}
