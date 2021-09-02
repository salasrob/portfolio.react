# FROM node:14.16.0 as build-deps
# WORKDIR /Users/robertsalas/Repos/portfolio.react
# COPY package.json yarn.lock ./
# COPY package-lock.json package-lock.json ./
# RUN npm install
# RUN yarn
# COPY . ./
# RUN yarn build


FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /Users/robertsalas/Repos/portfolio.react/build
COPY ./build .
CMD ["serve", "-s", "."]



# FROM nginx:1.15.2-alpine
# COPY ./build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# ENTRYPOINT ["nginx","-g","daemon off;"]

