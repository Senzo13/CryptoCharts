
FROM node:latest
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm i -g nodemon
COPY . .
CMD ["npm", "start"]