FROM docker.io/nikolaik/python-nodejs:latest

WORKDIR /home/mythologies

COPY . .

RUN npm install

RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "start"]