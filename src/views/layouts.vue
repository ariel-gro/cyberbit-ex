<template>
    <layouts-grid :previews="previews"></layouts-grid>
</template>

<script>
import { mapActions } from 'vuex';
import LayoutsGrid from '../components/layoutsGrid.vue';

export default {
  name: 'layouts',
  data() {
    return {
      previews: [],
    };
  },
  components: {
    LayoutsGrid,
  },
  methods: {
    ...mapActions(['getPreviews']),
  },
  mounted() {
    this.getPreviews().then(previews => this.previews = previews);
  },
};
</script>

<style scoped>

</style>
