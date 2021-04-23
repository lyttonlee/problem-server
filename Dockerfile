FROM node:latest
WORKDIR /
RUN rm -rf public/* \
    && git clone https://github.com/lyttonlee/problem-web.git \
    && cd problem-web \
    && yarn install \
    && yarn run build \
    && cd / \
    && cp -rf problem-web/dist/* /public \
    && rm -rf problem-web/* \
    && yarn install
EXPOSE 9200
CMD [ "node", "src/app.ts" ]