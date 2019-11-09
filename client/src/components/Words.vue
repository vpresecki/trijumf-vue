<template>
  <div class="scene">
    <div class="card">
      <div id="game-words" class="card_face card_face">
        <div class="content-align" id="width">
          <h3
            v-for="(word, index) in words"
            :key="index"
            @click="word.goodAnswer = !word.goodAnswer"
            :class="{'good-answer': word.goodAnswer}"
            class="word"
          >{{word.word}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      words: [],
      drawnCards: []
    };
  },
  beforeCreate() {
    // axios.get('/api/trijumf/game/words').then(response => {
    //   response.data.forEach(word => {
    //     this.words.push(word);
    //   });
    // });
    axios.get('/api/trijumf/game/words').then(response => {
      this.words.push(
        response.data[Math.floor(Math.random() * response.data.length)],
        response.data[Math.floor(Math.random() * response.data.length)],
        response.data[Math.floor(Math.random() * response.data.length)],
        response.data[Math.floor(Math.random() * response.data.length)],
        response.data[Math.floor(Math.random() * response.data.length)]
      );
    });
  },
  name: 'Words.vue'
};
</script>

<style scoped></style>
