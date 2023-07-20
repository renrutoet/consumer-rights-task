import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-source-sans-3',
    display: 'swap',
})
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Digital Litigation Partners',
    description:
        'We are Digital Litigation Partners. Experts in helping you automate your business with our best in class Web design, development and SEO expertise',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/dlp-logo.svg" sizes="any" />
            </head>
            <body className={`${sourceSans.variable} ${playfair.variable}`}>
                {children}
            </body>
        </html>
    )
}
