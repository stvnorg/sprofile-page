FROM node:13.10.1-stretch-slim

WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 3000
