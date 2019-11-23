<template>
  <div class="scene">
    <div class="card">
      <div id="game-words" class="card_face card_face">
        <div class="content-align" id="width">
          <h3
            v-for="(word, index) in words"
            :key="index"
            @click="word.goodAnswer = !word.goodAnswer"
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
export default {
  props: ['words'],
  name: 'Words.vue'
};
</script>

<style scoped></style>
