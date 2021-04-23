FROM node:latest
RUN npm install
EXPOSE 9200
CMD [ "npm", "run", "start" ]