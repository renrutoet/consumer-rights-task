FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV="production"

COPY package.json package-lock.json  ./

RUN npm ci

COPY .  ./

RUN npm run build

COPY /.next/static/css .next/standalone/.next/static/css
COPY /public ./.next/standalone/public

CMD ["node", "./.next/standalone/server.js"]

