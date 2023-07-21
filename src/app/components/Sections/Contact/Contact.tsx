import { IconWrapper } from '../../Icon/Icon'
import pageStyles from '../../../styles/Page.module.scss'
import textStyles from '../../../styles/text.module.scss'
import contactStyles from './Contact.module.scss'
import { Row } from '../../Row/Row'
import { ContactMethods } from './ContactMethods'
import { ContactForm } from './ContactForm'
import { ContactFooter } from './ContactFooter'

export const Contact = () => {
    return (
        <section
            className={`${pageStyles.section} ${contactStyles['get-in-touch']} `}
        >
            <ContactMethods />
            <ContactForm />
            <ContactFooter />
        </section>
    )
}
