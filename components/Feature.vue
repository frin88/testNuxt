<template>
  <div
    v-editable="block"
    class="py-2">
    <h1 class="text-lg">{{ block.name }}</h1>
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
