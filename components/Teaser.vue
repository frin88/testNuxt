<template>
  <div
    v-editable="block"
    class="teaser">
    {{ block.headline }}
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.teaser{
  width: 100vw;
  font-size: 50px;
  color: deeppink;
  font-weight: bold;
  padding: 20px 30px;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;


}
</style>
