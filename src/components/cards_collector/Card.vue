<template lang="pug">
  div.card(:class="cardClassAttr" :style="{ transform: cardStyleTransform }")
    div.card__cover(v-if="position === 'cover' && index === 0" :class="cardCoverClassAttr")
      <slot name=cover />
    div.card__content(v-if="hasContent" :class="cardContentClassAttr")
      div.card__content__title__container()
        <slot name=title />
      div.card__content__chart__container
        img.card__content__chart(:src="cardChartSrcAttr")
      div.card__content__info
        div.card__content__note
          <slot name=note />
        div.card__content__source
          <slot name=source />
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'Card',
  mixins: [autoResize_3, selectSrcMethod_3],
  props: {
    index: {
      tpye: Number,
      required: true
    },
    position: {
      /* cover, common */
      type: String,
      default: 'common'
    },
  },
  data() {
    return {
      cardStyleParams: {
        scale: 1,
        translateX: 0,
        translateY: 0,
        gap: { mob: 10, pad: 15, pc: 20 },
        xyRatio: 0.75,
        zoomRatio: 1
      }
    }
  },
  computed: {
    hasContent() {
      return +this.index !== 0 && +this.index <= +this.$store.state.cardAmount;
    },
    currentSlideIndex() {
      return this.$store.state.currentSlideIndex;
    },
    isCrucialFiguresInitial() {
      return this.$store.state.isCrucialFiguresInitial;
    },
    shouldCardZoomOut() {
      return this.index < this.currentSlideIndex;
    },
    cardGap() {
      if (this.deviceType === 'pc') return this.cardStyleParams.gap.pc;
      if (this.deviceType === 'pad') return this.cardStyleParams.gap.pad;
      return this.cardStyleParams.gap.mob;
    },
    cardClassAttr() {
      return {
        'card--cover': this.position === 'cover' && this.isCrucialFiguresInitial && this.currentSlideIndex === 0,
        'card--disabled': this.index < this.currentSlideIndex,
      }
    },
    cardStyleTransform() {
      return `translate(${this.cardStyleParams.translateX}px, ${this.cardStyleParams.translateY}px) scale(${this.cardStyleParams.scale})`;
    },
    cardContentClassAttr() {
      return { 'card__content--active': this.currentSlideIndex === this.index };
    },
    cardCoverClassAttr() {
      return { 'card__cover--active': this.currentSlideIndex === this.index };
    },
    cardChartSrcAttr() {
      if (this.hasContent) {
        if (this.deviceType === 'pc') return require(`~/img/charts/data${this.index}.svg`);
        return require(`~/img/charts/data${this.index}_m.svg`);
      }
      return null;
    }
  },
  watch: {
    currentSlideIndex: {
      handler() {
        if (this.position === 'cover') this.updateCardTransform().atBody();
      }
    },
    isCrucialFiguresInitial: {
      handler(value) {
        if (value) {
          if (+this.currentSlideIndex === 0) this.updateCardTransform().atCover();
          // else this.updateCardTransform().atFooter();
        }
        else this.updateCardTransform().atBody();
      },
    }
  },
  methods: {
    updateCardTransform() {
      const vm = this;

      function atCover() {
        vm.cardStyleParams.translateX = vm.cardGap * (-vm.index);
        vm.cardStyleParams.translateY = vm.cardGap * vm.cardStyleParams.xyRatio * (vm.index);
        vm.cardStyleParams.scale = 1; 
      }

      function atBody() {
        vm.cardStyleParams.translateX = vm.cardGap * (vm.currentSlideIndex - vm.index);
        vm.cardStyleParams.translateY = vm.cardGap * vm.cardStyleParams.xyRatio * (vm.currentSlideIndex - vm.index);
        if (vm.shouldCardZoomOut) {
          vm.cardStyleParams.scale = vm.cardStyleParams.zoomRatio;
        } else {
          vm.cardStyleParams.scale = 1;
        }
      }

      function atFooter() {
        vm.cardStyleParams.translateX = vm.cardGap * vm.currentSlideIndex * -5;
        vm.cardStyleParams.translateY = vm.cardGap * vm.currentSlideIndex * -5;
        vm.cardStyleParams.scale = 0.3;
      }

      return { atCover, atBody, atFooter }
    },
  },
  mounted() {
    if (this.position === 'cover') this.updateCardTransform().atCover();
    else this.updateCardTransform().atBody();
  },
}
</script>

<style lang="sass" scoped>
@import '~/style/_mixins.scss'
.card
  pointer-events: auto
  position: absolute
  right: 8px
  top: 64px
  width: 90vw
  height: 90vw
  padding: 16px
  border: solid 1px #439cf5
  background-color: #303236
  transition: .5s ease-in-out
  @include pad
    right: -10%
    width: 55vw
    height: 55vw
    padding: 32px
  @include pc
    right: 0
    bottom: 20%
    top: auto
    width: 36vw
    height: 36vw
    padding: 32px

  &.card--cover
    right: 16px
    top: 25%
    @include pad
      right: -10vw
      top: 25%
      width: 60vw
      height: 60vw
    @include pc
      right: -50%
      top: auto
      bottom: 20%
      width: 36vw
      height: 36vw
      transition: 1s ease-in-out

  &.card--disabled
    opacity: 0
    pointer-events: none

.card__cover
  position: relative
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  opacity: 0
  transition: .333s ease-in-out
  h1
    color: #4891f2
  &.card__cover--active
    opacity: 1

.card__content
  position: relative
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  opacity: 0
  transition: .5s ease-in-out
  &.card__content--active
    opacity: 1

  .card__content__title__container
    position: relative
    width: 100%
    max-height: 20%
    margin-bottom: 16px
    h4
      color: #4891f2
      text-align: center
      font-size: 1rem
      @include pc
        font-size: 1.315rem
  .card__content__chart__container
    position: relative
    width: 90%
    min-height: 70%
    max-height: 90%
    text-align: center
    margin-bottom: 16px
    .card__content__chart
      object-fit: contain
      width: 100%
      max-height: 100%
  .card__content__info
    width: 100%
    max-height: 20%
    .card__content__note, .card__content__source
      text-align: right
      p
        color: #8c8e93
        font-size: 0.7rem
      a
        color: #8c8e93
  
</style>