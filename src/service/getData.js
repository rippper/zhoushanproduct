import Api from './api'
import fetch from './fetch'

/*
 * 获取文章类型列表 
 */
export const GetArticleChannelInfoList = (data) => fetch.post(Api.GetArticleChannelInfoList.url,
  { ...Api.GetArticleChannelInfoList.data, ...data })
/*
 * 获取文章详细类型列表 
 */
export const GetArticleInfoList = (data) => fetch.post(Api.GetArticleInfoList.url,
  { ...Api.GetArticleInfoList.data, ...data })
/*
 * 获取文章详情内容 
 */
export const ArticleContent = (data) => fetch.post(Api.ArticleContent.url,
  { ...Api.ArticleContent.data, ...data })
/*
 * 获取展厅列表内容 
 */
export const ProductionInfoList = (data) => fetch.post(Api.ProductionInfoList.url,
  { ...Api.ProductionInfoList.data, ...data })
/**
 * 网上展厅详细内容
 */
export const ProductionDetail = (data) => fetch.post(Api.ProductionDetail.url,
  { ...Api.ProductionDetail.data, ...data })

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
