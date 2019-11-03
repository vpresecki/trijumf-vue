<template>
  <div class="scene">
    <div class="card" @click="drawCard">
      <div class="draw-card card_face">
        <h3 class="content-align">IZVUCI KARTU</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['drawCard'])
  },

  name: 'DrawCard.vue'
};
</script>

<style scoped></style>
