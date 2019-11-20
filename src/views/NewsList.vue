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
                    :title-text1="titleText1"
                    :title-text2="titleText2"
                    :title-text3="titleText3"
                ></menu-list>
            </div>
            <div class="pc-right r">
                <div class="cm-lesson">
                    <div class="cm-lesson-top clearfix">
                        <div class="cm-lesson-top1 l" v-text="titleText4 || titleText3"></div>
                        <div class="cm-lesson-top2 l">
                            <template>
                                <span v-if="courseSort=='1'" class="on">最新  <img src="../assets/arrow-down4.png"> </span>
                                <span v-else @click="courseSort='1', desc='CreatedDate', getArticleInfoList()">最新  <img src="../assets/arrow-down3.png"> </span>
                            </template>
                            <template>
                                <span v-if="courseSort=='2'" class="on">最热  <img src="../assets/arrow-down4.png"></span>
                                <span v-else @click="courseSort='2', desc='Click', getArticleInfoList()">最热  <img src="../assets/arrow-down3.png"> </span>
                            </template>
                        </div>
                        <div class="cm-lesson-breadcrumb r">
                            <span class="action_infor">您所在的位置是：</span>
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item v-text="titleText4 || titleText3"></el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                    <div class="cm-lesson-con">
                        <section>
                            <article-table-list :list-data="articleList" :current-page="currentPage" :row="Rows"></article-table-list>
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
            sortShow2: true,
            sortShow: true,
            menuListShow: true,
            courseSort: '1',
            titleText1: '文章',
            titleText2: 'Article',
            titleText3: '',
            titleText4: '',
            CategoryId: '',
            desc: '',
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
                Rows: this.Rows,
                Sort: this.desc, 
                Order: 'desc'
            })
            let type = await GetArticleChannelInfoList({
                parentId: 0
            })
            console.log(msg)
            type.Data.ArticleCategoryResult.forEach(item => {
                if (item.Id == this.ListId) {
                    this.titleText3 = item.Name
                    this.menuData = item.Nodes
                }
            })
            if (this.CId != 0) {
                this.menuData.forEach(item => {
                    if (item.Id == this.CId) {
                        this.titleText4 = item.Name
                    }
                })
            } else {
                this.titleText4 = ''
            }
            
            console.log(this.menuData)
            msg.Data.List.forEach(item => {
                item.ArticleCreateDate = item.ArticleCreateDate.substr(0, 10)
            })
            this.articleList = msg.Data.List
        },
        async getArticleInfoList () {
            let data = await GetArticleInfoList({ 
                CategoryId: this.CId == 0 ? this.ListId : this.CId,
                Page: 1,
                Rows: this.Rows, 
                Sort: this.desc, 
                Order: 'desc'
            })
            this.currentPage = 1
            data.Data.List.forEach(item => {
                item.ArticleCreateDate = item.ArticleCreateDate.substr(0, 10)
            })
            if (data.IsSuccess) {
                this.articleList = data.Data.List
                this.totalPageNumber = Number(data.Data.TotalCount)
            }
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
        background-size: cover;
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
                            margin-left: 15px;
                            height: 42px;
                            line-height: 42px;
                            span {
                                margin-left: 10px;
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
                        .cm-lesson-breadcrumb{
                            margin-right: 30px;
                            .action_infor{
                                float:left;
                                height:42px;
                                line-height: 42px;
                            }
                            .el-breadcrumb{
                                float:left;
                            }
                            .el-breadcrumb__item{
                                height:42px;
                                line-height: 42px;
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