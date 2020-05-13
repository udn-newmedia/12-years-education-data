<template lang="pug">
  a.related-articles__article(:href="href" target="_blank" rel="noopener" :ariaLabel="title" :name="title" @click="handleGA(title)")
    div.related-articles__article__head
      img(:src="img" :alt="title")
    div.related-articles__article__body
      div.related-articles__article__body__title
        p.small {{title}}
      div.related-articles__article__body__text
        p.small {{text}}

</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";

export default {
  name: 'Link',
  mixins: [sendGaMethods],
  props: {
    href: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleGA(title) {
      this.sendGA({
        category: 'related',
        action: 'click',
        label: title
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.related-articles__article {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 15px;
  outline: none;
  text-decoration: none;
  transition: .111s ease-in-out;
  cursor: pointer;
  @include pad {
    display: block;
    float: left;
    width: calc(50% - 8px);
    max-width: 295px;
    &:nth-child(odd) {
      margin-right: 16px;
    }
  }
  @include pc {
    width: 230px;
    margin-right: 16px;
  }
  &:hover {
    transform: translateY(-4px);
  }
  .related-articles__article__head {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 168px;
    @include pc {
      height: 145px;
    }
    img {
      object-fit: cover;
      width: 100%;
      min-height: 100%;
    }
  }
  .related-articles__article__body {
    position: relative;
    padding: 24px 32px;
    text-align: justify;
    background-color: #ffffff;
    @include pc {
      padding: 24px;
    }
    .related-articles__article__body__title {
      font-weight: bold;
      margin-bottom: 8px;
      @include pc {
        margin-bottom: 0;
      }
      p {
        color: #131313;
      }
    }
    .related-articles__article__body__text {
      @include pad {
        display: none;
      }
      @include pc {
        display: none;
      }
      p {
        color: #a6adb4;
      }
    }
  }
}
</style>