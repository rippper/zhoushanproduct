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
                <li v-for="(item, index) in navContent" :key="index">
                    <a href="javascript:;" v-text="item.name"></a>
                    <ul>
                        <li v-for="(childitem, childindex) in item.childOption" :key="childindex">
                            <a href="javascript:;" v-text="childitem"></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
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
                {
                    name: '首页',
                    childOption: []
                }, 
                {
                    name: '学院状况',
                    childOption: ['学院简介', '机构设置', '学院动态', '杰出校友库', '学院领导']
                }, 
                {
                    name: '院务公开',
                    childOption: ['通知公告', '政策文件', '收费标准', '规章制度', '招生专栏', '内部公告']
                }, 
                {
                    name:'学院党建',
                    childOption: ['宣教动态', '学习资料', '心得交流']
                }, 
                {
                    name:'团委工会',
                    childOption: []
                }, 
                {
                    name:'职成教研',
                    childOption: ['教研文件', '获奖信息', '教师研修', '资源中心']
                },
                {
                    name:'社区教育',
                    childOption: ['政策法规', '家庭教育', '社区动态', '老年教育', '通告公告']
                },
                {
                    name:'远程教育',
                    childOption: ['办学动态', '通知公告', '学生园地', '招生信息']
                },
                {
                    name:'档案园地',
                    childOption: []
                }
            ]
        }
    },
    mounted () {
        setInterval(this.bannerTo,8000)
    },
    methods: {
        bannerTo () {
            if (this.currentIndex == 0) {
                this.$refs.bannerImg[0].style.opacity = 0
                this.$refs.bannerImg[1].style.opacity = 1
                this.currentIndex = 1
            } else {
                this.$refs.bannerImg[1].style.opacity = 0
                this.$refs.bannerImg[0].style.opacity = 1
                this.currentIndex = 0
            }
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