import React, { useState } from 'react'
import Link from 'next/link'
import contactStyles from './Contact.module.scss'
import textStyles from '@styles/text.module.scss'
import pageStyles from '@styles/Page.module.scss'
import { Input } from '@components/UI/Input/Input'
import { contentData } from '@/app/data/contentData'

interface Message {
    success: string
    name: string
    email: string
    phoneNumber: string
    message: string
}

export const ContactForm = () => {
    const [validationError, setValidationError] = useState('')
    const [messageSent, setMessageSent] = useState<Message | null>(null)
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
        setMessageSent({
            success: 'Message Sent!',
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        })
    }

    return (
        <div className={`${contactStyles['contact']} `}>
            <form onSubmit={dummySubmit}>
                <fieldset>
                    <legend>
                        <h2 className={`${contactStyles['contact__title']} `}>
                            <em>{contentData.contact.form.heading}</em>
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
                        className={`${contactStyles['validation--error']} ${textStyles['font--primary']}`}
                    >
                        {validationError}
                    </div>
                ) : null}
                {messageSent ? (
                    <div
                        className={`${contactStyles['validation--success']} ${textStyles['font--primary']}`}
                    >
                        <div
                            className={`${textStyles['font--secondary']} ${textStyles['font--size-large']} `}
                        >
                            {messageSent.success}
                        </div>
                        <p>
                            Name:
                            {messageSent.name}
                        </p>
                        <p>
                            Email:
                            {messageSent.email}
                        </p>
                        <p>
                            Phone Number:
                            {messageSent.phoneNumber}
                        </p>
                        <p>
                            Message:
                            {messageSent.message}
                        </p>
                    </div>
                ) : null}
            </form>

            <p className={`${contactStyles['contact__legal']}`}>
                {contentData.contact.form.disclaimer.text}
                <Link href="#">
                    {contentData.contact.form.disclaimer.linkText}
                </Link>
            </p>
        </div>
    )
}
