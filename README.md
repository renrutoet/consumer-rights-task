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
-   Inital Dockerfile, this could do with improvements but it's a useful first step

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

First, Make sure to install all packages with:

`npm i`

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CMS Instructions

I've added a CMS which will allow the text content of the application to be changed via a CMS.
The CMS I've used is Strapi a Open Source option which I've used before.
It is a way to quickly get a CMS set up and should be capable of handling most use cases for a CMS and uses plugins to extend it default features.

For now only the text content can be modified and is done so via a JSON file editable via the Strapi Admin UI.
For production I would have this set up with full editable types which would be clear for none technical users and add the ability to swap out images.

The inital data (text to match the designs) is seeded when the CMS application is built, so should be avaliable straight away.

## Usage instruction:

After completing the setup (below), you will need to have the Strapi app and the front end running any time you want to edit content and view those changes.

### Access the Admin UI

To make changes to the content you will need to do so via the Admin UI.
To access this UI and make changes, please do the following.

1. Navigate into the `dlp-cms` directory
2. Run `npm i` if packages have not already been installed
3. create an `.env` from the `.env.example` - no values need to be changed
4. run `npm run develop`
5. navigate to `http://localhost:1337/admin`
6. Fill in the form to create an admin account - this does not create an account with strapi and is only used locally

You will have to make a one time change to the permissions to allow the REST API to be accessed.
One time Auth setup instructions:

1. Access the Admin UI
2. Click `Settings` in the left sidebar
3. Select `Roles` in the `User and Permissions Plugin`
4. Click `Public`
5. Click `DLP-content` in permissions
6. Check the `find` checkbox
7. Click save

This will allow requests to hit the Strapi REST API.

You will need to publish the CMS data before it can be viewed, this is covered in `Editing Content`.
You can access this REST API at `http://localhost:1337/api/dlp-contents` via a HTTP GET request.
In any publicly avaliable application we would restrict access to this API to certain roles, users, or applications, however for speed and simplicity we are making it publicly avaliable.

### Editing Content:

To change the content of the JSON file, do the following.

1. Access the Admin UI
2. On the left hand sidebar click `Content Manager`
3. Select the `DLP-content` if not already selected
4. Click the single field in the table shown
5. Edit the JSON as you want
6. Click save
7. Click publish if it is not already published
8. Refresh the dlp front end to view your change

Note: There is local fallback data in case of Strapi error so the page can still be viewed without Strapi running.
You can find it for reference at : `src/app/data/contentData.ts`
This is not used for the seed data however if you want to change that it is currently hardcoded in: `dlp-cms/index.js`

## Docker instruction

Run this command to build the container

`docker build -t nextjs-docker .`

Run this command to create the image

`docker run -p 3000:3000 nextjs-docker`

You can now view the page on localhost:3000

Note: There is small bug where you have to manually stop the container in the Docker Desktop app
The current Dockerfile is only the first step of building out the Docker capabilities as there are many more optimisations that could be made.
