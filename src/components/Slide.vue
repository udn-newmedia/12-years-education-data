<template lang="pug">
  div.slide(:id="'slide-' + index")
    slot
</template>

<script>
import { ErikoScroller } from 'eriko-scroller.js';

export default {
  name: 'Slide',
  props: {
    index: {
      tpye: Number,
      required: true
    }
  },
  data() {
    return {
      es: new ErikoScroller(),
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
    this.es.addObservableScrollEvent(`#slide-${this.index}`, this.observableScrollEventOption);
  },
  destroyed() {
    this.es.removeObservableScrollEvent(`#slide-${this.index}`, this.observableScrollEventOption);
  },
}
</script>

<style lang="sass" scoped>
.slide
  position: relative
  pointer-events: auto
  width: 100%
  min-height: 100vh
  padding: 64px 16px 0 16px
  margin-top: 4px
  &:first-child
    padding-top: 60vh
  @include pad
    padding: 64px 112px
    &:first-child
      padding: 64px 112px
  @include pc
    min-height: 125vh
    padding: 0 64px
    &:first-child
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

.slide-arrow-conttainer
  pointer-events: none
  margin-top: 64px
  margin-left: 16px
</style>