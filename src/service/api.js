
/**
 * 页面接口api
 */
const API_URL = '/api'
const Article = '/article'
const Production = '/production'
// const Collection = '/Collection'
export default {
  GetArticleChannelInfoList: {
    url: API_URL + Article + '/GetArticleChannelInfoList',
    data: {}
  },
  GetArticleInfoList: {
    url: API_URL + Article + '/GetArticleInfoList',
    data: {}
  },
  ArticleContent: {
    url: API_URL + Article + '/ArticleContent',
    data: {}
  },
  ProductionInfoList: {
    url: API_URL + Production + '/ProductionInfoList'
  },
  ProductionDetail: {
    url: API_URL + Production + '/ProductionDetail',
    data: {}
  }
}
