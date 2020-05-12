<template lang="pug">
  section.slide(:id="'slide-' + index")
    slot
</template>

<script>
import { scrollEvent } from '@/mixins/scrollEvent.js';

export default {
  name: 'Slide',
  mixins: [scrollEvent],
  props: {
    index: {
      tpye: Number,
      required: true
    }
  },
  computed: {
    observableScrollEventOption() {
      return {
        type: 'w',
        top: 1,
        bottom: 1,
        enterEvent: this.handleUpdateCurrentSlideIndex,
      }
    }
  },
  methods: {
    handleUpdateCurrentSlideIndex() {
      if (this.$store.state.currentSlideIndex !== this.index) this.$store.dispatch('updatedCurrentSlideIndex', this.index);
    }
  },
  mounted() {
    this.addObservableScrollEvent(`#slide-${this.index}`, this.observableScrollEventOption);
  },
  destroyed() {
    this.removeObservableScrollEvent(`#slide-${this.index}`, this.observableScrollEventOption);
  },
}
</script>

<style lang="sass" scoped>
@import '~/style/_mixins.scss'
.slide
  pointer-events: auto
  width: 100%
  min-height: 100vh
  padding: 64px 16px 0 16px
  // border: solid 1px red
  @include pad
    padding: 64px 112px
  @include pc
    min-height: 125vh
    padding: 0 64px

  h3
    display: inline-block
    line-height: 1.6
    color: #303236
    margin-bottom: 16px
    @include pc
      margin-bottom: 24px
      margin-top: 0
  mark
    background-color: #4891f2
  p
    color:#ffffff
    a
      color:#ffffff

.slide__src
  margin-top: 32px
  @include pc
    margin-top: 48px
  a
    color: #8c8e93
</style>