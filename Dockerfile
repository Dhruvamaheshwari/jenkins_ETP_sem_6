FROM node:22-alpine

WORKDIR /app

COPY packet.json ./

RUN npm install

COPY . . 

EXPOSE 4000

CMD ["npm" , "start"]