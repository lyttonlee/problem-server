FROM node:latest
RUN mkdir app
WORKDIR /app
COPY . /app
EXPOSE 9200
RUN yarn install
CMD [ "yarn", "run", "start" ]