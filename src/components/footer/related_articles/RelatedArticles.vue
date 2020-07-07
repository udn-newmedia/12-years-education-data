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
            title="寫下你的教改心聲"
            :img="require('~/img/related/r2.jpg')"
            text="108課綱在爭議聲浪中上路，面對這一波20年來最大的教育改革，《聯合報》希望蒐集各界真實心聲，歡迎與我們分享你與孩子遇到的狀況、或寫下你對這一波新教改的想法。 "
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