<template lang="pug">
  div.marquee(v-if="rd" :class="marqueeClassAttr")
    div.marguee__hash(v-for="item in hashTagAmount" :key="item" :class="rd.rClass[item]")
      div.marguee__hash__content(:style="{ left: rd.rLeft[item] }") {{ hashTagTable[rd.rHashTag[item]] }}
</template>

<script>
import { autoResize_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'Marquee',
  mixins: [autoResize_3],
  data() {
    return {
      hashTagTable: ['#台灣學生自我肯定偏低', '#學生感受不到老師的熱情', '#台灣的教育有更好嗎？', '#台灣的學生人數愈來愈少', '#台灣學生不快樂？', '#台灣的學生最怕失敗', '#台灣學生自我肯定偏低', '#學生感受不到老師的熱情', '#家長不信任台灣教育', '#台灣學生自我肯定偏低'],
      rd: null
    }
  },
  computed: {
    hashTagAmount() {
      if (this.deviceType === 'pc') return 16;
      if (this.deviceType === 'pad') return 12;
      return 8;
    },
    marqueeClassAttr() {
      const init = this.$store.state.isCrucialFiguresInitial;
      const firstIndex = this.$store.state.currentSlideIndex === 0;
      return {
        'marquee--active-cover': init && firstIndex,
        'marquee--active-footer': init && !firstIndex
      }
    }
  },
  methods: {
    initRd() {
      this.rd = {
        rClass: this.randomClass(),
        rLeft: this.randomLeft(),
        rHashTag: this.randomHashTag(),
      }
    },
    randomClass() {
      const domain = 10;
      const outputClass = {};
      for (let i = 1; i <= this.hashTagAmount; i++) {
        const r = Math.ceil(Math.random() * domain);
        outputClass[i] = `marguee__hash--${r}`;
      }
      
      return outputClass;
    },
    randomLeft() {
      const outputLeft = [];
      for (let i = 1; i <= this.hashTagAmount; i++) {
        const left = Math.floor(Math.random() * 75) + 'vw';
        outputLeft.push(left);
      }
      return outputLeft;
    },
    randomHashTag() {
      const domain = 10;
      const outputHashTag = {};
      for (let i = 1; i <= this.hashTagAmount; i++) {
        const r = Math.floor(Math.random() * domain);
        outputHashTag[i] = r;
      }
      return outputHashTag;
    },
  },
  mounted() {
    this.initRd();
  },
}
</script>

<style lang="sass" scoped>
.marquee
  position: absolute
  pointer-events: none
  left: 0
  top: 0
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: flex-start
  width: 100%
  height: 100vh
  opacity: 0
  transition: .666s ease-in-out
  &.marquee--active-cover
    opacity: 0.9
  &.marquee--active-footer
    opacity: 0.2

  .marguee__hash
    position: relative
    width: 150%
    height: 100%
    color: #486a98
    text-shadow: 0 0 20px rgba(37, 61, 178, 0.96)
    white-space: nowrap
    transform: translateX(-125%)
  @for $i from 1 through 10
    .marguee__hash--#{$i}
      font-size: #{$i * 0.5 + 1}rem
      animation: marquee #{$i + 2}s #{1 / ($i + 2)}s linear infinite
      @include pc
        font-size: #{$i * 0.75}rem
    .marguee__hash__content
      position: absolute
      top: 0

  @keyframes marquee
    0%
      transform: translateX(-150%)
    50%
      transform: translateX(0%)
    100%
      transform: translateX(100%)
    
</style>