FROM node:14.16.0

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]