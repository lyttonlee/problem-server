FROM node:latest
RUN npm install -g yarn \
    && yarn install
EXPOSE 9200
CMD [ "yarn", "run", "start" ]