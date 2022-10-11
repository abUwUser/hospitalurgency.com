FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm i -g serve && npm ci

CMD ["serve", "-s", "build"]