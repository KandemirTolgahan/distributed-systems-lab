FROM node:latest

WORKDIR /usr/src/todoApp
COPY ../.env .
COPY ./backend backend/
WORKDIR /usr/src/todoApp/backend
RUN npm install -g npm@latest

CMD ["node", "./src/index.js"]
