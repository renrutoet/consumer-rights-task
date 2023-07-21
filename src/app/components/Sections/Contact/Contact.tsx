import { Icon } from '../../Icon/Icon'
import pageStyles from '../../../styles/Page.module.scss'
import textStyles from '../../../styles/text.module.scss'
import contactStyles from './Contact.module.scss'
import { Row } from '../../Row/Row'

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
                <Row>
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
                </Row>
            </div>
            <div className={`${contactStyles['contact']} `}>
                <h4 className={`${contactStyles['contact__title']} `}>
                    Enquire online
                </h4>
                <div className={`${contactStyles['contact__form']} `}>
                    <div
                        className={`${contactStyles['contact__form__left-column']}`}
                    >
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email address" />
                        <input type="text" placeholder="Phone number" />
                        <button
                            className={`${pageStyles['button']} ${pageStyles['button--small']}`}
                        >
                            Send Message*
                        </button>
                    </div>
                    <textarea
                        placeholder="Message"
                        className={`${contactStyles['contact__form__message']} `}
                    />
                </div>
                <p className={`${contactStyles['contact__legal']}`}>
                    *By pressing send you consent to Digital Litigation Partners
                    collecting your submitted information in order to respond to
                    your enquiry. For more information view our{' '}
                    <a href="#">Privacy Policy</a>
                </p>
            </div>
            <div className={`${contactStyles['footer-details']} `}>
                <Row>
                    <div>Logo</div>
                    <div>Logo</div>
                    <div>Logo</div>
                    <div>Logo</div>
                </Row>
                <p
                    className={`${textStyles['font-secondary']} ${textStyles['font-secondary--italic']} ${textStyles['text-center']}`}
                >
                    Copyright © 2019 Digital Litigation Partners. All rights
                    reserved. | Terms & Condtitions | Privacy Policy
                </p>
            </div>
        </section>
    )
}
