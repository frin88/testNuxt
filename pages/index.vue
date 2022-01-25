<template>
  <!-- <Tutorial /> -->
  <section>

    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :block="story.content"
      :is="story.content.component"
    ></component>
   
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {

  
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();
     

        // Listen to Storyblok's Visual Editor event
        storyblokInstance.on(["input", "published", "change"], (event) => {
          if (event.action == "input") {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content;
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            });
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  },
  asyncData(context) {
    // We are getting only the draft version of the content in this example.
    // In real world project you should ask for correct version of the content
    // according to the environment you are deploying to.
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    let fullSlug =
      context.route.path == "/" || context.route.path == ""
        ? "home"
        : context.route.path;

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        version: "draft",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>


<style lang="scss">
// GLOBAL
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
#app {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }
  .link {
    margin-right: 10px;
  }
  &.mobile {
    // overflow-x: hidden;
  }
}
</style>
