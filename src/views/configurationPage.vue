<template>
  <div>
    <div>Selected Index: {{configIndex}}</div>
    <div v-drag-and-drop :options="ddoptions">
      <div class="config-color-selector">
        <ul>
          <li v-for="color in colors" :key="color"
              class="color-list-item"
              :style="{ 'background-color': color }" >
            {{color}}
          </li>
        </ul>
      </div>
      <configuration :configIndex="configIndex"
                     class="config-grid-layout">
      </configuration>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Configuration from '../components/configuration.vue';

export default {
  name: 'configurationPage',
  components: {
    Configuration,
  },
  data() {
    const confInd = this.$route.query.configIndex;
    return {
      configIndex: confInd,
      colors: [
        'red',
        'blue',
        'black',
        'yellow',
        'green',
        'teal',
        'magenta',
        'brown',
        'gray',
        'aqua',
        'purple',
      ],
      ddoptions: {
        dropzoneSelector: 'div .config-cell-content',
        draggableSelector: '.config-color-selector li',
        excludeOlderBrowsers: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true,
        onDrop: 'colorChange',
      },
    };
  },
  methods: {
    colorChange(event) {
      // let cellIndex = event.droptarget;
      const cellIndex = 3;
      const newColor = event.items[0].innerText;
      this.$store.dispatch('changeBackColor', this.configIndex, cellIndex, newColor).then();
    },
    ...mapActions(['changeBackColor']),
  },
};
</script>

<style>
  .config-color-selector {
    width: 5%;
    float: left;
  }

  .config-color-selector li {
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 2px;
  }

  .config-color-selector ul {
    padding: 0;
    margin-top: 10px;
  }

  .config-grid-layout {
    width: 95%;
    float: right;
  }
</style>
