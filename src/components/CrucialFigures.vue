<template lang="pug">
  main.crucial-figures
    section.crucial-figures__frame(:class="crucialFiguresFrameClassAttr")
      Marquee
      CardsCollector
      Progress(v-show="!this.$store.state.isCrucialFiguresInitial")
    section#slides.crucial-figures__slides-container
      header.crucial-figures__slides__decoration(:class="crucialFiguresSlidesMaskClassAttr")
        div.crucial-figures__slides__decoration__title(v-if="deviceType === 'pc'" :class="decorationShowClassAttr") {{decorationTitle}}
      article.crucial-figures__slides
        slot
      div.crucial-figures__slides__decoration(:class="crucialFiguresSlidesMaskClassAttr")
        div.crucial-figures__slides__decoration__body
        div.crucial-figures__slides__decoration__mask
          div.crucial-figures__slides__decoration__mask__item.crucial-figures__slides__decoration__mask__item--top
          div.crucial-figures__slides__decoration__mask__item.crucial-figures__slides__decoration__mask__item--bottom

        div.crucial-figures__slides__decoration__title(v-if="deviceType === 'pad'" :class="decorationShowClassAttr") {{decorationTitle}}
        div.crucial-figures__slides__decoration__index(:class="decorationShowClassAttr") {{decorationIndex}}
</template>

<script>
import { ErikoScroller } from 'eriko-scroller.js';
import { autoResize_3 } from '@/mixins/masterBuilder.js';

import CardsCollector from '@/components/cards_collector/CardsCollector.vue';
import Marquee from '@/components/Marquee.vue';
import Progress from '@/components/Progress.vue';

export default {
  name: 'CrucialFigures',
  mixins: [autoResize_3],
  components: {
    CardsCollector,
    Marquee,
    Progress
  },
  data() {
    return {
      isCffAtBottom: false,
      cardTitleTable: {
        1: '預算增加',
        2: '投資師生',
        3: '程度落差',
        4: '會考減C',
        5: '最怕失敗',
        6: '缺乏自信',
        7: '不快樂',
        8: '教師評價',
        9: '私中風氣',
        10: '補習費增',
      },
      es: new ErikoScroller(),
    };
  },
  computed: {
    crucialFiguresFrameClassAttr() {
      return {
        'crucial-figures__frame--fixed': this.$store.state.isCrucialFiguresInitial,
        'crucial-figures__frame--bottom': this.isCffAtBottom
      }
    },
    observableScrollEventOption() {
      return {
        type: 'w',
        top: 1,
        bottom: 1,
        enterEvent: this.handleEnterEvent,
        leaveEvent: this.handleLeaveEvent,
        aboveEvent: this.handleAboveEvent,
        underEvent: this.handleUnderEvent,
      }
    },
    crucialFiguresSlidesMaskClassAttr() {
      return {
        'crucial-figures__slides__decoration--enter': !this.$store.state.isCrucialFiguresInitial
      }
    },
    decorationIndex() {
      const i = +this.$store.state.currentSlideIndex;
      return i < 10 ? `0${i}` : i;
    },
    decorationTitle() {
      return this.cardTitleTable[this.$store.state.currentSlideIndex];
    },
    decorationShowClassAttr() {
      return { 'decoration-item-disabled': this.$store.state.isCrucialFiguresInitial }
    }
  },
  methods: {
    handleEnterEvent() {
      this.isCffAtBottom = false;
      if (this.$store.state.isCrucialFiguresInitial) {
        this.$store.dispatch('updatedIsCrucialFiguresInitial', false);
      }
    },
    handleLeaveEvent() {
      if (!this.$store.state.isCrucialFiguresInitial) {
        this.$store.dispatch('updatedIsCrucialFiguresInitial', true);
      }
    },
    handleAboveEvent() {
      this.$store.dispatch('updatedCurrentSlideIndex', 0);
    },
    handleUnderEvent() {
      this.isCffAtBottom = true;
    }
  },
  mounted() {
    this.es.addObservableScrollEvent('#slides', this.observableScrollEventOption);
  },
  destroyed() {
    this.es.removeObservableScrollEvent('#slides', this.observableScrollEventOption);
  },
}
</script>

<style lang="sass" scoped>
.crucial-figures
  position: relative
  pointer-events: none
  overflow: hidden
  width: 100%
  padding: 100vh 0 50vh 0
  background-color: #303236

.crucial-figures__frame
  position: fixed
  z-index: 10
  left: 0
  top: 0
  width: 100%
  height: 100vh
  &.crucial-figures__frame--bottom
    position: absolute
    top: auto
    // top: calc(100% - 150vh - 64px)
    bottom: 50vh

.crucial-figures__slides
  position: relative
  padding-bottom: 50vh
.crucial-figures__slides-container
  position: relative
  z-index: 5
  .crucial-figures__slides__decoration
    position: absolute
    pointer-events: none
    right: 0
    bottom: 0
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: flex-end
    transform: scale(1.05)
    &.crucial-figures__slides__decoration--enter
      position: fixed

    .crucial-figures__slides__decoration__index, .crucial-figures__slides__decoration__title
      display: none
      position: absolute
      color: #45484e
      font-weight: bold
      transition: .333s ease-in-out
      
    .crucial-figures__slides__decoration__index
      left: 64px
      bottom: 0
      font-size: 190px
      line-height: 70%
      @include pad
        display: block
      @include pc
        display: block
    .crucial-figures__slides__decoration__title
      right: 0
      top: 120px
      font-size: 134px
      writing-mode: vertical-lr
      text-orientation: upright
      line-height: 80%
      @include pad
        display: block
      @include pc
        display: block

    .crucial-figures__slides__decoration__body
      position: relative
      width: 100%
      height: 50%
      background-color: #303236
      @include pc
        display: none
        height: 0%

    .crucial-figures__slides__decoration__mask
      position: relative
      width: 100%
      height: 50%
      display: flex
      flex-direction: column
      justify-content: space-between
      @include pad
        height: 60%
      @include pc
        height: 100%
      .crucial-figures__slides__decoration__mask__item
        background-image: linear-gradient(to top, rgba(48, 50, 54, 0), #303236 56%)
        &.crucial-figures__slides__decoration__mask__item--top
          width: 100%
          height: 32px
          @include pad
            height: 104px
          @include pc
            height: 25%
        &.crucial-figures__slides__decoration__mask__item--bottom
          width: 100%
          height: 104px
          transform: rotate(180deg)
          @include pad
            height: 35vh
          @include pc
            height: 25%

  @include pc
    padding-left: 45%

.decoration-item-disabled
  opacity: 0
</style>