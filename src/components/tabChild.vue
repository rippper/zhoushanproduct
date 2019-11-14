<template>
    <div class="tabchild">
        <div class="tabchild_content">
            <div class="tabchild_headtitle">
                <p class="tabchild_headmsg" v-text="data.firstLabel"></p>
            </div>
            <div class="tabchild_contentlist">
                <ul>
                    <li v-for="(item, index) in data.others" :key="index">
                        <div class="tabchild_contentlist_label" v-text="item.labelabb" :title="item.label"></div>
                        <div class="tabchild_contentlist_dates" v-text="item.dates"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { wordsL } from '../service/wordsLimit'
export default {
    name: 'tabChild',
    data () {
        return {

        }
    },
    props: {
        data: Object
    },
    mounted () {
        this.wordsLimit()
    },
    methods: {
        wordsLimit () {
            this.data.others.forEach(item => {
                let abbs = wordsL(item.label, 19)
                this.$set(item, 'labelabb', abbs)
            });
        }
    },
    watch: {
        'data' () {
            this.wordsLimit()
        }
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .tabchild{
        padding-left: 9px;
        .tabchild_content{
            width: 397px;
            height: 255px;
            overflow: hidden;
            background: url('../assets/news_titlebg.png');
            .tabchild_headtitle{
                height: 88px;
                p{
                    color: #b60a00;
                    font-size: 20px;
                    line-height: 30px;
                    font-weight: bold;
                    width: 335px;
                    text-align: center;
                    margin: 0 auto;
                    padding-top: 15px;
                }
            }
            .tabchild_contentlist{
                ul{
                    li{
                        background: url('../assets/◆.png') no-repeat 0 13px;
                        text-indent: 16px;
                        height: 27px;
                        line-height: 27px;
                        border-bottom: 1px dashed #ccc;
                        cursor: pointer;
                        @extend %clearFix;
                        .tabchild_contentlist_label{
                            float: left;
                            width: 298px;
                        }
                        .tabchild_contentlist_dates{
                            float: right;
                            color: #888;
                        }
                        &:hover{
                            color: #116abf;
                        }
                    }
                }
            }
        }
        

    }
</style>
