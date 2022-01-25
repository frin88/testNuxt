<template>
  <div v-editable="block" :class="['tva-card', config.cardSize]">
    <div :class="['tva-card-image-container', config.cardType]">
      <img
        class="tva-card-image"
        v-if="block.image"
        :src="block.image.filename"
      />
    </div>
    <div :class="['tva-card-text-container', config.cardType]">
      <div class="tva-card-text-subtitle">{{ block.subtitle }}</div>
      <div class="tva-card-text-title">{{ block.title }}</div>
      <div class="tva-card-text-text">{{ block.text }}</div>
      <a v-if="config.cardType === 'link' && block.link" :href="block.link[0].link.url">
      {{block.link[0].displayText}}
      <svgicon
        class="tva-link-arrow"
        icon="actions-navigation-arrow-right"
        width="20"
        height="20"
        color="red"
      ></svgicon>
      </a>
    </div>
  </div>
</template>
<script>
import "@/compiled-icons/actions-navigation-arrow-right";
export default {
  props: {
    block: {
      type: Object,
      required: false,
    },
    config: {
      type: Object,
      required: false,
    },
  },
  // mounted() {
  //   console.log("TVACARD",this.block);
  // },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.tva-card {
  height: 340px;
  margin: 1em 0;
  &.big {
    width: 700px;
    display: flex;
    .tva-card-image-container {
      width: 50%;
      height: 100%;
      overflow: hidden;
      .tva-card-image {
        height: 100%;
      }
    }
    .tva-card-text-container {
      width: 50%;
      height: 100%;
      padding: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  &.small {
    width: 250px;
    position: relative;
    .tva-card-image-container {
      &.text {
        width: 100%;
        height: 150px;
        overflow: hidden;
        .tva-card-image {
          width: 100%;
        }
      }
      &.link {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 50px;
        left: calc(50% - 60px);
        .tva-card-image {
          height: 100%;
        }
      }
    }
    .tva-card-text-container {
      &.text {
        height: calc(100% - 150px);
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .tva-card-text-subtitle {
          width: 100%;
          text-align: center;
          position: absolute;
          top: 120px;
          left: 0;
        }
      }
      &.link {
        height: calc(100% - 200px);
        width: 100%;
        position: absolute;
        top: 200px;
        left: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 0 1em 2em 1em;
      }
    }
  }
}
</style>
