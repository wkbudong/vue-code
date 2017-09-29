const router = require('koa-router')();
const request = require('superagent');
const axios = require('axios');
  
var getData =  async function(ctx) {
  let url;
  if(ctx.method.toLowerCase() ==='get') url = ctx.request.url;

  // function fetch(resolve, reject) {
  //   request
  //       .get('https://api.douban.com/v2'+ url)
  //       .end((err, res)=>{
  //         if(!err) {
  //           console.log(res.status)
  //           resolve(res)
  //         }
  //       })
  // }
  // var p = new Promise(fetch).then((value)=>{
  //   return Promise.resolve(value.body)
  // })
  // console.log(ctx);
  // ctx.body = await p;
    await axios.get('https://api.douban.com/v2'+url)
                .then(function(response) {
                  //console.log(response.data)
                  console.log(response.status)
                  ctx.body = response.data
                })
                .catch(function(response){
                  // if(error.response){
                  //   //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
                  //   console.log(error.response.data);
                  //   console.log(error.response.status);
                  //   console.log(error.response.header);
                  // }else {
                  //   //一些错误是在设置请求的时候触发
                  //   console.log('Error',error.message);
                  // }
                  console.log(response);
                })
}

router.get('/event/list', getData);
router.get('/music/search', getData)

module.exports = router;

