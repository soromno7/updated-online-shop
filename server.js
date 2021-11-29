const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/database.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);