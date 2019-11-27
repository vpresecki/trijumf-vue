<template>
  <div class="scene">
    <div class="card">
      <div id="game-words" class="card_face card_face">
        <div class="content-align" id="width">
          <h3
            v-for="(word, index) in words"
            :key="index"
            @click="(word.goodAnswer = !word.goodAnswer), checkIfAllScored()"
            :class="{ 'good-answer': word.goodAnswer }"
            class="word"
          >
            {{ word.word }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    words: Array
  },
  data() {
    return {
      paused: false
    };
  },
  methods: {
    ...mapActions(['pauseTimer', 'startTimeout']),
    checkIfAllScored() {
      const scoredWords = this.words.filter(word => word.goodAnswer);
      if (!this.paused) {
        if (scoredWords.length === 5) {
          this.$store.dispatch('pauseTimer');
          this.paused = true;
        }
      } else {
        this.$store.dispatch('startTimeout');
        this.paused = false;
      }
    }
  },
  beforeCreate() {
    axios.get('/api/trijumf/game/words').then(response => {
      response.data.forEach(word => {
        this.words.push(word);
      });
    });
  },
  name: 'Words.vue'
};
</script>

<style scoped></style>
