import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../ContactForm'

const validationMessage = 'Invalid form - please fill in: '
const successMessage = 'Message Sent!'

const mockData = {
    name: 'John Smith',
    email: 'JohnSmith@test.com',
    phoneNumber: '08000000000',
    message: 'Here is a dummy message',
}

describe('Contact Form Test', () => {
    it('should render the form elements with aria labels', () => {
        render(<ContactForm />)

        screen.getByLabelText('name field')
        screen.getByLabelText('email field')
        screen.getByLabelText('UK phone number field')
        screen.getByLabelText('message field')
        screen.getByRole('button', { name: /send message/i })
    })

    it('should show validation error message with invalid data', async () => {
        render(<ContactForm />)

        const nameField = screen.getByLabelText('name field')
        const emailField = screen.getByLabelText('email field')
        const phoneNumberField = screen.getByLabelText('UK phone number field')
        const messageField = screen.getByLabelText('message field')
        const submitButton = screen.getByRole('button', {
            name: /send message/i,
        })

        await userEvent.click(submitButton)

        const errorMessage = screen.getByText(new RegExp(validationMessage))
        screen.getByText(/NAME field/i)
        screen.getByText(/EMAIL field/i)
        screen.getByText(/PHONE NUMBER field/i)
        screen.getByText(/MESSAGE field/i)
    })

    it('should show only relevant validation error messages', async () => {
        render(<ContactForm />)

        const nameField = screen.getByLabelText('name field')
        const emailField = screen.getByLabelText('email field')
        const phoneNumberField = screen.getByLabelText('UK phone number field')
        const messageField = screen.getByLabelText('message field')
        const submitButton = screen.getByRole('button', {
            name: /send message/i,
        })

        await userEvent.type(nameField, mockData.name)
        await userEvent.type(emailField, mockData.email)
        await userEvent.click(submitButton)

        screen.getByText(new RegExp(validationMessage))
        expect(screen.queryByText(/NAME field/i)).not.toBeInTheDocument
        expect(screen.queryByText(/EMAIL field/i)).not.toBeInTheDocument
        screen.getByText(/PHONE NUMBER field/i)
        screen.getByText(/MESSAGE field/i)
    })

    it('should show success on message send', async () => {
        render(<ContactForm />)

        const nameField = screen.getByLabelText('name field')
        const emailField = screen.getByLabelText('email field')
        const phoneNumberField = screen.getByLabelText('UK phone number field')
        const messageField = screen.getByLabelText('message field')
        const submitButton = screen.getByRole('button', {
            name: /send message/i,
        })

        await userEvent.type(nameField, mockData.name)
        await userEvent.type(emailField, mockData.email)
        await userEvent.type(phoneNumberField, mockData.phoneNumber)
        await userEvent.type(messageField, mockData.message)
        await userEvent.click(submitButton)

        screen.getByText(new RegExp(successMessage))
    })

    it('should show entered details on message send', async () => {
        render(<ContactForm />)

        const nameField = screen.getByLabelText('name field')
        const emailField = screen.getByLabelText('email field')
        const phoneNumberField = screen.getByLabelText('UK phone number field')
        const messageField = screen.getByLabelText('message field')
        const submitButton = screen.getByRole('button', {
            name: /send message/i,
        })

        await userEvent.type(nameField, mockData.name)
        await userEvent.type(emailField, mockData.email)
        await userEvent.type(phoneNumberField, mockData.phoneNumber)
        await userEvent.type(messageField, mockData.message)
        await userEvent.click(submitButton)

        const successMessageElement = screen.getByText(
            new RegExp(successMessage)
        )
        const successContainer = successMessageElement?.parentNode

        within(successContainer).getByText(new RegExp(mockData.name))
        within(successContainer).getByText(new RegExp(mockData.email))
        within(successContainer).getByText(new RegExp(mockData.phoneNumber))
        within(successContainer).getByText(new RegExp(mockData.message))
    })
})
