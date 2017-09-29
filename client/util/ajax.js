import request from 'superagent'
import jsonp from 'superagent-jsonp'
import $ from 'jquery';

export default function ajax (url, query, method) {
  if(method.toLowerCase() === 'get') {
    function fetch(resolve, reject) {
      request
          .get(url)
          .use(jsonp)
          .query(query)
          .end((err, res)=>{
            console.log(err, res)
            if(!err) {
               resolve(res)
            }
          })
    }
    return new Promise(fetch).then((value)=>{
      return Promise.resolve(value.body)
    })
  }
}