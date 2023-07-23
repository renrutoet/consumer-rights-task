import contactStyles from './Contact.module.scss'
import pageStyles from '../../../styles/Page.module.scss'

export const ContactForm = () => {
    return (
        <div className={`${contactStyles['contact']} `}>
            <form>
                <fieldset>
                    <legend>
                        <h2 className={`${contactStyles['contact__title']} `}>
                            <em>Enquire online</em>
                        </h2>
                    </legend>

                    <div className={`${contactStyles['contact__form']} `}>
                        <div
                            className={`${contactStyles['contact__form__left-column']}`}
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                aria-label="name field"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                aria-label="email field"
                            />
                            <input
                                type="number"
                                placeholder="Phone number"
                                aria-label="phone number field"
                            />
                            <button
                                type="submit"
                                className={`${pageStyles['button']} ${pageStyles['button--small']}`}
                                aria-label="submit message button"
                            >
                                Send Message*
                            </button>
                        </div>
                        <textarea
                            placeholder="Message"
                            className={`${contactStyles['contact__form__message']} `}
                            aria-label="message field"
                        />
                    </div>
                </fieldset>
            </form>

            <p className={`${contactStyles['contact__legal']}`}>
                *By pressing send you consent to Digital Litigation Partners
                collecting your submitted information in order to respond to
                your enquiry. For more information view our{' '}
                <a href="#">Privacy Policy</a>
            </p>
        </div>
    )
}
