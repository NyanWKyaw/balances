FROM node:16.10.0
COPY . /app
CMD npm start
EXPOSE 80