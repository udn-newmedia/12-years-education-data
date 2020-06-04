<template lang="pug">
  div.related-articles
    div.related-articles__articles
      Cards(size="l" :cardAmount="cardAmount")
        div.related-articles__articles__title
          h4 更多報導
        div.related-articles__articles__links
          Link(
            href="https://udn.com/newmedia/2020/12-years-education/problem/"
            title="108課綱上路周年追蹤報導"
            :img="require('~/img/related/r1.jpg')"
            text="108課綱上路將滿1年，政府砸入大量預算，推動這波被教育界喻為「20年大躍進」的新教改，但《聯合報》追蹤調查，教學現場已出現五大亂象，讓課綱精神變了調。"
          )
          Link(
            href="https://udn.com/newmedia/2020/12-years-education/collect/"
            title="關於108課綱 我想說......"
            :img="require('~/img/related/r2.jpg')"
            text="台灣教育經過一次又一次的教改，變得更好了嗎？從數據看到：學生成績好，但怕失敗、沒自信、不快樂；家長對教育充滿不信任......10張圖表，帶你看懂台灣教育現況。"
          )
    div.related-articles__abstract
      Cards(size="s" :cardAmount="cardAmount")
        p 十二年國教課程綱要（108課綱）是台灣近20年來最大的一波教育改革，這波教改，會是改變台灣教育的契機嗎？
    div.related-articles__authors
      FooterEditor
        slot
      FooterShare

</template>

<script>
import Cards from './Cards.vue';
import Link from './Link.vue';
import FooterEditor from '@/components/footer/FooterEditor.vue';
import FooterShare from '@/components/footer/FooterShare.vue';

export default {
  name: 'RelatedArticles',
  components: {
    Cards,
    Link,
    FooterEditor,
    FooterShare
  },
  data() {
    return {
      cardAmount: 5
    }
  },
}
</script>

<style lang="sass" scoped>
.related-articles
  position: relative
  overflow: hidden
  width: 100%
  min-height: 100vh
  padding: 50vh 0 0 0
  @include pc
    min-height: 720px
    padding: 0
  .related-articles__articles
    position: relative
    .related-articles__articles__title
      margin-bottom: 16px
      h4
        color: #4891f2
    .related-articles__articles__links
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      @include pad
        flex-direction: row
      @include pc
        flex-direction: row

  .related-articles__abstract
    position: absolute
    left: 0
    top: 0
    color: #ffffff
    @include pc
      left: auto
      right: 52.5%
    p
      text-align: justify
  .related-articles__authors
    position: relative
    margin-top: 80px
    @include pc
      position: absolute
      right: 55%
      top: 296px
      margin-top: 0
</style>