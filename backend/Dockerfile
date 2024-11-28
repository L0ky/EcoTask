FROM node:18-alpine

RUN apk add --no-cache dumb-init

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 6432

ENTRYPOINT ["dumb-init", "--"]

CMD ["node", "./build/bin/server.js"]
