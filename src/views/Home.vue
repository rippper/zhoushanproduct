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
                    <div class="home_quickpass">
                        <div class="home_quickpass_title">
                            快捷通道
                        </div>
                        <div class="home_quickpass_list">
                            <ul>
                                <li>
                                    <a class="home_qp_sc" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a class="home_qp_ed" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a class="home_qp_mr" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a class="home_qp_pt" href="javascript:;"></a>
                                </li>
                                <li>
                                    <a class="home_qp_dl" href="javascript:;"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="home_collage_hotpart">
                        <div class="home_hotpart_title">
                            学院亮点
                        </div>
                        <div class="home_hotpart_list">
                            <ul>
                                <li v-for="(item, index) in hotpot" :key="index">
                                    <span class="home_list_title" v-text="item.title"></span>
                                    <span class="home_list_date" v-text="item.time"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home_ad">
                <ul>
                    <li :class="{'ad_action': item.jugment}" v-for="(item, index) in advpart" :key="index">
                        <a href="javascript:;">
                            <img :src="item.Image" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="home_listroll">
                <div class="home_listroll_title">
                    <div class="home_title_label">
                        校园风光
                    </div>
                    <div class="home_title_loadmore">+ MORE</div>
                </div>
                <div class="home_listroll_list">
                    <ul ref="rollpart" @mouseenter="rollStop" @mouseleave="rollStart">
                        <li v-for="(item, index) in rollpart" :key="index">
                            <img :src="item.Image" alt="">
                            <p><a href="javascript:;" v-text="item.msg"></a></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="home_friendlylink">
                <div class="home_friendlylink_title">
                    <div class="home_friendly_label">
                        <span class="home_friendship">友情</span><span class="home_linkto">链接/LINK</span>
                    </div>
                </div>
                <div class="home_friendlylink_list">
                    <ul>
                        <li v-for="(item, index) in friendLink" :key="index">
                            <a :href="item.Address" target="_blank">
                                <img :src="item.Image">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="home_footer">
            <div class="home_footer_selectoption">
                <ul>
                    <li>
                        <select>
                            <option>中央部门电站</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>全国省会城市网站</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>国内主要城市网站</option>
                        </select>
                    </li>
                    <li>
                        <select>
                            <option>省内其他网站</option>
                        </select>
                    </li>
                </ul>
            </div>
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
import { headerFix, tabChild, specialTeach } from '../components'
// import {  } from '../service/getData'
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
            adIndex: 0,
            bannerRobot: '',
            advRobot: '',
            rollpartRobot: '',
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
            ],
            hotpot: [
                {
                    title: '舟山老年开放大学召开',
                    time: '[09/04]'
                },
                {
                    title: '舟山老年开放大学召开',
                    time: '[09/04]'
                },
                {
                    title: '舟山老年开放大学召开',
                    time: '[09/04]'
                },
                {
                    title: '舟山老年开放大学召开',
                    time: '[09/04]'
                }
            ],
            advpart: [
                {
                    Image: require('../assets/lxyz01.png'),
                    jugment: true
                },
                {
                    Image: require('../assets/lxyz02.png'),
                    jugment: false
                },
                {
                    Image: require('../assets/lxyz03.png'),
                    jugment: false
                },
            ],
            rollpart: [
                {
                    Image: require('../assets/zyb-fengjin1.jpg'),
                    msg: 'aaaaa'
                },
                {
                    Image: require('../assets/zyb-fengjin2.jpg'),
                    msg: 'bbbbb'
                },
                {
                    Image: require('../assets/zyb-fengjin3.jpg'),
                    msg: 'ccccc'
                },
                {
                    Image: require('../assets/zyb-fengjin4.jpg'),
                    msg: 'ddddd'
                },
                {
                    Image: require('../assets/zyb-fengjin5.jpg'),
                    msg: 'eeeee'
                },
                {
                    Image: require('../assets/zyb-fengjin6.jpg'),
                    msg: 'fffff'
                },
                {
                    Image: require('../assets/zyb-fengjin7.jpg'),
                    msg: 'ggggg'
                },
                {
                    Image: require('../assets/zyb-fengjin1.jpg'),
                    msg: 'aaaaa'
                },
                {
                    Image: require('../assets/zyb-fengjin2.jpg'),
                    msg: 'bbbbb'
                },
                {
                    Image: require('../assets/zyb-fengjin3.jpg'),
                    msg: 'ccccc'
                },
                {
                    Image: require('../assets/zyb-fengjin4.jpg'),
                    msg: 'ddddd'
                },
                {
                    Image: require('../assets/zyb-fengjin5.jpg'),
                    msg: 'eeeee'
                },
                {
                    Image: require('../assets/zyb-fengjin6.jpg'),
                    msg: 'fffff'
                },
                {
                    Image: require('../assets/zyb-fengjin7.jpg'),
                    msg: 'ggggg'
                }
            ],
            friendLink: [
                {
                    Image: require('../assets/link_01.png'),
                    Address: 'http://www.moe.gov.cn/'
                },
                {
                    Image: require('../assets/link_02.png'),
                    Address: 'http://www.zjedu.gov.cn/'
                },
                {
                    Image: require('../assets/link_03.png'),
                    Address: 'http://www.zhoushan.gov.cn/'
                },
                {
                    Image: require('../assets/link_04.png'),
                    Address: 'http://www.zjedu.org/'
                },
                {
                    Image: require('../assets/link_05.png'),
                    Address: 'http://zsjy.zhoushan.gov.cn/'
                },
                {
                    Image: require('../assets/link_06.png'),
                    Address: 'http://www.dinghai.gov.cn/col/col1495746/index.html'
                },
                {
                    Image: require('../assets/link_07.png'),
                    Address: 'http://www.ssjy.net/'
                },
                {
                    Image: require('../assets/link_08.png'),
                    Address: 'http://www.pkudl.cn/index.asp'
                },
                {
                    Image: require('../assets/link_09.png'),
                    Address: 'http://www.zsxxnet.cn'
                },
                {
                    Image: require('../assets/link_10.png'),
                    Address: 'http://www.cnzx.info/'
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
        this.advRobot = setInterval(() => {
            this.adIndex++
            this.adChange(this.adIndex)
        }, 5000)
        this.rollStart()
        // this.render()
    },
    beforeDestroy () {
        clearInterval(this.bannerRobot)
        clearInterval(this.advRobot)
        clearInterval(this.rollpartRobot)
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
        },
        adChange (index) {
            if (index == 2) {
                this.adIndex = -1
            }
            this.advpart.forEach(item => {
                item.jugment = false
            })
            this.advpart[index].jugment= true
        },
        rollStop () {
            clearInterval(this.rollpartRobot)
        },
        rollStart () {
            this.rollpartRobot = setInterval(() => {
                this.$refs.rollpart.style.left = this.$refs.rollpart.offsetLeft - 1 + 'px'
                if (this.$refs.rollpart.offsetLeft <= -1274) {
                    this.$refs.rollpart.style.left = '0px'
                }
            }, 30)
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
        background-size: 100% 100%;
        .home_bodypart{
            width:1042px;
            margin: 10px auto;
            padding-bottom: 20px;
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
                margin: 14px auto 0;
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
                    float: left;
                    .home_quickpass{
                        width: 257px;
                        margin-left: 8px;
                        border: 1px solid #8dbeec;
                        .home_quickpass_title{
                            background: url('../assets/zspx_bg.png') no-repeat;
                            width: 151px;
                            height: 34px;
                            text-indent: 24px;
                            line-height: 34px;
                            font-size: 14px;
                            font-weight: bold;
                            color: #116abf;
                        }
                        .home_quickpass_list{
                            padding-top: 15px;
                            background: url('../assets/oa_listbg.png') no-repeat;
                            ul{
                                li{
                                    margin-bottom: 14px;
                                    a{
                                        display: block;
                                        margin: 0 auto;
                                        width:237px;
                                        height:50px;
                                    }
                                    .home_qp_sc{
                                        background: url('../assets/xxoa.png') no-repeat;
                                    }
                                    .home_qp_ed{
                                        background: url('../assets/jyoa.png') no-repeat;
                                    }
                                    .home_qp_mr{
                                        background: url('../assets/yzxx.png') no-repeat;
                                    }
                                    .home_qp_pt{
                                        background: url('../assets/ssxpt.png') no-repeat;
                                    }
                                    .home_qp_dl{
                                        background: url('../assets/yjzx.png') no-repeat;
                                    }
                                }
                            }
                        }
                    }
                    .home_collage_hotpart{
                        width: 257px;
                        height: 174px;
                        border: 1px solid #3fa8f2;
                        border-top: 2px solid #3fa8f2;
                        margin: 13px 0 0 8px;
                        .home_hotpart_title{
                            width: 151px;
                            height: 34px;
                            line-height: 34px;
                            margin-bottom: 6px;
                            background: url('../assets/zspx_bg.png') no-repeat;
                            text-indent: 24px;
                            color: #116abf;
                            font-weight: bold;
                            
                        }
                        .home_hotpart_list{
                            width: 100%;
                            height: 130px;
                            background: url('../assets/sqjy_bg1.png') no-repeat 0 -30px;
                            margin-top: 3px;
                            ul{
                                li{
                                    background: url('../assets/◆.png') no-repeat 0 10px;
                                    height: 28px;
                                    margin-left: 13px;
                                    line-height: 28px;
                                    text-indent: 14px;
                                    @extend %clearFix;
                                    &:hover{
                                        background: url('../assets/◆-action.png') no-repeat 0 10px;
                                        color: #b60a00;
                                    }
                                    .home_list_title{
                                        width: 160px;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        cursor: pointer;
                                        float: left;
                                    }
                                    .home_list_date{
                                        cursor: pointer;
                                        float: right;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .home_ad{
                width: 1004px;
                margin: 10px auto 0;
                ul{
                    height: 119px;
                    position: relative;
                    li{
                        position: absolute;
                        top: 9px;
                        left:0;
                        opacity: 0;
                        transition: 0.5s;
                        a{
                            display: inline-block;
                        }
                    }
                    .ad_action{
                        opacity: 1;
                        z-index: 10;
                    }
                }
            }
            .home_listroll{
                width: 1006px;
                margin: 0 auto;
                margin-top: 8px;
                height: 192px;
                background: url('../assets/xyfg_bg.png') no-repeat;
                border: 1px solid #8dbeec;
                border-top: 1px solid #3fa8f2;
                .home_listroll_title{
                    height: 42px;
                    line-height: 42px;
                    @extend %clearFix;
                    .home_title_label{
                        float:left;
                        color: #116abf;
                        margin-left: 11px;
                        font-weight: bold;
                        font-style: 14px;
                    }
                    .home_title_loadmore{
                        float: right;
                        color: #116abf;
                        font-size: 12px;
                        font-weight: bold;
                        margin-right: 16px; 
                    }
                }
                .home_listroll_list{
                    width: 976px;
                    height: 142px;
                    padding: 14px 0 5px;
                    margin: 0 auto;
                    overflow: hidden;
                    position:relative;
                    ul{
                        @extend %clearFix;
                        width: 2548px;
                        position: absolute;
                        li{
                            float:left;
                            width: 166px;
                            margin: 0 8px; 
                            img{
                                width: 166px;
                                height: 102px;
                                cursor: pointer;
                            }
                            p{
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .home_friendlylink{
                width:1004px;
                margin: 15px auto 0;
                height: 185px;
                border: 1px solid #eee;
                border-top: 2px solid #3fa8f2;
                .home_friendlylink_title{
                    height: 40px;
                    .home_friendly_label{
                        padding: 13px 0 0 15px;
                        .home_friendship{
                            display: inline-block;
                            padding: 0 2px;
                            margin-right: 5px;
                            background: #116abf;
                            color: #fff;
                        }
                        .home_linkto{
                            color: #116abf;
                        }
                    }
                }
                .home_friendlylink_list{
                    margin-top: 5px;
                    ul{
                        @extend %clearFix;
                        li{
                            float:left;
                            margin: 0 0 12px 15px;
                            width:182px;
                            height:57px;
                        }
                    }
                }
            }
        }
        .home_footer{
            width: 1042px;
            margin: 20px auto;
            position: relative;
            .home_footer_selectoption{
                ul{
                    @extend %clearFix;
                    width: 860px;
                    height: 24px;
                    margin: 0 auto;
                    li{
                        float:left;
                        margin-right: 30px;
                        select{
                            width:185px;
                            border: 1px solid #c3c3c3;
                            color: #000;
                        }
                    }
                }
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
                right: 170px;
            }
        }
    }
</style>