FROM node:18

RUN groupmod -g 1001 node && usermod -u 1001 -g 1001 node

RUN mkdir -p /home/node/app &&\
    chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
