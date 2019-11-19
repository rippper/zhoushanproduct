<template>
    <div class="newsdetail">
        <header-fix></header-fix>
        <div class="article_content">
            <div class="catalog"></div>
            <div class="title" v-text="articleContent.Name"></div>
            <div class="tip">
                <div class="tip-con  clearfix">
                    <p>点击数：<span v-text="articleContent.ClickCount"></span></p>
                    <p>发布时间:<span v-text="articleContent.CreateDate"></span></p>
                </div>
            </div>
            <div class="content" v-html="articleContent.Content"></div>
            <div class="other_article">
                <div v-show="uparticle.Id != 0">
                    <span>上一篇：</span><router-link :to="{ path: '/newsdetail', query: { 'id': uparticle.Id } }" v-text="uparticle.Name"></router-link>
                </div>
                <div v-show="downarticle.Id != 0">
                    <span>下一篇：</span><router-link :to="{ path: '/newsdetail', query: { 'id': downarticle.Id } }" v-text="downarticle.Name"></router-link>
                </div>
            </div>
        </div>
        <footer-fix></footer-fix>
    </div>
</template>

<script>
import { headerFix, footerFix } from '../components'
import { ArticleContent } from '../service/getData'
export default {
    name: 'newsDetail',
    data () {
        return {
            contentId: this.$route.query.id,
            articleContent: {},
            uparticle: {
                Name: '',
                Id: 0
            },
            downarticle: {
                Name: '',
                Id: 0
            }
        }
    },
    mounted () {
        this.render()
    },
    methods: {
        async render () {
            let msg = await ArticleContent({
                Id: this.contentId
            })
            msg.Data.CreateDate = msg.Data.CreateDate.substr(0, 10)
            this.articleContent = msg.Data
            this.uparticle.Id = msg.Data.UpId
            this.uparticle.Name = msg.Data.UpName
            this.downarticle.Id = msg.Data.DownId
            this.downarticle.Name = msg.Data.DownName
            console.log(msg)
        }
    },
    watch:{
        $route () {
            this.contentId = this.$route.query.id
            this.render()
        }
    },
    components: {
        headerFix,
        footerFix
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .newsdetail{
        width:100%;
        max-width: 1366px;
        margin: 0 auto;
        background: url('../assets/zsbg.jpg') no-repeat;
        background-size: cover;
        .article_content{
            width: 1034px;
            padding: 18px 20px 0;
            margin: 10px auto 0;
            box-sizing: border-box;
            background: #fff;
            .catalog{
                height: 38px;
                width: 100%;
                background: #eff7ff;
                border-bottom: 2px solid #008bd7;
            }
            .title{
                height: 40px;
                line-height: 40px;
                padding: 12px 0 16px;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                color: #1f80ea;
            }
            .tip{
                @extend %clearFix;
                width:900px;
                height:24px;
                line-height:24px;
                margin: 0 auto 20px;
                border-bottom: 1px solid #e4e4e4;
                .tip-con{
                    float: right;
                    p{
                        float: left;
                        margin-right: 20px;
                        font-size: 12px;
                    }
                }
            }
            .content{
                padding: 10px 50px 0;
                margin-bottom: 50px;
                p{
                    text-indent: 2em;
                    line-height: 24px!important;
                    font-size: 13px!important;
                    span{
                        font-size: 13px!important;
                    }
                }
                img{
                    max-width: 894px!important;
                }
            }
            .other_article{
                padding-bottom:40px;
                div{
                    margin-left: 80px;
                }
                span{
                    font-weight: bold;
                    color: #1e82d2;
                }
            }
        }
    }
</style>