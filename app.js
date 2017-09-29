const Koa = require("koa");
const views = require("koa-views");
const http = require("http");
const path = require('path');
const static = require('koa-static')
const request = require('request');

const app = new Koa();
// views html
// assets file
let assetsPath = path.join(__dirname, 'assets')
app.use(static(assetsPath))

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