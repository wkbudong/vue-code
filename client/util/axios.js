import axios from 'axios';
import _isEmpty from 'lodash/isEmpty'
function objToQuery(params) {
  let keys = Object.keys(params);
  let query = []
  if(keys.length) {
    keys.map(item=>{
      query.push(`${item}=${params[item]}`)
    })
  }
  return query.join('&');
}
export default function ajax (url, params, method) {
      console.log(url, params, method)
      if(!_isEmpty(params)) url = url+ "?" + objToQuery(params);
      return axios.get(url)
                  .then(function(response) {
                    return Promise.resolve(response)
                  })
                  .catch(function(response){
                    return Promise.resolve(response)
                  })
}