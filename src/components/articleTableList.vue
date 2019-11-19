<template>
    <div class="articleTableList">
        <div class="cm-lesson-title">
            <ul class="clearfix">
                <li class="cm-lesson-title2">文章标题</li>
                <li class="cm-lesson-title4">上传时间</li>
            </ul>
        </div>
        <table class="cml-table">
            <tr v-for="(item, index) in listData" :key="index">
                <th width="567">
                    <router-link :to="{ path: '/newsdetail', query:{id: item.ArticleId}}" v-text="item.ArticleTitle"></router-link> 
                </th>
                <th width="110" v-text="item.ArticleCreateDate"></th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: {
        listData: {
            type: Array
        },
        currentPage: {
            type: Number
        },
        Rows: {
             type: Number
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../style/mixin";
    .articleTableList{
        .cm-lesson-title{
            width: 700px;
            margin: 0 auto;
            margin-top: 25px;
            ul{
                width:680px;
                margin: 0 auto;
                li{
                    float: left;
                    text-align: center;
                    height: 35px;
                    line-height: 35px;
                    background: #e9e9e9;
                    &.cm-lesson-title2 {
                        width: 567px;
                        margin-right: 3px;
                    }
                    &.cm-lesson-title4 {
                        width: 110px;
                    }
                }
            }
        }
        .cml-table{
            width: 680px;
            margin: 0 auto;
            border: none;
            table-layout: fixed;
            tr {
                border-bottom: 1px solid #e9e9e9;
                th {
                    height: 48px;
                    line-height: 48px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: normal;
                    a {
                        color: #333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                &:hover{
                    color: #2c6ed0;
                    a{
                        color: #2c6ed0;
                    }
                }
            }
        }
    }
</style>
