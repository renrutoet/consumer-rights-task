import Image from 'next/image'
import phoneChattingIcon from '@public/icons/phone-chatting.svg'
import fileIcon from '@public/icons/common-file-text-edit.svg'
import emailIcon from '@public/icons/send-email-1.svg'
import brainIcon from '@public/icons/settings-human.svg'
import { Circle } from '@/app/components/Graphics/Circle/Circle'
import { Row } from '@/app/components/Layout/Row/Row'
import whatWeDoStyles from './WhatWeDo.module.scss'
import pageStyles from '@styles/Page.module.scss'
import { IconWrapper } from '@/app/components/Graphics/Icon/Icon'

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

export const GraphicSection = () => {
    return (
        <>
            <div className={`${whatWeDoStyles['border-details__top-offset']}`}>
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
        </>
    )
}
