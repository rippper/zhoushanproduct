<template>
    <div class="headerpart">
        <div class="headerpart_toppart">
            <img class="headerpart_logo" src="../assets/logo.png" alt="">
            <div class="headerpart_banner">
                <ul>
                    <li v-for="(item, index) in bannerInfor" :key="index" ref="bannerImg"><img :src="item.address" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="headerpart_nav">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li v-for="(item, index) in navContent" :key="index">
                    <router-link :to="{ path: '/newslist', query: { 'Id':item.Id, 'CId': 0} }" v-text="item.Name"></router-link>
                    <ul>
                        <li v-for="(childitem, childindex) in item.Nodes" :key="childindex">
                            <router-link :to="{ path: '/newslist', query: { 'Id':item.Id, 'CId': childitem.Id } }" v-text="childitem.Name"></router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { GetArticleChannelInfoList } from '../service/getData'
export default {
    name: 'headerFix',
    data () {
        return {
            bannerInfor: [
                {
                    name: 'firstPage',
                    address: require('../assets/flash1.png')
                },
                {
                    name: 'secoundPage',
                    address: require('../assets/flash2.png')
                }
            ],
            currentIndex: 0,
            navContent: [
                // {
                //     Name: '首页',
                //     Nodes: []
                // }, 
                // {
                //     Name: '学院状况',
                //     Nodes: ['学院简介', '机构设置', '学院动态', '杰出校友库', '学院领导']
                // }, 
                // {
                //     Name: '院务公开',
                //     Nodes: ['通知公告', '政策文件', '收费标准', '规章制度', '招生专栏', '内部公告']
                // }, 
                // {
                //     Name:'学院党建',
                //     Nodes: ['宣教动态', '学习资料', '心得交流']
                // }, 
                // {
                //     Name:'团委工会',
                //     Nodes: []
                // }, 
                // {
                //     Name:'职成教研',
                //     Nodes: ['教研文件', '获奖信息', '教师研修', '资源中心']
                // },
                // {
                //     Name:'社区教育',
                //     Nodes: ['政策法规', '家庭教育', '社区动态', '老年教育', '通告公告']
                // },
                // {
                //     Name:'远程教育',
                //     Nodes: ['办学动态', '通知公告', '学生园地', '招生信息']
                // },
                // {
                //     Name:'档案园地',
                //     Nodes: []
                // }
            ],
            bannerRobot: ''
        }
    },
    mounted () {
        this.bannerRobot = setInterval(this.bannerTo,8000)
        this.render()
    },
    beforeDestroy () {
        clearInterval(this.bannerRobot)
    },
    methods: {
        bannerTo () {
            if (this.currentIndex == 0) {
                this.$refs.bannerImg[0].style.opacity = '0'
                this.$refs.bannerImg[1].style.opacity = '1'
                this.currentIndex = 1
            } else {
                this.$refs.bannerImg[1].style.opacity = '0'
                this.$refs.bannerImg[0].style.opacity = '1'
                this.currentIndex = 0
            }
        },
        async render () {
            let msg = await GetArticleChannelInfoList({
                parentId: 0
            })
            this.navContent = msg.Data.ArticleCategoryResult
        }
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .headerpart{
        z-index: 2;
        width: 1042px;
        margin: 0 auto;
        position: relative;
        @extend %clearFix;
        .headerpart_toppart{
            width: 1042px;
            height: 261px;
            .headerpart_logo{
                position: absolute;
                top: 50px;
            }
            .headerpart_banner{
                float:right;
                ul{
                    position: relative;
                    li{
                        position:absolute;
                        top: 0;
                        right: 0;
                        transition: 1s;
                        opacity: 1;
                        img{
                            height: 261px;
                        }
                        &:last-of-type{
                            opacity: 0;
                        }
                    }
                }
            }
        }
        .headerpart_nav{
            position: relative;
            left: -5px;
            width: 1052px;
            height: 47px;
            background: url('../assets/navbg.png') no-repeat;
            & > ul{
                margin: 0 103px;
                @extend %clearFix;
                & > li{
                    float:left;
                    width: 94px;
                    height: 100%;
                    background: url('../assets/navlibg.png') no-repeat;
                    &:hover ul{
                        max-height: 300px;
                    }
                    & > a{
                        height: 42px;
                        line-height: 42px;
                        color: #fff;
                        width: 94px;
                        text-align: center;
                        display: block;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        &:hover{
                            background: url('../assets/nav_libg.png') no-repeat 10px 9px;
                            color: #004075;
                            font-weight: bold;
                        }
                    }
                    ul{
                        position: absolute;
                        max-height:0;
                        overflow: hidden;
                        transition: 1s;
                        background: #fff;
                        li{
                            text-align: center;
                            height: 100%;
                            background: url('../assets/navlibg.png') no-repeat;
                            a{
                                height: 42px;
                                line-height: 42px;
                                color: #004075;
                                width: 94px;
                                text-align: center;
                                display: block;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                                    
                                &:hover{
                                    color: #fff;
                                    background: #004075;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>