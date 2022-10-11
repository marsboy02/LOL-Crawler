FROM node:16-alpine as base

WORKDIR /app
COPY . .
RUN npm install

CMD ["node","dist/main"]