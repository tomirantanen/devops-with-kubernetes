FROM node:16.0.0-alpine as build

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm ci

COPY . /app
RUN npm run build

FROM nginx:1.21.4-alpine as run

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build app/build /usr/share/nginx/html
