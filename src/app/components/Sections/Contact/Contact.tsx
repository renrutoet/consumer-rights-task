import Image from 'next/image'
import dlpFooter from '../../../../../public/dlp-footer-background.jpg'
import pageStyles from '../../../styles/Page.module.scss'
import contactStyles from './Contact.module.scss'
import { ContactMethods } from './ContactMethods'
import { ContactForm } from './ContactForm'
import { ContactFooter } from './ContactFooter'

export const Contact = () => {
    return (
        <section
            className={`${pageStyles.section} ${contactStyles['get-in-touch']} `}
        >
            <Image
                alt="faint image of office"
                src={dlpFooter}
                placeholder="blur"
                fill
                style={{
                    zIndex: -1,
                    objectFit: 'cover',
                }}
            />
            <ContactMethods />
            <ContactForm />
            <ContactFooter />
        </section>
    )
}
