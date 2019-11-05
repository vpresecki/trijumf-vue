<template>
  <div class="card-section">
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import DrawCard from './DrawCard';
import Words from './Words';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['isCardDrawn']),

    activeComponent() {
      return this.$store.getters.isCardDrawn ? 'app-words' : 'app-draw-card';
    }
  },
  components: {
    appDrawCard: DrawCard,
    appWords: Words
  }
};
</script>

<style>
</style>
