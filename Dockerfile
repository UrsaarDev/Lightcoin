FROM node:alpine

RUN apk add --no-cache libc6-compat git

WORKDIR /app
COPY package.json package-lock.json ./
# RUN yarn install
RUN npm install

COPY . .

RUN npm run build
# RUN yarn build

EXPOSE 3000

CMD npm run start
# CMD yarn run start
