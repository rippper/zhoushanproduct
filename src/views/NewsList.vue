<template>
    <div class="newslist">
        <header-fix></header-fix>
        <div class="newslist_bodypart">
            <div class="pc-left l">
                <menu-list
                    :menu-icon="menuIcon"
                    :menu-list-title="menuListTitle"
                    :menu-data="menuData"
                    :go-menu-list="goMenuList"
                    :sort-title="sortShow"
                    :menu-list-show="menuListShow"
                    :hotnews="hotnews"
                    :newsreport="newsreport"
                    :title-text1="titleText1"
                    :title-text2="titleText2"
                    :title-text3="titleText3"
                ></menu-list>
            </div>
            <div class="pc-right r">
                <div class="cm-lesson">
                    <div class="cm-lesson-top clearfix">
                        <div class="cm-lesson-top1 l">
                            全部文章
                        </div>
                    </div>
                    <div class="cm-lesson-con">
                        <section>
                            <article-table-list :list-data="articleList" :mid="CategoryId" :current-page="currentPage" :row="Rows"></article-table-list>
                        </section>
                    </div>
                    <el-pagination
                        background
                        :page-size="this.Rows"
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="this.totalPageNumber">
                    </el-pagination>
                </div>
            </div>
        </div>
        <footer-fix></footer-fix>
    </div>
</template>

<script>
import { headerFix, menuList, articleTableList, footerFix } from '../components'
import { GetArticleInfoList, GetArticleChannelInfoList } from '../service/getData'
export default {
    name: 'newslist',
    data () {
        return {
            menuIcon: require('../assets/classify.png'),
            menuListTitle: '文章列表',
            ListId: this.$route.query.Id,
            CId: this.$route.query.CId,
            menuData: [],
            articleList: [],
            hotnews: [
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '学院简介',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '学院动态',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                }
            ],
            newsreport: [
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                },
                {
                    label: '通知公告',
                    content: '省师训管理平台教师个人帐'
                }
            ],
            sortShow2: true,
            sortShow: true,
            menuListShow: true,
            titleText1: '文章',
            titleText2: 'News',
            titleText3: '新闻',
            CategoryId: '',
            currentPage: 1,
            totalPageNumber: 0,
            Rows: 20
        }
    },
    mounted () {
        this.render()
    },
    methods: {
        goMenuList (item) {
            this.$router.push({ path: 'newslist', query: { Id: this.ListId, CId: item.Id } })
        },
        handleCurrentChange (val) {
            this.articleList = []
            this.page = val
            this.currentPage = val 
            this.getArticleInfoList()
        },
        async render () {
            let msg = await GetArticleInfoList({
                CategoryId: this.CId == 0 ? this.ListId : this.CId,
                Page: this.currentPage,
                Rows: this.Rows
            })
            let type = await GetArticleChannelInfoList({
                parentId: 0
            })
            console.log(type)
            type.Data.ArticleCategoryResult.forEach(item => {
                if (item.Id == this.ListId) {
                    this.titleText3 = item.Name
                    this.menuData = item.Nodes
                }
            })
            console.log(this.menuData)
            msg.Data.List.forEach(item => {
                item.ArticleCreateDate = item.ArticleCreateDate.substr(0, 10)
            })
            this.articleList = msg.Data.List
        }
    },
    watch: {
        $route () {
            this.ListId = this.$route.query.Id
            this.CId = this.$route.query.CId
            this.render()
        }
    },
    components: {
        headerFix,
        menuList,
        articleTableList,
        footerFix
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .newslist{
        width:100%;
        max-width: 1366px;
        margin: 0 auto;
        background: url('../assets/zsbg.jpg') no-repeat;
        background-size: 100%;
        .newslist_bodypart{
            width: 1052px;
            margin: 20px auto 0;
            overflow: hidden;
            .pc-left{
                width: 281px;
                margin-left: 30px;
                min-height: 855px;
            }
            .pc-right{
                width: 700px;
                margin-right: 30px;
                .cm-lesson{
                    background: #fff;
                    min-height: 855px;
                    position: relative;
                    .cm-lesson-top {
                        height: 42px;
                        border-bottom: 1px solid #e8e8e8;
                        .cm-lesson-top1 {
                            font-size: 18px;
                            color: #333;
                            height: 42px;
                            line-height: 42px;
                            margin-left: 20px;
                            font-weight: bold;
                        }
                        .cm-lesson-top2 {
                            margin-left: 35px;
                            height: 42px;
                            line-height: 42px;
                            span {
                                margin-left: 20px;
                                cursor: pointer;
                                &.on{
                                    color: #ff9c08;
                                }
                            }
                        }
                        .cm-lesson-top3{
                            p{
                                float: left;
                                width: 70px;
                                border-left: 1px solid #e8e8e8;
                                cursor: pointer;
                                height: 43px;
                                line-height: 43px;
                                text-align: center;
                                img {
                                    width: 16px;
                                    height: 17px;
                                }
                            }
                        }
                    }
                    
                    .el-pagination{
                        display: table;
                        margin: 0 auto;
                        padding: 60px 0;
                        ul{
                            li{
                                &.active{
                                    background: #ff9c08;
                                }
                                &:hover{
                                    background: #ff9c08;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>