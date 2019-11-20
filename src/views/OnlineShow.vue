<template>
    <div class="onlineshow">
        <header-fix></header-fix>
        <div>
            <div class="oli_rightbodycontent">
                <div class="per_bodytitle">
                    校园风光
                    <a href="javascript:;" :class="{ 'action': condition == 1 }" @click="changeOrder('newtype')">最新
                        <span class="oli_yellowdown" v-show="condition == 1"></span>
                        <span class="oli_graydown" v-show="condition == 0"></span>
                    </a>
                    <a href="javascript:;" :class="{ 'action': condition == 0 }" @click="changeOrder('hottype')">最热
                        <span class="oli_yellowdown" v-show="condition == 0"></span>
                        <span class="oli_graydown" v-show="condition == 1"></span>
                    </a>
                </div>
                <div class="per_bodycontent">
                    <ul class="clearFix">
                        <li class="pull-left" v-for="(item, index) in productList" :key="index" @click="lineto(item.Id)">
                            <div class="per_productimg">
                                <img :src="item.Image" alt="">
                                <div class="per_producttitleinfor">
                                    <span class="per_producticon"></span>
                                    <span class="per_productnum" v-text="item.EnclosureCount"></span>
                                </div>
                            </div>
                            <div class="per_productimg"></div>
                            <div class="per_productimg"></div>
                            <p class="per_producttitle" v-text="item.ProductionName"></p>
                            <p class="per_proimginfor"><span>点击量：</span><span v-text="item.ClickCount"></span><span></span><span v-text="item.AssistCount"></span></p>
                        </li>
                    </ul>
                    <div class="per_nothinginfor" v-if="noContent">
                        暂无数据
                    </div>
                </div>
                <div class="per_bodybottom">
                    <div class="per_singlepage">
                        <el-pagination
                            :current-page.sync="currentPage"
                            background
                            layout="prev, pager, next"
                            @current-change="currentchange()"
                            :total="totalPage">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <footer-fix></footer-fix>
    </div>
</template>

<script>
import { headerFix, footerFix } from '../components'
import { ProductionInfoList } from '../service/getData'
import { pageCal } from '../service/helpPlugin'
export default {
    name: 'onlineShow',
    data () {
        return {
            productList: [],
            condition: 1,
            Order: 'desc',
            Sort: 'CreateDate',
            noContent: false,
            currentPage: 1,
            totalPage:0,
            Rows: 9
        }
    },
    mounted () {
        this.random()
    },
    methods: {
        lineto (index) {
            this.$router.push({ path: '/onlinedetail', query: { Id: index } })
        },
        changeOrder (condition) {
            if (condition == 'newtype') {
                this.condition = 1
                this.Sort = 'CreateDate'
            } else {
                this.condition = 0 
                this.Sort = 'ClickCount'
            }
            console.log(this.condition)
            this.random()
        },
        async random () {
            this.currentPage = 1
            let Infor = await ProductionInfoList({
                Order: this.Order,
                Sort: this.Sort,
                Page: this.currentPage,
                Rows: this.Rows
            })
            console.log(Infor)
            this.productList = Infor.Data.List
            if (this.productList.length == 0) {
                this.noContent = true
            }
            this.totalPage = pageCal(Infor.Data.TotalCount, this.Rows)
        },
        async currentchange () {
            let Infor = await ProductionInfoList({
                Order: this.Order,
                Sort: this.Sort,
                Page: this.currentPage,
                Rows: this.Rows
            })
            this.productList = Infor.Data.List
        },
    },
    components: {
        headerFix,
        footerFix
    }
}
</script>

<style lang="scss">
@import "../style/mixin";
    .onlineshow{
        width:100%;
        max-width: 1366px;
        margin: 0 auto;
        background: url('../assets/zsbg.jpg') no-repeat;
        background-size: cover;
        .per_bodytitle{
            padding-left: 19px;
            border-bottom: 2px solid #efefef;
            height: 66px;
            font-size: 20px;
            font-weight: bold;
            line-height: 66px;
            display: block;
            color:#888;
            a{
                font-size: 12px;
                color:#888;
                margin-left:37px;
                font-weight: normal;
                .oli_yellowdown{
                    display: inline-block;
                    width:6px;
                    height:11px;
                    margin-left:5px;
                    background:url('../assets/oli-todown1.png');
                    position: relative;
                    top:1px;
                }
                .oli_graydown{
                    display: inline-block;
                    width:6px;
                    height:11px;
                    margin-left:5px;
                    background:url('../assets/oli-todown2.png');
                    position: relative;
                    top:1px;
                }
            }
            .action{
                color: #ff9c08;
            }
        }
        .oli_rightbodycontent{
            background:#fff;
            width:1016px;
            margin: 10px auto 0;
            .per_bodycontent{
                padding-top: 21px;
                border-bottom:2px solid #efefef;
                ul{
                    li{
                        margin-left:48px;
                        margin-bottom:29px;
                        position: relative;
                        width:275px;

                        .per_productimg{
                            width:262px;
                            height:158px;
                            position: absolute;
                            background:#fff;
                            border: 1px solid #cecece;

                            img{
                                width:262px;
                                height:158px;
                                vertical-align: middle;
                            }

                            .per_productclick{
                                position: absolute;
                                top:9px;
                                left:11px;
                            }

                            &:first-of-type{
                                z-index: 3;
                            }

                            &:nth-of-type(2){
                                width:261px;
                                height:157px;
                                top:5px;
                                left:6px;
                                border:1px solid #cecece;
                                z-index: 2;
                            }

                            &:last-of-type{
                                width:261px;
                                height:157px;
                                top:10px;
                                left:12px;
                                border:1px solid #cecece;
                            }

                            .per_producttitleinfor{
                                width: 56px;
                                height: 32px;
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                line-height: 32px;
                                background:#4470b5;
                                color:#fff;

                                .per_producticon{
                                    position: relative;
                                    top:3px;
                                    display: inline-block;
                                    background:url('../assets/per-producticon.png');
                                    width:18px;
                                    height:17px;
                                    margin-left:6px;
                                }

                                .per_productnum{
                                    display: inline-block;
                                    text-align: center;
                                    width:32px;
                                }
                            }

                        }

                        .per_producttitle{
                            margin-top:187px;
                            height:40px;
                            color:#888;
                        }
                        .per_proimginfor{
                            span{
                                color:#d1d1d1;

                                &:nth-of-type(3){
                                    margin:0 5px 0 60px;
                                    display: inline-block;
                                    width:18px;
                                    height:18px;
                                    background:url('../assets/per-fingericon.png');
                                    position: relative;
                                    top:2px;
                                }
                            }
                        }
                    }   
                }
                .per_nothinginfor{
                    height: 80px;
                    padding-top:15px;
                    text-align: center;
                    font-size: 18px;
                    box-sizing: border-box;
                }
            }
            .per_bodybottom{
                height:78px;
                text-align: center;
                &:before{
                    content:'';
                    display: inline-block;
                    vertical-align: middle;
                    height:100%;
                }
                .per_singlepage{
                    display: inline-block;
                }
            }
        }
    }
</style>
