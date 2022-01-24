<template>
  <div v-editable="block" class="image-and-text">
  <div>
    {{ block.text }}
  </div>
  <div>
      <img :src="block.image.filename" alt="">
  </div>
  </div>
</template>

<script>
export default {

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.image-and-text {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 300px;
  border: 2px solid salmon;
  margin: 0 auto;

  img{
    width: 100%;
    height: 100%;
    
  }
}
</style>
