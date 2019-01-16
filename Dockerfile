FROM rafaelribeiro92/deveshop-react-app:latest

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm i

CMD [ "npm", "start" ]
