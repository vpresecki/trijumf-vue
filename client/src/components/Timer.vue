<template>
  <div class="time">
    <p id="timer">{{ convertTime }}</p>
    <button
      @click="nextPlayer(), setEndTime(convertTime)"
      id="next-player-button"
    >Sljedeći igrač &raquo;</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['nextPlayer', 'setEndTime', 'startTimeout'])
  },
  computed: {
    ...mapGetters(['getStartTime']),
    convertTime() {
      let min = Math.floor(this.$store.getters.getStartTime / 60);
      let sec = this.$store.getters.getStartTime % 60;
      sec < 10 ? (sec = `0${sec}`) : sec;
      return `0${min}:${sec}`;
    }
  }
};
</script>
