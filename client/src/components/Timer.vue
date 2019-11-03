<template>
  <div class="time">
    <p id="timer">{{minutes}}:{{seconds}}</p>
    <p>{{getTotalTime}}</p>
    <button @click="nextPlayer(), startTimer()" id="next-player-button">Sljedeći igrač &raquo;</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['nextPlayer', 'startTimer', '']),
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    }
  },
  computed: {
    ...mapGetters(['getTotalTime', 'getTimer']),
    minutes: function() {
      const minutes = Math.floor(this.$store.getters.getTotalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.$store.getters.getTotalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  }
};
</script>
