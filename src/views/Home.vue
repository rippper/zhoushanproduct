<template>
    <div class="homepage">
        <header-fix></header-fix>
        <div class="home_bodypart">
            <div class="home_bodypart_toppart">
                <div class="home_newsinfor">
                    <span class="home_bd">滚动公告：</span>
                    <div class="home_news_ifr"></div>
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
                <div class="home_bodypart_middleleft">
                    <div class="home_bodypart_bannerbox" @mouseenter="bannerStop" @mouseleave="bannerStart">
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
                        <div class="home_bannerbox_infor">
                            <p v-text="bannerImg[currentIndex].Infor"></p>
                        </div>
                    </div>
                    <div class="home_bodypart_tabs">
                        <div class="home_bodypart_title">
                            <ul>
                                <li v-for="(item, index) in tabInfor" :key="index" @mouseenter="tabsChange(index)">
                                    <a href="javascript:;" v-text="item.title" :class="{'home_tabs_action':index == tabsIndex}"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="home_bodypart_content">
                            <tab-child :data="tabInfor[tabsIndex]"></tab-child>
                        </div>
                    </div>
                </div>
                <div class="home_bodypart_middleright">
                    <div class="home_middleright_title">
                        <ul>
                            <li 
                                v-for="(item, index) in tabNews" 
                                :key="index" 
                                v-text="item.title" 
                                :class="{'middleright_titleaction': index == newsIndex}"
                                @mouseenter="newTabsChange(index)"
                            >
                            </li>
                        </ul>
                        <div class="home_middleright_more">
                            <span class="title_add">+</span><span class="title_lang">MORE</span>
                        </div>
                    </div>
                    <div class="home_middleright_list">
                        <ul>
                            <li v-for="(item, index) in tabNews[newsIndex].list" :key="index" v-text="item.label"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="home_bodypart_middlebottom">
                <div class="home_middlebottom_leftpart">
                    <ul>
                        <li v-for="(item, index) in specialStudy" :key="index">
                            <special-teach :data="item"></special-teach>
                        </li>
                    </ul>
                </div>
                <div class="home_middlebottom_rightpart">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { headerFix, tabChild, specialTeach } from '../components'
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
                    Infor: '美丽的月光下一片湛蓝色啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！',
                    Address: require('../assets/yueguang.jpg')
                }
            ],
            currentIndex: 1,
            tabsIndex: 0,
            newsIndex: 0,
            bannerRobot: '',
            tabInfor: [
                {
                    title: '学院动态',
                    firstLabel: '舟山蓉浦学院党委召开对照党章党规找差距专题会议',
                    others: [
                        {
                            label: '挖掘教研内涵 打造智慧课堂挖掘教研内涵 打造智慧课堂',
                            dates: '2019/11/13'
                        },
                        {
                            label: '挖掘教研内涵 打造智慧课堂',
                            dates: '2019/11/13'
                        },
                        {
                            label: '挖掘教研内涵 打造智慧课堂',
                            dates: '2019/11/13'
                        },
                        {
                            label: '挖掘教研内涵 打造智慧课堂',
                            dates: '2019/11/13'
                        },
                        {
                            label: '挖掘教研内涵 打造智慧课堂',
                            dates: '2019/11/13'
                        }
                    ]
                },
                {
                    title: '通知公告',
                    firstLabel: '舟山蓉浦学院临城校区2019年国庆值班安排',
                    others: [
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院远程、函授教育2019秋季招生...',
                            dates: '2019/11/13'
                        }
                    ]
                },
                {
                    title: '招生培训',
                    firstLabel: '舟山老年开放大学2019年秋季招生简章',
                    others: [
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        },
                        {
                            label: '舟山蓉浦学院定海校区2019年暑期报名大厅值班表',
                            dates: '2019/11/13'
                        }
                    ]
                }
            ],
            tabNews: [
                {
                    title: '舟山教育要闻',
                    list: [
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        },
                        {
                            label: '一个便民APP背后的治理变革'
                        }
                    ]
                },
                {
                    title: '政府要闻',
                    list: [
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        },
                        {
                            label: '方维副市长调研嵊泗县教育工作'
                        }
                    ]
                }
            ],
            specialStudy: [
                {
                    title: '学院党建',
                    image: require('../assets/specialstudy.jpg'),
                    headline: '舟山蓉浦学院党委召开对照党章党规找差距专题会议',
                    headlineCont: '11月11日上午，党委班子召开了对照党章党规找差距专题...',
                    newsList: [
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        }
                    ]
                },
                {
                    title: '学院党建',
                    image: require('../assets/specialstudy.jpg'),
                    headline: '舟山蓉浦学院党委召开对照党章党规找差距专题会议',
                    headlineCont: '11月11日上午，党委班子召开了对照党章党规找差距专题...',
                    newsList: [
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        }
                    ]
                },
                {
                    title: '学院党建',
                    image: require('../assets/specialstudy.jpg'),
                    headline: '舟山蓉浦学院党委召开对照党章党规找差距专题会议',
                    headlineCont: '11月11日上午，党委班子召开了对照党章党规找差距专题...',
                    newsList: [
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        }
                    ]
                },
                {
                    title: '学院党建',
                    image: require('../assets/specialstudy.jpg'),
                    headline: '舟山蓉浦学院党委召开对照党章党规找差距专题会议',
                    headlineCont: '11月11日上午，党委班子召开了对照党章党规找差距专题...',
                    newsList: [
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        },
                        {
                            label: '学院党委组织传达学习党的十九届四中全会精神',
                            dates: '2019-11-07'
                        }
                    ]
                }
            ]
        }
    },
    mounted () {
        this.$refs.bottomButton[0].className = 'active'
        this.bannerRobot = setInterval(() => {
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
        },
        bannerStop () {
            clearInterval(this.bannerRobot)
        },
        bannerStart () {
            this.bannerRobot = setInterval(() => {
                this.currentIndex++
                this.bannerTo(this.currentIndex)
            },5000)
        },
        tabsChange (index) {
            this.tabsIndex = index
        },
        newTabsChange (index) {
            this.newsIndex = index
        }
    },
    components: {
        headerFix,
        tabChild,
        specialTeach
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
                    float: right;
                    margin-top: 10px;
                    margin-right: 10px;
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
                margin: -65px auto 0;
                @extend %clearFix;
                .home_bodypart_middleleft{
                    width: 737px;
                    float:left;
                    @extend %clearFix;
                    .home_bodypart_bannerbox{
                        float:left;
                        width: 320px;
                        height: 290px;
                        border: 1px solid #8dbeec;
                        background: #fff;
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
                                background: rgba(0, 0, 0, 0.2);
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
                                        float: left;
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
                        .home_bannerbox_infor{
                            margin-top: 12px;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            p{
                                width: 260px;
                                height: 16px;
                                margin: 0 auto;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden; 
                                cursor: pointer;
                                &:hover{
                                    color: #f00;
                                }
                            }
                        }
                    }
                    .home_bodypart_tabs{
                        float: right;
                        width: 406px;
                        border: 1px solid #8dbeec;
                        background: #fff;
                        .home_bodypart_title{
                            width: 406px;
                            height: 35px;
                            background: url('../assets/news2_titlebg.png') no-repeat;
                            ul{
                                @extend %clearFix;
                                li{
                                    float: left;
                                    width: 130px;
                                    height: 35px;
                                    line-height: 35px;
                                    color: #116abf;
                                    text-align: center;
                                    cursor: pointer;
                                    a{
                                        font-weight: bold;
                                    }
                                }
                                .home_tabs_action{
                                    color: #b60a00;
                                }
                            }
                        }
                    }
                }
                .home_bodypart_middleright{
                    float: right;
                    width: 257px;
                    height: 290px;
                    border: 1px solid #eeeeee;
                    background: #fff;
                    .home_middleright_title{
                        @extend %clearFix;
                        ul{
                            float: left;
                            width: 200px;
                            height: 35px;
                            background: url('../assets/zspx_bg_new.png') no-repeat;
                            background-size: 200px 40px;
                            @extend %clearFix;
                            li{
                                float: left;
                                width: 95px;
                                height: 35px;
                                line-height: 35px;
                                text-align: center;
                                font-size: 14px;
                                font-weight: bold;
                                color: #116abf;
                                cursor: pointer;
                                &:last-of-type{
                                    width: 105px;
                                }
                            }
                            .middleright_titleaction{
                                color: #b60a00;
                            }
                        }
                        .home_middleright_more{
                            float: right;
                            width: 57px;
                            height: 35px;
                            line-height: 35px;
                            font-size: 12px;
                            text-align: center;
                            cursor: pointer;
                            .title_add{
                                color: #116abf;
                            }
                            .title_lang{
                                font-weight: bold;
                                color: #cdcdcd;
                            }
                            &:hover span{
                                color: #116abf;
                            }
                        }
                    }
                    .home_middleright_list{
                        height:243px;
                        margin-top: 12px;
                        background: url('../assets/zspx_cbg.png');
                        background-size: 100%;
                        ul{
                            li{
                                height: 27px;
                                line-height: 27px;
                                margin-left: 12px;
                                background: url('../assets/◆.png') no-repeat 0 12px;
                                text-indent: 15px;
                                font-size: 12px;
                                cursor:pointer;
                                &:hover{
                                    background: url('../assets/◆-action.png') no-repeat 0 12px;
                                    font-weight: bold;
                                    color: #b60a00;
                                }
                            }
                        }
                    }
                }
            }
            .home_bodypart_middlebottom{
                width: 1004px;
                height: 625px;
                margin: 14px auto;
                @extend %clearFix;
                .home_middlebottom_leftpart{
                    float: left;
                    width: 737px;
                    background: url('../assets/ztjy_bbg.png') no-repeat;
                    padding-top: 60px;
                    height: 585px;
                    & > ul{
                        @extend %clearFix;
                      & > li{
                            float:left;
                            margin-left: 25px;
                            margin-top: 13px;
                            height: 264px;
                            margin-right: 10px;
                            width: 332px;
                            background: url('../assets/sqjy_bg1.png') no-repeat;
                        }
                    }
                }
                .home_middlebottom_rightpart{
                    float: right;
                }
            }
            
        }
    }
</style>