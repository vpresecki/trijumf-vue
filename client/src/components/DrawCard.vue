<template>
  <div class="scene">
    <div class="card" @click="drawCard(), startTimeout(getStartTime)">
      <div class="draw-card card_face">
        <h3 class="content-align">IZVUCI KARTU</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['drawCard', 'startTimeout'])
  },
  computed: {
    ...mapGetters(['getStartTime'])
  },

  name: 'DrawCard.vue'
};
</script>

<style scoped></style>
