FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV="production"

COPY package.json package-lock.json  ./

RUN npm ci

COPY .  ./

RUN npm run build

CMD ["npm", "run", "start"]

