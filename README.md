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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker instruction

Run this command to build the container

`docker build -t nextjs-docker .`

Run this command to create the image

`docker run -p 3000:3000 nextjs-docker`

You can now view the page on localhost:3000

# NOTE

There is small bug where you have to manually stop the container in the Docker Desktop app
This would the first step of building out the Docker capabilities as there are many more optimisations that could be made.
