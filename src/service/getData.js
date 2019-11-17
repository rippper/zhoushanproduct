import Api from './api'
import fetch from './fetch'

/**
 * 判断用户是否存在KeepOnline
 */
export const CheckUserIsExit = (data) => fetch.get(Api.CheckAccountExit.url,
  { ...Api.CheckAccountExit.data, ...data })
export const GetArticleInfoList = (data) => fetch.post(Api.GetArticleInfoList.url,
  { ...Api.GetArticleInfoList.data, ...data })
/* 将所有的API封装起来 */
const allApi = {}
for (let key in Api) {
  if (Api[key].method === 'get') {
    if (key === 'GetNoticeInfoContent') {
      allApi[key] = (data) => fetch.get(Api[key].url + '/' + data.Id, { ...Api[key].data, ...data })
    } else {
      allApi[key] = (data) => fetch.get(Api[key].url, { ...Api[key].data, ...data })
    }
  } else if (Api[key].method === 'formData') {
    allApi[key] = (data, config) => fetch.postFormData(Api[key].url, data, config)
  } else {
    allApi[key] = (data) => fetch.post(Api[key].url, { ...Api[key].data, ...data })
  }
}
export default allApi
