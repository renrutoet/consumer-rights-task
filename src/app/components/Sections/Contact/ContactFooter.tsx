import contactStyles from './Contact.module.scss'
import textStyles from '../../../styles/text.module.scss'
import { Row } from '../../Row/Row'
import { IconWrapper } from '../../Icon/Icon'

const mockSocialMediaData = [
    {
        link: '#',
        content: (
            <img
                src="/icons/social-media-facebook-1.svg"
                alt="facebook link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <img
                src="/icons/social-media-twitter.svg"
                alt="twitter link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <img
                src="/icons/social-instagram.svg"
                alt="instagram link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <img
                src="/icons/professional-network-linkedin.svg"
                alt="linkedin link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
]

export const ContactFooter = () => {
    return (
        <div className={`${contactStyles['footer-details']} `}>
            <Row>
                {mockSocialMediaData
                    ? mockSocialMediaData.map((socialLink, index) => {
                          return (
                              <a
                                  key={`social-media-${index}`}
                                  href={socialLink.link}
                              >
                                  <IconWrapper>
                                      {socialLink.content}
                                  </IconWrapper>
                              </a>
                          )
                      })
                    : null}
            </Row>
            <p
                className={`${textStyles['font-secondary']} ${textStyles['font-secondary--italic']} ${textStyles['text-center']}`}
            >
                Copyright © 2019 Digital Litigation Partners. All rights
                reserved. | Terms & Condtitions | Privacy Policy
            </p>
        </div>
    )
}
