<template>
  <div>
    <div class="card-section">
      <component :words="words" :is="activeComponent"></component>
    </div>
    <div class="game-board">
      <appTimer :words="words" @emptyWords="words = $event"></appTimer>
    </div>
  </div>
</template>

<script>
import DrawCard from './DrawCard';
import Words from './Words';
import Timer from '../components/Timer';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      words: []
    };
  },

  computed: {
    ...mapGetters(['isCardDrawn']),

    activeComponent() {
      return this.$store.getters.isCardDrawn ? 'app-words' : 'app-draw-card';
    }
  },
  components: {
    appDrawCard: DrawCard,
    appWords: Words,
    appTimer: Timer
  }
};
</script>

<style></style>
