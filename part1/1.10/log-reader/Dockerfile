FROM node:16.13.0-alpine as base

WORKDIR /app
COPY package.json package-lock.json /app/

FROM base as build

RUN npm ci

COPY . /app
RUN npm run build

FROM base as run

RUN npm ci --no-optional --production
COPY --from=build app/dist ./dist

RUN mkdir /app/files

CMD [ "npm", "start" ]
