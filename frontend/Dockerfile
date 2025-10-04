FROM node:24-alpine3.21 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build



FROM node:24-alpine3.21

WORKDIR /app

COPY --from=build /app/dist .

RUN npm install -g serve

EXPOSE 5173

CMD [ "serve","-s",".","-l","5173" ]

