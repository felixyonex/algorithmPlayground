FROM node:8.11.1

COPY ./.babelrc main/
COPY ./package.json main/
COPY ./package-lock.json main/
COPY ./tsconfig.json main/
COPY ./tslint.json main/
COPY ./custom_typings main/custom_typings
COPY ./src main/src

RUN cd main

WORKDIR main/

RUN npm install
RUN NODE_ENV=build npm run build
RUN rm -rf src
RUN rm -rf lib_covered
RUN rm -rf node_modules
RUN npm install --production
CMD ["/usr/local/bin/node", "lib/app"]