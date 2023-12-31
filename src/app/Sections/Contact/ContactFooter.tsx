import contactStyles from './Contact.module.scss'
import textStyles from '@styles/text.module.scss'
import { Row } from '@components/Layout/Row/Row'
import { IconWrapper } from '@components/Graphics/Icon/Icon'
import Image from 'next/image'
import facebookIcon from '@public/icons/social-media-facebook-1.svg'
import twitterIcon from '@public/icons/social-media-twitter.svg'
import instagramIcon from '@public/icons/social-instagram.svg'
import linkedinIcon from '@public/icons/professional-network-linkedin.svg'

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

export const ContactFooter = ({ cmsData }: Record<string, any>) => {
    const { contact } = cmsData
    return (
        <>
            <div className={`${contactStyles['footer-details']} `}>
                <Row height="full" responsive={false}>
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
                    className={`${textStyles['font--secondary']} ${textStyles['font--italic']} ${textStyles['text-center']}`}
                >
                    {contact.footer}
                </p>
            </div>
        </>
    )
}
