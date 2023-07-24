export interface linksType {
    text: string
    url: string
}

export const contentData = {
    generic: {
        buttonText: 'LEARN MORE',
    },
    hero: {
        title: 'We are the Digital Litigation Partners',
        navbar: {
            links: [
                { text: 'What we do', url: '#' },
                { text: 'Our work', url: '#our-work' },
                { text: 'News', url: '#' },
                { text: 'Who we are', url: '#what-we-do' },
                { text: 'Get in touch', url: '#contact' },
            ],
            logoUrl: '/dlp-logo.svg',
        },
    },
    whatWeDo: {
        backgroundText: 'Automation',
        top: {
            title: 'Automate your business',
            paragraphs: [
                'Nulla non ligula efficitur, venenatis leo a, aliquameros. Vivamus vitae dictum nisi. Aliquam at arcu orci.Cras sapien mauris, facilisis ut enim ut, pharetrainterdum felis. Proin id ante ante. Maecenas sodalesultrices ornare. Duis commodo sem et volutpat malesuada.Duis elit mi, interdum id posuere ut, semper elementumturpis. Sed varius volutpat quam id maximus.',
                'Donec efficitur velit erat, eget facilisis massa gravidaeget. Morbi varius dolor ut lectus fringilla, in euismodsapien tempor. Donec massa tellus, cursus sit amet semut, pellentesque scelerisque purus. Morbi a consecteturipsum. Sed metus risus, imperdiet in lorem vitae,vestibulum convallis nunc. Donec sed eros augue. Aliquamaliquet velit eget massa luctus, quis consectetur exinterdum.',
            ],
        },
        bottom: {
            paragraphs: [
                'Etiam elementum efficitur auctor. Duis tempor nisi utrisus pellentesque posuere. Fusce vehicula massa atsodales porta. Proin sodales, mauris ac blanditsagittis, nunc ligula auctor dolor, quis euismod ligulaerat eget erat. Aliquam faucibus libero vitae turpismolestie, feugiat commodo.',
            ],
        },
    },
    ourWork: {
        backgroundText: 'Digital Marketing',
        title: 'Automate your business',
        textContent: [
            {
                title: 'Web design and development',
                body: 'Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate necturpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sedvestibulum id quam feugiat efficitur. Etiam rhoncus pretium quamat cursus. Donec ac porttitor neque. In venenatis at lectus nontempus.',
            },
            {
                title: 'Search engine optimization',
                body: 'Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate necturpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sedvestibulum id quam feugiat efficitur. Etiam rhoncus pretium quamat cursus. Donec ac porttitor neque. In venenatis at lectus nontempus.',
            },
        ],
    },
    contact: {
        contactMethods: {
            phone: '0151 111 2222',
            address: '123 Address Street, L1 2XY',
            email: 'info@dlp.com',
        },
        form: {
            heading: 'Enquire online',
            disclaimer: {
                text: '*By pressing send you consent to Digital Litigation Partners collecting your submitted information in order to respond to your enquiry. For more information view our ',
                linkText: 'Privacy Policy',
            },
        },
        footer: 'Copyright © 2019 Digital Litigation Partners. All rights reserved. | Terms & Condtitions | Privacy Policy',
    },
}
