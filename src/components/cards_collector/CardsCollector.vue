<template lang="pug">
  div.cards-collector
    Card(v-for="item in cardAmount" :key="item" :index="cardAmount-item" position="cover")
      template(v-if="cardAmount-item === 0")
        h1(slot='cover') 10個關鍵數字<br>看懂台灣教育
      template(v-if="cardAmount-item === 1")
        h4(slot='title') 台灣近年學生人數與教育預算變化
        p.small(slot='note') 註：學生人數教育部以學年為統計單位，預算則以年度為統計單位。
        p.small(slot='source') 資料來源／教育部、主計總處
      template(v-if="cardAmount-item === 2")
        p.small(slot='note') 註：教師經費依據為教育部編列之「推動教師專業發展」、「推動教師專業成長」相關預算
        p.small(slot='source') 資料來源／教育部
      template(v-if="cardAmount-item === 3")
        h4(slot='title') 2019年台灣PISA閱讀表現成績
        p.small 註：教師經費依據為教育部編列之「推動教師專業發展」、「推動教師專業成長」相關預算
        p.small(slot='source') 資料來源／
          a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_acd78851-en" target="_blank") PISA官方網站
      template(v-if="cardAmount-item === 4")
        h4(slot='title') 國中會考英數A級、C級人數變化
        p.small(slot='source') 資料來源／臺師大心測中心
      template(v-if="cardAmount-item === 5")
        p.small(slot='source') 資料來源／
          a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_acd78851-en" target="_blank") PISA官方網站
      template(v-if="cardAmount-item === 6")
        p.small(slot='source') 資料來源／
          a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_acd78851-en" target="_blank") PISA官方網站
      template(v-if="cardAmount-item === 7")
        h4(slot='title') 世界主要國家學生生活滿意度
        p.small(slot='source') 資料來源／
          a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_acd78851-en" target="_blank") PISA官方網站
      template(v-if="cardAmount-item === 8")
        h4(slot='title') 各國學生認同<br>「老師關注每位學生學習」的比例
        p.small(slot='source') 資料來源／
          a(href="https://www.oecd-ilibrary.org/education/pisa-2018-results-volume-iii_acd78851-en" target="_blank") PISA官方網站
      template(v-if="cardAmount-item === 9")
        h4(slot='title') 私立國中就讀人數變化
        p.small(slot='source') 資料來源／教育部
      template(v-if="cardAmount-item === 10")
        h4(slot='title') 補習費用與家數變化
        p.small(slot='source') 資料來源／教育部
      template(v-if="cardAmount-item === 11")
        h4(slot='title') 高中生近5年海外留學人數
        p.small(slot='source') 資料來源／教育部
        
</template>

<script>
import { autoResize_3 } from '@/mixins/masterBuilder.js';

import Card from './Card.vue';

export default {
  name: 'CardsCollector',
  mixins: [autoResize_3],
  components: {
    Card,
  },
  computed: {
    cardAmount() {
      return Math.ceil(this.$store.state.cardAmount * this.totalCardRatio);
    },
    totalCardRatio() {
      if (this.deviceType === 'pc') return 2.5;
      if (this.deviceType === 'pad') return 2;
      return 1.5
    }
  }
}
</script>

<style lang="sass" scoped>
.cards-collector
  position: relative
  pointer-events: none
  width: 100%
  height: 100%

  @include pad
    width: 70%
  @include pc
    width: 45%
</style>