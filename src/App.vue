<template lang="pug">
  div#app
    Defalut
      PageIndicator(slot="progress")
      HeaderTypeA(slot="header" theme="dark")
        a(href="https://udn.com/newmedia/2020/12-years-education/problem" target="_blank" rel="noopener" aria-label="outlink" name="outlink" @click="sendGA(formatGA('MenuLink_1'))") 揭露課綱五大亂象
        a(class="active") 台灣教育關鍵數字
        a(href="https://udn.com/newmedia/2020/12-years-education/collect" target="_blank" rel="noopener" aria-label="outlink" name="outlink" @click="sendGA(formatGA('MenuLink_3'))") 關於108課綱 我想說......
        a(href="https://udn.com/search/word/2/108課綱" target="_blank" rel="noopener" aria-label="outlink" name="outlink" @click="sendGA(formatGA('MenuLink_4'))") 更多課綱相關報導

      CrucialFigures(slot="main")
        Slide(v-for="item in $store.state.cardAmount" :key="item" :index="item")
          template(v-if="item === 1")
            h3 <mark>台灣學生人數愈來愈少<br>教育預算愈來愈多</mark>
            p 少子化衝擊，台灣的學生人數在100學年度到108學年度間<strong>減少80萬人，教育預算卻逆勢增長，10年增加800億</strong>。「窮不能窮教育」體現在國家預算分配上。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 2")
            h3 <mark>國家大力投資老師和學生</mark>
            p 教育預算愈來愈多，平均每位學生分配到的教育經費明顯增加；為了給學生更好的教育品質，教育部平均每年編列<strong>2.6億到4.8億</strong>替教師「專業增能」。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 3")
            h3 <mark>孩子有更好嗎？<br>學生程度差距加大</mark>
            p 教育需兼顧「拔尖」與「扶弱」，但以2018年「國際學生能力評量計畫」（PISA）成績為例，相較2009年，台灣學生閱讀表現差距明顯拉大，高於水準5的<strong>高成就學生比例翻倍</strong>，但<strong>低於水準2的低成就學生比例並未改善，甚至增加</strong>。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 4")
            h3 <mark>孩子有更好嗎？<br>學生程度差距加大</mark>
            p 國中會考英、數兩科近年推動「減C（待加強）增A（精熟）」，減C幅度卻很有限。以英文科為例，比較2019年與2014年會考成績，<strong>A級人數增加了5.93%</strong>，C級人數略減，但<strong>始終有3成學生程度僅「待加強」</strong>，不具備國中教育程度應有的基本學力。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 5")
            h3 <mark>台灣學生最怕失敗</mark>
            p 台灣學生的「怕失敗」，被「國際學生能力評量計畫」（PISA）在報告中點名。PISA調查全球70多國的15歲學生，台灣有<strong>高達近9成學生，失敗時擔心別人的眼光；84%學生遇到失敗時，會擔憂自己是否沒有天分</strong>。反觀世界其他先進國家，如德國、荷蘭，只有不到40%學生會這樣想。
            div.slide__src
              a(
                href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_2f9d3124-en"
                target="_blank"
                rel="noopener"
                ariaLabel="reference"
                name="reference"
                @click="handleOutlinkGA('怕失敗')"
              ) PISA完整報告：<br>Students’ self-efficacy and fear of failure
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 6")
            h3 <mark>台灣學生沒自信</mark>
            p 台灣學生除了怕失敗，也缺少自我肯定。根據PISA調查，當被問及生活感受，<strong>台灣學生感到驕傲、自豪（proud）的比例全球最低，僅43％</strong>；此外，在「<a href="http://terms.naer.edu.tw/detail/1679150" target="_blank" rel="noopener" ariaLabel="reference" name="reference">自我效能（self-efficacy）</a>」調查中，台灣僅57％學生肯定自己具備同時處理多件事務的能力，遠低於OECD國家平均的70％。
            div.slide__src
              a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_a1401ebc-en" target="_blank" rel="noopener" ariaLabel="reference" name="reference" @click="handleOutlinkGA('自信心')") PISA完整報告：Students’ feelings
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 7")
            h3 <mark>學生不快樂？<br>生活滿意度全球偏低</mark>
            p PISA調查全球各國15歲學生的生活滿意度，根據調查結果，台灣學生生活滿意度的分數平均<strong>僅6.52</strong>（滿分為10），低於OECD國家平均7.04：台灣學生對於自己的生命意義也充滿困惑，<strong>僅43％學生認為自己「已找到滿意的生命意義」</strong>，比例全球倒數第二低，僅高於日本。
            div.slide__src
              a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_c414e291-en" target="_blank" rel="noopener" ariaLabel="reference" name="reference" @click="handleOutlinkGA('生活滿意度')") PISA完整報告：<br>Students’ life satisfaction and meaning in life
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 8")
            h3 <mark>學生感受不到教師熱情</mark>
            p 根據PISA調查，台灣學生普遍認為教師可以提供學習協助，但只有57%學生認為「老師關注每位學生的學習」，比例在全球75國中倒數第四低；PISA也針對校長詢問教師表現，校長認為，有<strong>23％學生因「老師課堂準備不充分」影響學習表現</strong>，高出OECD國家平均10％。
            div.slide__src
              a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_617837e6-en" target="_blank" rel="noopener" ariaLabel="reference" name="reference" @click="handleOutlinkGA('教師一')") PISA完整報告（一）：<br>Teachers’ support and teaching practices
              <br>
              a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_db2e5b3b-en" target="_blank" rel="noopener" ariaLabel="reference" name="reference" @click="handleOutlinkGA('教師二')") PISA完整報告（二）：<br>Teacher behaviour and student learning
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 9")
            h3 <mark>家長不信任教育<br>就讀私校比例逐年增</mark>
            p 家長對台灣教育的擔憂與不信任，反映在私校學生人數。教育部統計，私立國中就讀比例逐年增加，2014年就讀私立國中的學生比例僅11.74％，2019年增加到13.9％。<br><br>公立學校焦慮少子化，私立學校招生卻逆勢上揚，以私中風氣興盛的台中市為例，私立名校近3年報考人數都高達5000人，許多家長對教改沒信心，小四、小五就讓孩子補習準備考私中。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 10")
            h3 <mark>補習費用愈來愈高</mark>
            p 教育部統計，103學年度每位高中生的補習支出約3萬5923元，到107學年度<strong>激增到5萬7033元，平均每3個學生就有1個補習</strong>。<br><br>文理類補習班家數2006年到2020年間增加了<strong>2745家</strong>；匯豐銀行調查，全台國小至高中補教產業<strong>每年產值至少1500億元</strong>.....這些數字，都反映出家長、學生的補習焦慮與需求。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
          template(v-if="item === 11")
            h3 <mark>高中畢業就送出國</mark>
            p 台灣的教育環境，愈來愈難留住學生。教育部統計，高中畢業赴海外留學的學生人數逐年上升，<strong>2018年「高中畢業就出國」的學生有2163人，相較2014年增加近千人</strong>，佔畢業生的比例也以每年0.1%幅度「穩定」上升。
            div.slide-arrow-conttainer
              NmdArrow(iconColor="#4891f2")
      PageFooter(slot="footer")
        RelatedArticles
          div
            p 製作人
            p 洪欣慈
          div
            p 視覺設計
            p 張心慈
          div
            p 網頁製作
            p 楊若榆
          div
            p 製作單位
            p 聯合報新媒體中心、<br>視覺設計中心、<br>數據中心
          div
            p 監製
            p 蕭衡倩
          div
            p 
            p 2020.07
        FooterLogo
        FooterFbComment
      PageBackTop
