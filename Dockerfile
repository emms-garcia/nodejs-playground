FROM node:argon

RUN npm install nodemon -g

ADD app/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src/app && cp -a /tmp/node_modules /src/

WORKDIR /src/app
ADD . /src/app

EXPOSE 3000

CMD npm start
