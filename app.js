const Koa = require("koa");
const views = require("koa-views");
const koaStatic = require("koa-static");
const http = require("http");
const path = require('path');

const app = new Koa();
// views html

app.use(views(__dirname + '/view/', {
  map: {
    html: 'swig'
  },
  cache: process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test'
}));

// router
const router = require('./router/');
Object.keys(router).map(item => {
  app.use(router[item].routes()).use(router[item].allowedMethods());
});
//const server = http.createServer(app.callback()).listen(3001);
app.listen(3001);