</template>

<script>
import { sendGaMethods } from '@/mixins/masterBuilder.js';

import Defalut from '@/layouts/default.vue';

import CrucialFigures from '@/components/CrucialFigures.vue';
import FooterFbComment from '@/components/footer/FooterFbComment.vue';
import FooterLogo from '@/components/footer/FooterLogo.vue';
import HeaderTypeA from '@/components/header/HeaderTypeA.vue';
import PageBackTop from '@/components/layout/PageBackTop.vue';
import PageFooter from '@/components/footer/PageFooter.vue';
import PageIndicator from '@/components/layout/PageIndicator.vue';
import RelatedArticles from '@/components/footer/related_articles/RelatedArticles.vue';
import NmdArrow from '@/components/pinhead/NmdArrow.vue';
import Slide from '@/components/Slide.vue';

export default {
  name: 'App',
  mixins: [sendGaMethods],
  components: {
    Defalut,
    CrucialFigures,
    FooterFbComment,
    FooterLogo,
    HeaderTypeA,
    PageFooter,
    PageBackTop,
    PageIndicator,
    RelatedArticles,
    NmdArrow,
    Slide,
  },
  methods: {
    handleOutlinkGA(item) {
      this.sendGA({    
        category: 'pisa',
        action: 'click',
        label: item
      });
    }
  },
}
</script>

<style lang="sass">
body
  background-color: #303236
#app
  background-color: #303236
.article
  background-color: #303236 !important
</style>
