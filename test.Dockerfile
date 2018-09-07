FROM node:8-slim

RUN apt-get update -y
RUN apt-get install git-all -y
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
CMD ["npm", "test"]