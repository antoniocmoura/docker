FROM node:15

WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y wget

# ENV DOCKERIZE_VERSION v0.6.1

#RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

#COPY package*.json ./

#USER node

#RUN npm install

#COPY --chown=node:node . .

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]