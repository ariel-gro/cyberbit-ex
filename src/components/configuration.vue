<template>
  <grid-layout
    :layout.sync="cells"
    :col-num="2"
    :row-height="30"
    :is-draggable="false"
    :is-resizable="false"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true" >
    <grid-item v-for="configCell in cells" :key="configCell.i"
               :x="configCell.x"
               :y="configCell.y"
               :w="configCell.w"
               :h="configCell.h"
               :i="configCell.i" >
      <div class="config-cell-content"
           :style="{ 'background-color': configCell.backColor }">
        {{configCell.backColor}}
      </div>
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import { mapActions } from 'vuex';

export default {
  name: 'configuration',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  props: [
    'configIndex',
  ],
  data() {
    this.getConfiguration(this.configIndex).then((data) => {
      this.cells = data;
    });
    return {
      cells: [],
    };
  },
  methods: {
    ...mapActions(['getConfiguration']),
  },
};
</script>

<style>
  .config-cell-content {
    border: 1px solid black;
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }

</style>
