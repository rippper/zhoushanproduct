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
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 0} }">学院概况</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1136 } }">学院简介</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newsdetail' }">机构设置</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1137 } }">学院动态</router-link>
                        </li>   
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1138 } }">杰出校友库</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newsdetail' }">学院领导</router-link>
                        </li>
                    </ul>
                </li>  <!-- 学院概况 -->
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 0} }">院务公开</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 0 } }">通知公告</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 1159 } }">政策文件</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 1160 } }">收费标准</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 1161 } }">规章制度</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 1162 } }">招生专栏</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1146, 'CId': 1171 } }">要闻速览</router-link>
                        </li>
                    </ul>
                </li> <!-- 院务公开 -->
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1147, 'CId': 0} }">学院党建</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1147, 'CId': 1163 } }">宣教动态</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1147, 'CId': 1164 } }">学习资料</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1147, 'CId': 1165 } }">心得交流</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1147, 'CId': 1166 } }">群众路线教育活动</router-link>
                        </li>
                    </ul>
                </li> <!-- 学院党建 -->
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1148, 'CId': 0} }">团委工会</router-link>
                </li> <!-- 团委工会 -->
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1149, 'CId': 0} }">职成教研</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1149, 'CId': 1167 } }">教研文件</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1149, 'CId': 1168 } }">获奖信息</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1149, 'CId': 1169 } }">教师研修</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1149, 'CId': 1170 } }">资源中心</router-link>
                        </li>
                    </ul>
                </li> <!-- 职成教研 -->
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1150, 'CId': 0} }">社区教育</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1179 } }">政策法规</router-link>
                        </li>
                        <li>
                            <a href="http://www.zsxxnet.cn/jtjy/jtjy.aspx" target="_blank">家庭教育</a>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1180 } }">社区动态</router-link>
                        </li>
                        <li>
                            <a href="http://www.zsxxnet.cn/UnivElders/" target="_blank">老年教育</a>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1142, 'CId': 1181 } }">通告公告</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1151, 'CId': 0} }">远程教育</router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1151, 'CId': 1172 } }">办学动态</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1151, 'CId': 1173 } }">通告通知</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1151, 'CId': 1174 } }">学生园地</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/newslist', query: { 'Id':1151, 'CId': 1175 } }">招生通知</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ path: '/newslist', query: { 'Id':1152, 'CId': 0} }">档案园地</router-link>
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
                    Name: '学院状况',
                    Id: 1142,
                    Nodes: ['学院简介', '机构设置', '学院动态', '杰出校友库', '学院领导']
                }, 
                {
                    Name: '院务公开',
                    Id: 0,
                    Nodes: ['通知公告', '政策文件', '收费标准', '规章制度', '招生专栏', '内部公告']
                }, 
                {
                    Name:'学院党建',
                    Id: 0,
                    Nodes: ['宣教动态', '学习资料', '心得交流']
                }, 
                {
                    Name:'团委工会',
                    Id: 0,
                    Nodes: []
                }, 
                {
                    Name:'职成教研',
                    Id: 0,
                    Nodes: ['教研文件', '获奖信息', '教师研修', '资源中心']
                },
                {
                    Name:'社区教育',
                    Id: 0,
                    Nodes: ['政策法规', '家庭教育', '社区动态', '老年教育', '通告公告']
                },
                {
                    Name:'远程教育',
                    Id: 0,
                    Nodes: ['办学动态', '通知公告', '学生园地', '招生信息']
                },
                {
                    Name:'档案园地',
                    Id: 0,
                    Nodes: []
                }
            ],
            bannerRobot: ''
        }
    },
    mounted () {
        this.bannerRobot = setInterval(this.bannerTo,8000)
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
        }
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .headerpart{
        z-index: 10;
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
                        z-index: 5;
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