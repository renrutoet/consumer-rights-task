import { IconWrapper } from '../../Icon/Icon'
import { Row } from '../../Row/Row'
import contactStyles from './Contact.module.scss'

const mockContactMethodData = [
    {
        text: '0151 111 2222',
        content: (
            <img
                src="/icons/phone-incoming-call.svg"
                alt="phone number icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
    {
        text: '123 Address Street, L1 2XY',
        content: (
            <img
                src="/icons/house-chimney-2.svg"
                alt="address icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
    {
        text: 'info@dlp.com',
        content: (
            <img
                src="/icons/send-email-1.svg"
                alt="email icon"
                className={contactStyles['icon--small']}
            />
        ),
    },
]

export const ContactMethods = (): JSX.Element => {
    return (
        <div className={`${contactStyles['contact-methods']} `}>
            <Row>
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
        </div>
    )
}
