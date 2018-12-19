<template>
<grid-layout
  :layout.sync="previews"
  :col-num="3"
  :row-height="150"
  :is-draggable="false"
  :is-resizable="false"
  :is-mirrored="false"
  :vertical-compact="true"
  :margin="[10, 10]"
  :use-css-transforms="true">
  <grid-item v-for="preview in previews" :key="preview.i"
             :x="preview.x"
             :y="preview.y"
             :w="preview.w"
             :h="preview.h"
             :i="preview.i">
    <configuration
      class="cell-content"
      :config-index="preview.i" >
    </configuration>
    <div @click="openConfig(preview.i)"
         class="edit-button" ></div>
  </grid-item>
</grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import Configuration from './configuration.vue';

export default {
  name: 'layoutsGrid',
  props: [
    'previews',
  ],
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Configuration,
  },
  methods: {
    openConfig(index) {
      // console.log(`clicked index: ${index}`);
      this.$router.push({ path: 'configuration', query: { configIndex: index } });
    },
  },
};
</script>

<style>
  .cell-content {
    width: 100%;
  }

  .edit-button {
    cursor: pointer;
    background-color: transparent;
    width: 96%;
    height: 75%;
    margin: auto;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    bottom: 58px;
    left: 3px;
    right: 0;
  }
</style>
