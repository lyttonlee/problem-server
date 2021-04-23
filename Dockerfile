FROM node:latest
RUN mkdir web \
    && rm -rf public/* \
    && cd web \
    && git clone https://github.com/lyttonlee/problem-web.git \
    && cd problem-web \
    && yarn install \
    && yarn run build \
    && cp -rf dist/* /public \
    && cd / \
    && yarn install
EXPOSE 9200
CMD [ "node", "src/app.ts" ]