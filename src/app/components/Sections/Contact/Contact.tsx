import pageStyles from '../../../styles/Page.module.scss'
import { Icon } from '../../Icon/Icon'
import contactStyles from './Contact.module.scss'

const mockData = [
    {
        text: '0151 111 2222',
        content: (
            <img
                src="/icons/phone-incoming-call.svg"
                alt="phone number icon"
                className={contactStyles.icons}
            />
        ),
    },
    {
        text: '123 Address Street, L1 2XY',
        content: (
            <img
                src="/icons/house-chimney-2.svg"
                alt="address icon"
                className={contactStyles.icons}
            />
        ),
    },
    {
        text: 'info@dlp.com',
        content: (
            <img
                src="/icons/send-email-1.svg"
                alt="email icon"
                className={contactStyles.icons}
            />
        ),
    },
]

export const Contact = () => {
    return (
        <section
            className={`${pageStyles.section} ${contactStyles['get-in-touch']} `}
        >
            <div className={`${contactStyles['contact-methods']} `}>
                {mockData
                    ? mockData.map((iconData, index) => {
                          return (
                              <Icon
                                  key={`contact-methods-${index}`}
                                  text={iconData.text}
                                  content={iconData.content}
                              />
                          )
                      })
                    : null}
            </div>
            <div className={`${contactStyles['contact-form']} `}>
                CONTACT FORM
            </div>
            <div className={`${contactStyles['footer-details']} `}>
                Footer details
            </div>
        </section>
    )
}
