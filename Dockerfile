FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN npm run build

COPY . .

CMD ["npm", "run", "start"]