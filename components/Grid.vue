<template>
  <ul
    v-editable="block"
    class="flex py-8 mb-6">
    <li
      :key="block._uid"
      v-for="block in block.columns"
      class="flex-auto px-6">
      <component :block="block" :is="block.component" />
    </li>
  </ul>
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
