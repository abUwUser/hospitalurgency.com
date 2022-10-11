FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm i -g serve && npm ci

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]