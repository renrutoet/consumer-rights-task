import Image from 'next/image'
import { IconWrapper } from '../../components/Graphics/Icon/Icon'
import { Row } from '../../components/Layout/Row/Row'
import { Circle } from '../../components/Graphics/Circle/Circle'
import contactStyles from './Contact.module.scss'
import pageStyles from '../../styles/Page.module.scss'
import phoneIcon from '../../../../public/icons/phone-incoming-call.svg'
import houseIcon from '../../../../public/icons/house-chimney-2.svg'
import emailIcon from '../../../../public/icons/send-email-1.svg'

const mockContactMethodData = [
    {
        text: '0151 111 2222',
        content: (
            <Image
                src={phoneIcon}
                alt="phone number icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
    {
        text: '123 Address Street, L1 2XY',
        content: (
            <Image
                src={houseIcon}
                alt="address icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
    {
        text: 'info@dlp.com',
        content: (
            <Image
                src={emailIcon}
                alt="email icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
]

export const ContactMethods = (): JSX.Element => {
    return (
        <>
            <div className={`${contactStyles['contact-methods']} `}>
                <div
                    className={`${contactStyles['contact-methods__border-details--top']}`}
                ></div>

                <Row height="normal">
                    {mockContactMethodData
                        ? mockContactMethodData.map((iconData, index) => {
                              return (
                                  <IconWrapper
                                      key={`contact-methods-${index}`}
                                      text={iconData.text}
                                      circle
                                  >
                                      {iconData.content}
                                  </IconWrapper>
                              )
                          })
                        : null}
                </Row>
                <div
                    className={`${contactStyles['contact-methods__border-details--bottom']}`}
                ></div>
            </div>
            <div>
                <div
                    className={`${pageStyles['centered-dash--bottom']} ${pageStyles['centered-dash--relative']} ${pageStyles['centered-dash--solid']}`}
                ></div>
            </div>
            <Circle greyScale />
        </>
    )
}
