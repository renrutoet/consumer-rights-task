import contactStyles from './Contact.module.scss'
import pageStyles from '../../../styles/Page.module.scss'

export const ContactForm = () => {
    return (
        <div className={`${contactStyles['contact']} `}>
            <h4 className={`${contactStyles['contact__title']} `}>
                <em>Enquire online</em>
            </h4>
            <div className={`${contactStyles['contact__form']} `}>
                <div
                    className={`${contactStyles['contact__form__left-column']}`}
                >
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email address" />
                    <input type="number" placeholder="Phone number" />
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
    )
}
