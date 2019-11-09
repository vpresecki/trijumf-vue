<template>
  <div class="time">
    <p>{{getEndTime}}</p>
    <p id="timer">{{ convertTime }}</p>
    <button
      @click="nextPlayer(), setEndTime(convertTime),bonusScore(getEndTime) ,changeActiveTeam()"
      id="next-player-button"
    >Sljedeći igrač &raquo;</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'nextPlayer',
      'setEndTime',
      'changeActiveTeam',
      'bonusScore'
    ])
  },
  computed: {
    ...mapGetters(['getStartTime', 'getTeams', 'getEndTime']),
    convertTime() {
      let min = Math.floor(this.$store.getters.getStartTime / 60);
      let sec = this.$store.getters.getStartTime % 60;
      sec < 10 ? (sec = `0${sec}`) : sec;
      return `0${min}:${sec}`;
    }
  }
};
</script>
