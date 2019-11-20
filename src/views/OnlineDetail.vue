<template>
    <div class="onlinedetail">
        <header-fix></header-fix>
        <div class="oli_bannerDepart">
            <div class="oli_inforBanner">
                <!-- <p class="oli_bannerContent" v-html="description"></p> -->
                <div class="oli_bannerlink">
                    <div class="cm-lesson-breadcrumb r">
                        <span class="action_infor">您所在的位置是：</span>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/onlineshow' }">校园风光</el-breadcrumb-item>
                            <el-breadcrumb-item>风光详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
                <div class="oli_breadcub"></div>
                <div class="oli_swiper">
                    <ul ref="swiper">
                        <li v-for="(item, index) in bannerImg" :key="index">
                            <img :src="item.EnclosureUrl" alt="">
                        </li>
                    </ul>
                    <div class="oli_leftButton" @click="bannerTo(bannerIndex-1)">&lt;</div>
                    <div class="oli_rightButton" @click="bannerTo(bannerIndex+1)">&gt;</div>
                </div>
                <!-- <div class="oli_imgIntroduction">
                    <span class="oli_currentPage" v-text="localIndex"></span>
                    /
                    <span class="oli_allPage" v-text="bannerImg.length"></span>
                    <span class="oli_pageContent" v-text="bannerImg[localIndex].Remark"></span>
                </div> -->
                <div class="oli_swiperBottom">
                    <div class="oli_leftBtn" @click="move('left')" ref="bottomLeft">&lt;</div>
                    <div class="oli_bottomLength">
                        <ul ref="swiperBottom">
                            <li v-for="(item, index) in bottomImg" :key="index" ref="btnBottom" @click="bottomTo (index)">
                                <img :src="item.EnclosureUrl" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="oli_rightBtn" @click="move('right')" ref="bottomRight">&gt;</div>
                </div>
            </div>
        </div>
        <footer-fix></footer-fix>
    </div>
</template>

