const router = require('koa-router')();
const os = require('os');
let networkInterfaces = os.networkInterfaces();

exports.renderMainView =async function(ctx) {
  if (process.env.NODE_ENV == 'develop') {
    let network = networkInterfaces.en0 || networkInterfaces.en1 || networkInterfaces["本地连接"];
    let address = network.filter(item => {
      if (item.family.toLowerCase() == 'ipv4') {
        return item;
      }
    });
    ctx.clientScriptPath = "http://127.0.0.1:1992/client/client.js";
    // ctx.clientCssPath = `http://127.0.0.1:1992/client/client.css`;
    ctx.vendorScriptPath = "";
    ctx.manifestScriptPath = "";
  } else {
    const version = require('../assets/js/webpack-assets.json');
    ctx.clientScriptPath = `/js/${version['client']['js']}`;
    ctx.vendorScriptPath = `/js/${version['vendor']['js']}`;
    ctx.manifestScriptPath = `/js/${version['manifest']['js']}`;
    //ctx.clientCssPath = `/css/${version['main']['css']}`;
  }
  return await ctx.render('main', {
    vendorjs: ctx.vendorScriptPath,
    routes: ctx.routes || JSON.stringify([]),
    clientjs: ctx.clientScriptPath,
    manifestjs: ctx.manifestScriptPath,
    //clientcss : ctx.clientCssPath,
  });
}

router.get('*', exports.renderMainView);

module.exports = router;