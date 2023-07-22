import contactStyles from './Contact.module.scss'
import textStyles from '../../../styles/text.module.scss'
import { Row } from '../../Row/Row'
import { IconWrapper } from '../../Icon/Icon'
import Image from 'next/image'
import facebookIcon from '../../../../../public/icons/social-media-facebook-1.svg'
import twitterIcon from '../../../../../public/icons/social-media-twitter.svg'
import instagramIcon from '../../../../../public/icons/social-instagram.svg'
import linkedinIcon from '../../../../../public/icons/professional-network-linkedin.svg'

const mockSocialMediaData = [
    {
        link: '#',
        content: (
            <Image
                src={facebookIcon}
                alt="facebook link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <Image
                src={twitterIcon}
                alt="twitter link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <Image
                src={instagramIcon}
                alt="instagram link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
    {
        link: '#',
        content: (
            <Image
                src={linkedinIcon}
                alt="linkedin link icon"
                className={contactStyles['icon--link']}
            />
        ),
    },
]

export const ContactFooter = () => {
    return (
        <div className={`${contactStyles['footer-details']} `}>
            <Row fullHeight>
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
