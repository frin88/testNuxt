<template>
  <!--[TODO] v-editable è usato nel visual editor di storyblock: test what happens if is not editable -->
  <div v-editable="block" class="px-6">
    <!-- split dynamic components by type so that i can retreive correct config in json by index -->

    <!-- TEASER -->
    <component
      v-for="block in TvaTeaser"
      :key="block._uid"
      :block="block"
      :is="block.component"
    />
    <!-- CARDS with config from file static/config.json-->
    <!-- <component
      v-for="(block, index) in TvaCards"
      :key="block._uid"
      :block="block"
      :is="block.component"
      :config="cardConfigByFile(block, index)"
    /> -->

    <!-- CARDS with config from SB -->
    <!--alternative set config as fields in storyblock -->
    <component
      v-for="block in TvaCards"
      :key="block._uid"
      :block="block"
      :is="block.component"
      :config="cardConfigByBlock(block)"
    />
  </div>
</template>

<script>
import config from "../static/config.json";
export default {
  props: {
    block: {
      //this is content and config
      type: Object,
      required: true,
    },
    data() {
      return {
        currentRoute: null,
      };
    },
  },
  computed: {
    pageContent() {
      return this.block.body;
    },
    TvaCards() {
      return this.pageContent.filter((x) => x.component === "TVACard");
    },
    TvaTeaser() {
      return this.pageContent.filter((x) => x.component === "teaser");
    },
  },
  mounted() {
    this.currentRoute = this.$nuxt.$route.name;
  },
  methods: {
    cardConfigByFile(block, index) {
      // get config by route
      const route = this.$nuxt.$route.name;
      return config[route][block.component][index] || null;
    },
    cardConfigByBlock(block) {
      // get config by storyBlock

      return {
        cardSize: block.cardSize,
        cardType: block.cardType,
      };
    },
  },
};
</script>