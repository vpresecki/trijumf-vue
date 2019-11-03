<template>
  <div class="scene">
    <div class="card">
      <div id="game-words" class="card_face card_face">
        <div class="content-align" id="width">
          <h3
            v-for="(word, index) in testWords"
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
export default {
  data() {
    return {
      testWords: [
        { word: 'word 1', goodAnswer: false },
        { word: 'word 2', goodAnswer: false },
        { word: 'word 3', goodAnswer: false },
        { word: 'word 4', goodAnswer: false },
        { word: 'word 5', goodAnswer: false }
      ]
    };
  },
  name: 'Words.vue'
};
</script>

<style scoped></style>
