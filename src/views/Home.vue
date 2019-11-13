<template>
    <div class="homepage">
        <header-fix></header-fix>
        <div class="home_bodypart">
            <div class="home_bodypart_toppart">
                <div class="home_newsinfor">
                    <span class="home_bd">滚动公告：</span>
                    <div class="home_news_ifr">

                    </div>
                </div>
                <div class="home_searchIfr">
                    <div class="home_searchIfr_input">
                        <input type="text" placeholder="请输入搜索关键字">
                    </div>
                    <div class="home_searchIfr_button">
                        <input type="button" value="搜索">
                    </div>
                </div>
            </div>
            <div class="home_bodypart_middlepart">
                <div class="home_bodypart_bannerbox">
                    <div class="home_bannerbox_image">
                        <ul ref="moveObj">
                            <li v-for="(item, index) in bannerImg" :key="index">
                                <img :src="item.Address">
                            </li>
                        </ul>
                        <div class="home_bannerbox_sl">
                            <ul>
                                <li v-for="count in 4" :key="count" v-text="count" ref="bottomButton" @click="countChange(count)"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { headerFix } from '../components'
export default {
    name: 'Home',
    data () {
        return {
            bannerImg: [
                {
                    Infor: '血红色的天空映蓝了整片湖水',
                    Address: require('../assets/huguang.jpg')
                },
                {
                    Infor: '美丽的月光下一片湛蓝色！',
                    Address: require('../assets/yueguang.jpg')
                },
                {
                    Infor: '山峦之间起风啦！',
                    Address: require('../assets/shanmai.jpg')
                },
                {
                    Infor: '美丽的得克萨斯州牧场',
                    Address: require('../assets/muchang.jpg')
                },
                {
                    Infor: '血红色的天空映蓝了整片湖水',
                    Address: require('../assets/huguang.jpg')
                },
                {
                    Infor: '美丽的月光下一片湛蓝色！',
                    Address: require('../assets/yueguang.jpg')
                }
            ],
            currentIndex: 1
        }
    },
    mounted () {
        this.$refs.bottomButton[0].className = 'active'
        setInterval(() => {
            this.currentIndex++
            this.bannerTo(this.currentIndex)
        },5000)
    },
    methods: {
        bannerTo (index) {
            this.$refs.moveObj.style.transition = '0.5s'
            this.$refs.moveObj.style.left = -index * 320 + 'px'
            index < 1 ? this.bannerChange(5) : 0
            index > 5 ? this.bannerChange(1) : 0
            this.bottomStateChange(this.currentIndex)
        },
        bannerChange (index) {
            this.$refs.moveObj.style.transition = '0s'
            this.$refs.moveObj.style.left = index * -320 + 'px'
            if (index == 5) {
                this.currentIndex = 4
                this.changetime(4)
            } else if (index == 1){
                this.currentIndex = 2
                this.changetime(2)
            }
        },
        changetime (index) {
            setTimeout(() => {
                this.$refs.moveObj.style.left = this.currentIndex * -320 +'px';
                this.$refs.moveObj.style.transition = '0.5s';
                this.currentIndex = index
            },10);
        },
        bottomStateChange (cont) {
            cont = cont - 1
            if (cont == 4) {
                cont = 0
            }
            for(var i = 0; i < 4; i++){
                this.$refs.bottomButton[i].className = '';
            }
            this.$refs.bottomButton[cont].className = 'active'
        },
        countChange (index) {
            if (index == 1 && this.currentIndex == 5) {
                return false
            } else {
                this.currentIndex = index
                this.bannerTo(index)
            }
            
        } 
},
    components: {
        headerFix
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .homepage{
        width:100%;
        max-width: 1366px;
        height: 2000px;
        margin: 0 auto;
        background: url('../assets/zsbg.jpg') no-repeat;
        .home_bodypart{
            width:1042px;
            margin: 10px auto;
            background: #fff;
            .home_bodypart_toppart{
                width: 1023px;
                height: 116px;
                margin: -10px auto 0;
                background: linear-gradient(to bottom, #96d8fb, #fff);
                @extend %clearFix;
                .home_newsinfor{
                    float: left;
                    width: 735px;
                    padding: 10px;
                    @extend %clearFix;
                    .home_bd{
                        float: left;
                        height: 24px;
                        line-height: 24px;
                        font-size: 12px;
                    }
                    .home_news_ifr{
                        float:left;
                    }
                }
                .home_searchIfr{
                    float:right;
                    margin-top: 10px;
                    margin-right:10px;
                    @extend %clearFix;
                    .home_searchIfr_input{
                        float: left;
                        height: 33px;
                        input{
                            height: 30px;
                            width: 170px;
                            background: #fff;
                            color: #666;
                            text-indent: 10px;
                            border-bottom: 1px solid #e3e3e3;
                            border-top: 1px solid #e3e3e3;
                        }
                    }
                    .home_searchIfr_button{
                        float: right;
                        width: 87px;
                        height: 33px;
                        background: #0099e5;
                        input{
                            width: 87px;
                            height: 32px;
                            background: url('../assets/search_img2.png') no-repeat 19px 11px;
                            color: white;
                            font-size: 15px;
                            cursor: pointer;
                            text-indent: 14px;
                        }
                    }
                    
                }
            }
            .home_bodypart_middlepart{
                width: 1004px;
                height:50px;
                margin: -65px auto 0;
                .home_bodypart_bannerbox{
                    width: 320px;
                    height: 290px;
                    border: 1px solid #8dbeec;
                    overflow: hidden;
                    .home_bannerbox_image{
                        width: 320px;
                        height: 230px;
                        margin-top: 15px;
                        position: relative;
                        & > ul{
                            width: 1920px;
                            position: absolute;
                            top: 0;
                            left: -320px;
                            transition: 0.5s;
                            @extend %clearFix;
                            & > li{
                                float: left;
                                img{
                                    width: 320px;
                                    height: 230px;
                                }
                            }
                        }
                        .home_bannerbox_sl{
                            width: 320px;
                            height: 15px;
                            background: rgba(255, 255, 255, 0.2);
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            ul{
                                width:104px;
                                position: absolute;
                                top: 0;
                                right: 0;
                                @extend %clearFix;
                                li{
                                    float:left;
                                    width: 26px;
                                    height: 15px;
                                    border-left: 1px solid #fff;
                                    background: #000;
                                    text-align: center;
                                    font-size: 12px;
                                    color: #fff;
                                    position: relative; 
                                    cursor:pointer;
                                    &:hover{
                                        background: #f00;
                                    }
                                }
                                .active{
                                    background: #f00;
                                    &::before{
                                        content: '';
                                        width: 4px;
                                        height: 4px;
                                        transform: rotate(45deg) translate(-50%, 0);
                                        background: #f00;
                                        position: absolute;
                                        top: -10%;
                                        left: 50%;
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }
    }
</style>