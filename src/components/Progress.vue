<template lang="pug">
  div.progress
    div.progress-item(v-for="item in cardAmount" :key="item" :class="progressItemClassAttr(item)")
</template>

<script>
export default {
  name: 'Progress',
  computed: {
    cardAmount() {
      return this.$store.state.cardAmount;
    },
  },
  methods: {
    progressItemClassAttr(item) {
      return { 'progress-item--active': this.$store.state.currentSlideIndex === item };
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~/style/_mixins.scss'
.progress
  position: absolute
  bottom: 16px
  right: 80px
  display: flex
  justify-content: center
  align-items: center
  @include pc
    bottom: 48px

  .progress-item
    width: 6px
    height: 6px
    margin: 0 6px
    border-radius: 50%
    background-color: #4891f2
    transition: .5s .111s ease-in-out
    @include smob
      margin: 0 4px
    @include pad
      margin: 0 8px
    @include pc
      margin: 0 8px
    &.progress-item--active
      width: 30px
      border-radius: 50px
      transition: .5s ease-in-out

</style>