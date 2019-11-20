<template>
    <div class="specialteach">
        <div class="specialteach_title">
            <div class="specialteach_title_leftpart">
                <img src="../assets/title-jt.png" alt="">
                <span v-text="data.title"></span>
            </div>
            <div class="specialteach_title_rightpart">
                <a href="javascript:;">+ more</a>
            </div>
        </div>
        <div class="specialteach_maincontent">
            <div class="specialteach_headline">
                <div class="specialteach_headline_pic">
                    <img src="../assets/specialstudy.jpg" alt="">
                </div>
                <div class="specialteach_headline_cont">
                    <div class="specialteach_cont_title">
                        <a href="javascript:;" v-text="data.headlineabb" :title="data.headline"></a>
                    </div>
                    <div class="specialteach_cont_content" v-text="data.headlineCont"></div>
                </div>
            </div>
            <div class="specialteach_list">
                <ul>
                    <li v-for="(item, index) in data.newsList" :key="index">
                        <a href="javascript:;" v-text="item.labelabb" :title="item.label"></a>
                        <span v-text="item.dates"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { wordsL } from '../service/helpPlugin'
export default {
    name: 'specialTeach',
    props: {
        data:Object
    },
    mounted () {
        this.transTime()
        this.transwords()
    },
    methods: {
        transTime () {
            this.data.newsList.forEach(item => {
                let date = new Date(item.dates)
                let mouth = date.getMonth() + 1
                let day = date.getDate()
                if (day < 10) {
                    day = '0' + day
                }
                item.dates = '[' + mouth + '/' + day + ']'
            });
        },
        transwords () {
            this.data.headlineabb = wordsL(this.data.headline, 13)
            this.data.headlineContabb = wordsL(this.data.headlineCont, 25)
            this.data.newsList.forEach(item => {
                let abbs = wordsL(item.label, 19)
                this.$set(item, 'labelabb', abbs)
            })
        }
    }

}
</script>

<style lang="scss">
@import "../style/mixin";
    .specialteach{
        .specialteach_title{
            border: 1px solid #8dbeec;
            border-bottom: 2px solid #0b589f;
            height: 30px;
            padding-left: 1px;
            padding-right: 1px;
            background: url('../assets/sq_titlebg.png') repeat;
            @extend %clearFix;
            .specialteach_title_leftpart{
                float:left;
                color: #116abf;
                font-size: 14px;
                font-weight: bold;
                height: 30px;
                line-height: 30px;
                img{
                    vertical-align: middle;
                    margin-left: 13px;
                    margin-right: 5px;
                    width: 14px;
                    height: 16px;
                }
            }
            .specialteach_title_rightpart{
                float:right;
                a{
                    margin-right: 15px;
                    color: #116abf;
                    font-size: 12px;
                    font-weight: bold;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
        .specialteach_maincontent{
            width: 100%;
            margin-top: 6px;
            .specialteach_headline{
                @extend %clearFix;
                .specialteach_headline_pic{
                    width: 134px;
                    height: 96px;
                    border: 1px solid #d0d0d0;
                    padding: 2px 3px;
                    margin-left: 6px;
                    float:left;
                    img{
                        width: 134px;
                        height: 96px;
                    }
                }
                .specialteach_headline_cont{
                    float:right;
                    width: 177px;
                    margin-left: 7px;
                    font-size: 12px;
                    .specialteach_cont_title{
                        margin-top: 8px;
                        a{
                            display: inline-block;
                            height: 24px;
                            line-height: 24px;
                            font-weight: bold;
                            color: #004065;
                        }
                    }
                    .specialteach_cont_content{
                        width: 100%;
                        font-size: 12px;
                        text-indent: 20px;
                        font-weight: bold;
                        color: #004065;
                        height: 20px;
                        line-height: 20px;
                    }
                }
            }
            .specialteach_list{
                ul{
                    li{
                        background: url('../assets/◆.png') no-repeat 13px 10px;
                        height: 25px;
                        line-height: 25px;
                        text-indent: 21px;
                        @extend %clearFix;
                        a{
                            color: #004065;
                            font-size: 12px;
                            float: left;
                            &:hover{
                                color: #116abf;
                            }
                        }
                        span{
                            float:right;
                            color: #004065;
                            float: right;
                            margin-right: 13px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>
