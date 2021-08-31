FROM node:14.16.0
WORKDIR /app
RUN yarn
RUN npm install
COPY . .
RUN npm run build