<script>
import { headerFix, footerFix } from '../components'
import { ProductionDetail } from '../service/getData'
import { throttle } from '../service/helpPlugin'
export default {
    name: 'onlinedetail',
    data () {
        return {
            proId: this.$route.query.Id,
            bannerImg: [],
            bottomImg: [],
            bannerIndex: 0
        }
    },
    mounted () {
        this.render()
    },
    methods: {
        culWidth () {
            this.$refs.swiper.style.width = (this.bannerImg.length) * 769 + 'px'
            this.$refs.swiperBottom.style.width = (this.bottomImg.length) * 142 + 'px'
        },
        bottomTo: throttle(function (index) {
            index
            this.$refs.btnBottom.forEach(item => {
                item.style.border = '2px solid #fff'
            })
            if (index <= 2) {
                this.$refs.swiperBottom.style.left = 0
            } else if ((index > 2 && index <= this.bottomImg.length - 3) && this.bottomImg.length > 5) {
                this.$refs.swiperBottom.style.left = -(index - 2) * 142 + 'px'
            } else if (index > this.bottomImg.length - 4) {
                this.$refs.swiperBottom.style.left = -(this.bottomImg - 3) * 142 + 'px'
            }
            this.$refs.btnBottom[index].style.border = '2px solid #ff0'
            this.bannerTo(index)
        }, 300),
        move: throttle(function (ways) {
            let self = this
            if (ways == 'left' && self.$refs.swiperBottom.offsetLeft < 0) {
                self.$refs.swiperBottom.style.left = self.$refs.swiperBottom.offsetLeft + 142 + 'px'
            } else if (ways == 'right' && self.$refs.swiperBottom.offsetLeft > -self.bottomImg.length * 142 + 711) {
                self.$refs.swiperBottom.style.left = self.$refs.swiperBottom.offsetLeft - 142 + 'px'
            }
            if (self.$refs.swiperBottom.offsetLeft == 0 && ways == 'left') {
                this.$message.warning('该展厅已经到顶')
            } else if (self.$refs.swiperBottom.offsetLeft == (this.bannerImg.length - 3) * -142 && ways == 'right') {
                this.$message.warning('该展厅已经到底')
            }
        }, 300),
        bannerTo: throttle(function (index) {
            let self = this
            let timer = null
            this.bannerIndex = index
            if (this.bannerIndex < 0) {
                this.bannerIndex = 0
                this.$message({
                    message: '图集已经到顶',
                    type: 'warning'
                })
                return ''
            } else if (this.bannerIndex > this.bannerImg.length - 1) {
                this.bannerIndex = this.bannerImg.length - 1
                this.$message({
                    message: '图集已经到底',
                    type: 'warning'
                })
                return ''
            }
            let totalDistance = this.bannerIndex * -769
            let currentDistance = self.$refs.swiper.offsetLeft
            let speed = round()
            function round () {
                if (totalDistance - currentDistance >= 0) {
                    let sum = (totalDistance - currentDistance) / 30
                    return sum
                } else if (totalDistance - currentDistance < 0) {
                    let sum = (totalDistance - currentDistance) / -30
                    return sum
                }
            } // 测算轮播切换速度
            
            timer = setInterval(function () {
                if (currentDistance < totalDistance) {
                    self.$refs.swiper.style.left = self.$refs.swiper.offsetLeft + speed + 'px'
                    if (self.$refs.swiper.offsetLeft >= totalDistance) {
                        self.$refs.swiper.style.left = totalDistance + 'px'
                        clearInterval(timer)
                    }
                } else if (currentDistance > totalDistance) {
                    self.$refs.swiper.style.left = self.$refs.swiper.offsetLeft - speed + 'px'
                    if (self.$refs.swiper.offsetLeft <= totalDistance) {
                        self.$refs.swiper.style.left = totalDistance + 'px'
                        clearInterval(timer)
                    }
                }
            }, 10)
            this.bottomTo(this.bannerIndex, 'nature')
            this.localIndex = this.bannerIndex + 1
        }, 300),
        async render () {
            let msg = await ProductionDetail({
                Id: this.proId
            })
            if (msg.Data.ProductionEnclosure.length <= 5) {
                this.$refs.bottomLeft.style.visibility = 'hidden'
                this.$refs.bottomRight.style.visibility = 'hidden'
            } else {
                this.$refs.bottomLeft.style.visibility = 'visible' 
                this.$refs.bottomRight.style.visibility = 'visible'
            }
            this.bannerImg = msg.Data.ProductionEnclosure
            this.bottomImg = msg.Data.ProductionEnclosure
            this.culWidth()
            console.log(this.bottomImg)
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
    .onlinedetail{
        width:100%;
        max-width: 1366px;
        margin: 0 auto;
        background: url('../assets/zsbg.jpg') no-repeat;
        background-size: cover;
        .oli_bannerDepart{
            background: #fff;
            width:1046px;
            margin: 10px auto 0;
            padding-top: 15px;
            padding-bottom: 20px;
            .oli_inforBanner{
                .oli_bannerlink{
                    height: 38px;
                    width: 996px;
                    background: #eff7ff;
                    border-bottom: 2px solid #008bd7;
                    margin: 0 auto 15px;
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
                .oli_bannerContent{
                    padding-bottom: 24px;
                    text-indent: 38px;
                }
                .oli_swiper{
                    width: 769px;
                    height: 452px;
                    margin: 0 auto;
                    overflow: hidden;
                    position: relative;
                    background:#cdcdcd;
                    &:hover{
                        .oli_leftButton,.oli_rightButton{
                            opacity: 1;
                        }
                    }
                    ul{
                        @extend %clearFix;
                        position: absolute;
                        top:0;
                        left:0;
                        li{
                            float:left;
                            width: 769px;
                            height: 452px;
                            text-align: center;
                            img{
                                height: 452px;
                                max-width: 769px;
                            }
                        }
                    }
                    .oli_leftButton,.oli_rightButton{
                        width:48px;
                        height:48px;
                        font-size: 25px;
                        text-align: center;
                        line-height: 48px;
                        background:rgba(0,0,0,0.4);
                        border-radius: 48px;
                        color:#fff;
                        position: absolute;
                        margin-top: -24px;
                        transition: 0.5s;
                        opacity: 0;
                        cursor: pointer;

                    }
                    .oli_leftButton{
                        top:50%;
                        left:24px;
                    }
                    .oli_rightButton{
                        top:50%;
                        right:24px;
                    }
                }
                .oli_imgIntroduction{
                    text-align: center;
                    line-height: 66px;
                    height: 66px;
                    span{
                        font-size: 16px;
                    }
                    .oli_allPage{
                        margin-right:16px;
                    }
                    .oli_currentPage{
                        font-size: 24px;
                        color: #66a3fd;
                    }
                }
                .oli_swiperBottom{
                    width: 767px;
                    height: 81px;
                    overflow: hidden;
                    margin: 20px auto 0;
                    @extend %clearFix;
                    .oli_bottomLength{
                        float:left;
                        width:711px;
                        height: 81px;
                        overflow: hidden;
                        position: relative;
                        ul{
                            @extend %clearFix;
                            position: absolute;
                            top:0;
                            left:0;
                            transition: 0.3s;
                            li{
                                margin: 0 2px;
                                border: 2px solid #fff;
                                width: 138px;
                                height: 81px;
                                text-align: center;
                                background: #cdcdcd;
                                float: left;
                                &:first-of-type{
                                    border: 2px solid #ff0;
                                }
                                img{
                                    height: 77px;
                                    max-width: 134px;
                                    vertical-align: middle
                                }
                            }
                        }
                    }
                    .oli_leftBtn,.oli_rightBtn{
                        float:left;
                        height:81px;
                        width:28px;
                        text-align: center;
                        line-height: 81px;
                        color:#fff;
                        background:rgba(0,0,0,0.4);
                        visibility: hidden;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
