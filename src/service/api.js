
/**
 * 页面接口api
 */
const API_URL = '/api'
const article = '/article'
// const Collection = '/Collection'
export default {
  GetArticleChannelInfoList: {
    url: API_URL + article + '/GetArticleChannelInfoList',
    data: {}
  },
  GetArticleInfoList: {
    url: API_URL + article + '/GetArticleInfoList',
    data: {}
  },
  ArticleContent: {
    url: API_URL + article + '/ArticleContent',
    data: {}
  }

}
