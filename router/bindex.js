const router = require('koa-router')();
const request = require('superagent');
const axios = require('axios');
const ajax = require('../util/axios.js')
var getIndexBanner =  async function(ctx) {
  let url;
  if(ctx.method.toLowerCase() ==='get') url = ctx.request.url;
  url = 'https://api.bilibili.com/x/web-show' + url;
  await ajax(ctx, url, 'get')
}

var getIndexRank =  async function(ctx) {
  let url;
  if(ctx.method.toLowerCase() ==='get') url = ctx.request.url;
  url = 'https://api.bilibili.com/x/web-interface'+url
  await ajax(ctx, url, 'get')
}

router.get('/res/loc', getIndexBanner); //首页banner
router.get('/ranking/index', getIndexRank); 
router.get('/dynamic/index', getIndexRank);

module.exports = router;