# Welcome

Hi! Thanks for taking the time to view the repo of the app I created for the Consumer Rights Technical task.
This repo is currently public for easy viewing, let me know if you would like that to change for any reason.

I've create for you a single page application using NextJS to match the Figma designs provided.
Per the brief the app is responsive and looks good and Phone, Tablet and Desktop devices, and is Accessible.
I've had to make some design assumptions due to not having specific design for each device type, this scenario is something I would discuss with the team ideally.

Project breakdown:

-   NextJS
-   Typescript
-   Used SASS/SCSS for styling
-   No CSS framework
-   Tests using Jest and React Testing Library
-   Optimisation for Fonts and Images (including background)
-   Minimal packages used

I've not currently got a CMS as the source of truth for the content but I've taken the first step by having a single source of truth for the contentData which would be one of the first steps to implement that feature.
I've also added some VERY simple dummy form validation, for when fields are missing, this was so that my tests would have some real user interaction as that is one of most valuable use cases for tests.

There are some notes below about the basic usage of the app, which is all largely standard except one noteable bug if running the Dockerfile (mentioned at the bottom for awareness)

## Metrics

At the time of upload I'm getting the following lighthouse scores:
(With production build and in incognito to avoid extension conflicts)

Desktop:
Performance: 100
Accessibility: 100
Best Practises: 100
SEO: 100

Mobile:
Performance: 93
Accessibility: 100
Best Practises: 100
SEO: 100

I provide these figure for reference incase you get something wildly different, I can investigate the reason why.

## Create Next.js boilderplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker instruction

Run this command to build the container

`docker build -t nextjs-docker .`

Run this command to create the image

`docker run -p 3000:3000 nextjs-docker`

You can now view the page on localhost:3000

# NOTE

There is small bug where you have to manually stop the container in the Docker Desktop app
The current Dockerfile is only the first step of building out the Docker capabilities as there are many more optimisations that could be made.
