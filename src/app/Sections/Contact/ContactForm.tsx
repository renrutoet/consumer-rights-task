import contactStyles from './Contact.module.scss'
import textStyles from '@styles/text.module.scss'
import pageStyles from '@styles/Page.module.scss'
import React, { useState } from 'react'
import { Input } from '@components/UI/Input/Input'

export const ContactForm = () => {
    const [validationError, setValidationError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const dummySubmit = (event: any): void => {
        event.preventDefault()

        if (!name || !email || !phoneNumber || !message) {
            let missingFields = '\n'
            if (!name) {
                missingFields += ' NAME field --- '
            }
            if (!email) {
                missingFields += ' EMAIL field --- '
            }
            if (!phoneNumber) {
                missingFields += ' PHONE NUMBER field --- '
            }
            if (!message) {
                missingFields += ' MESSAGE field'
            }
            // alert('invalid form - please fill in: ' + missingFields)
            setValidationError(
                'Invalid form - please fill in: ' + missingFields
            )
            return
        }

        setValidationError('')
        alert(
            JSON.stringify(
                {
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    message: message,
                },
                null,
                2
            )
        )
    }

    return (
        <div className={`${contactStyles['contact']} `}>
            <form onSubmit={dummySubmit}>
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
                            <Input
                                type="text"
                                placeholder="Name"
                                aria-label="name field"
                                value={name}
                                maxLength={30}
                                changeCallback={setName}
                            />
                            <Input
                                type="email"
                                placeholder="Email address"
                                aria-label="email field"
                                value={email}
                                changeCallback={setEmail}
                            />
                            <Input
                                type="tel"
                                placeholder="UK Phone number"
                                aria-label="UK phone number field"
                                value={phoneNumber}
                                pattern="^\+?(44)?(0|7)\d{9,13}$"
                                changeCallback={setPhoneNumber}
                            />
                            <button
                                type="submit"
                                className={`${pageStyles['button']} ${pageStyles['button--small']}`}
                                aria-label="submit message button"
                            >
                                Send Message*
                            </button>
                        </div>
                        <Input
                            type="textarea"
                            placeholder="Message"
                            className={`${contactStyles['contact__form__message']} `}
                            aria-label="message field"
                            value={message}
                            changeCallback={setMessage}
                        />
                    </div>
                </fieldset>
                {validationError ? (
                    <div
                        className={`${contactStyles['validation-error']} ${textStyles['font--primary']}`}
                    >
                        {validationError}
                    </div>
                ) : null}
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
