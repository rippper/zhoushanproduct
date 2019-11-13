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
            <div class="home_bodypart_banner">
                
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

        }
    },
    methods: {

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
        }
    }
</style>