
const  axios = require('axios') ;

module.exports = function ajax(ctx, url, method) {
  if(method.toLowerCase() ==='get') {
    return axios.get(url)
                .then(function(response) {
                  console.log(response.status)
                  ctx.body = {
                    data: response.data,
                    status: response.status,
                    statusText: response.statusText
                  }
                })
                .catch(function(response){
                  if(response){
                    //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.header);
                    console.log(response.statusText);
                  }else {
                    //一些错误是在设置请求的时候触发
                    //console.log('Error',response.message);
                    consele.log('Error', "设置请求时错误")
                  }
                  console.log(response);
                })
  }
}