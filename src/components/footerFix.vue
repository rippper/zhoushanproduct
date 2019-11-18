<template>
    <div class="footerfix">
        <div class="footerfix_innerbox">
            <div class="home_footer_states">
                <div class="home_states_stater">
                    <a href="javascript:;">站长统计</a>
                    <a href="javascript:;"> |  今日IP[21] | 今日PV[103] | 昨日IP[26] |  昨日PV[56] | </a>
                    <a href="javascript:;">当前在线[1]</a>
                </div>
                <p>舟山蓉浦学院 版权所有©2018年1月</p>
                <p>浙ICP备05083451号-2 杭州精英在线教育科技股份有限公司制作维护</p>
                <p>浙公网安备 33090002000166号 <a href="javascript:;">老版网站</a></p>
            </div>
            <div class="home_footer_label">
                <a href="javascript:;">
                    <img src="../assets/blue.png">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerFix',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .footerfix{
        width: 100%;
        min-width: 1042px;
        height:121px;
        background: #58a0e2;
        padding-top: 10px;
        .footerfix_innerbox{
            width: 1042px;
            margin: 40px auto 0;
            color: #fff;
            font-size: 12px;
            position: relative;
            a{
                font-size: 12px;
                color: #fff;
            }
            .home_footer_states{
                padding: 6px;
                margin-top: 10px;
                .home_states_stater{
                    text-align: center;
                }
                p{
                    text-align: center;
                }
            }
            .home_footer_label{
                position: absolute;
                bottom: 10px;
                right: 150px;
            }
        }
    }
</style>