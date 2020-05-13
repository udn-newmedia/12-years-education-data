<template lang="pug">
  div.cards-container(:class="cardsContainerClassAttr")
    div.card(v-for="item in cardAmount" :key="item" :class="cardClassAttr" :style="{ transform: cardStyleTransform(item) }")
      template(v-if="item === cardAmount")
        slot

</template>

<script>
export default {
  name: 'Card',
  props: {
    size: {
      type: String,
      default: 'l'
    },
     cardAmount: {
       type: Number,
       default: 7
     }
  },
  data() {
    return {
      gap: { mob: 8, pad: 12, pc: 20 },
    }
  },
  computed: {
    cardsContainerClassAttr() {
      return {
        'cards-container--small': this.size === 's',
        'cards-container--large': this.size === 'l',
      }
    },
    cardClassAttr() {
      return {
        'card--small': this.size === 's',
        'card--large': this.size === 'l',
      }
    },
    cardGap() {
      if (this.deviceType === 'pc') return this.gap.pc;
      if (this.deviceType === 'pad') return this.gap.pad;
      return this.gap.mob;
    },
  },
  methods: {
    cardStyleTransform(item) {
      const translateX = -item * this.cardGap;
      const translateY = -item * this.cardGap;
      return `translate(${translateX}px, ${translateY}px)`;
    }
  },
}
</script>

<style lang="sass" scoped>
.cards-container
  position: relative
  &.cards-container--small
    height: 192px
  &.cards-container--large
    height: 840px
    @include pad
      height: 540px
    @include pc
      height: 560px

.card
  position: absolute
  top: 0
  border: solid 1px #439cf5
  background-color: #303236
  &.card--small
    left: 24px
    top: 25vh
    width: 80vw
    height: 192px
    padding: 16px 32px
    display: flex
    justify-content: center
    align-items: center
    @include pad
      left: 80px
      top: 32vh
      width: 55vw
      height: 240px
    @include pc
      left: auto
      right: 0
      top: 50%
      width: 455px
      height: 240px
  &.card--large
    right: -16px
    width: 85vw
    height: 840px
    padding: 96px 24px
    @include pad
      right: 0
      width: 80vw
      height: 548px
      padding: 120px 88px
    @include pc
      top: 35%
      left: 45%
      right: auto
      width: 600px
      height: 376px
      padding: 40px 64px 40px 104px

</style>