FROM node:latest
WORKDIR /app
COPY backend/package.json /app
RUN npm install
COPY backend/src /app
CMD ["node", "index.js"]
