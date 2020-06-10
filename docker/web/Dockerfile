FROM node:12

WORKDIR /teapot

COPY . ./

RUN npm i --production && \
 npm i -g pm2 && \
 pm2 install pm2-logrotate@2.2.0 && \
 pm2 set pm2-logrotate:compress true

EXPOSE 3003

CMD ["npm", "start"]
