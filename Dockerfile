FROM node:8-alpine

COPY . /workspace
WORKDIR /workspace
RUN yarn

EXPOSE 3000

CMD npm start