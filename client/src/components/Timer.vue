<template>
  <div class="time">
    <p id="timer">{{ convertTime }}</p>
    <button
      @click="
        nextPlayer(),
          setEndTime(convertTime),
          checkBonusScore(),
          changeActiveTeam()
      "
      id="next-player-button"
    >
      Sljedeći igrač &raquo;
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  props: ['words'],
  methods: {
    ...mapActions([
      'nextPlayer',
      'setEndTime',
      'changeActiveTeam',
      'bonusScore'
    ]),
    checkBonusScore() {
      const scoredWords = this.words.filter(word => word.goodAnswer === true);
      scoredWords.length === 5
        ? this.$store.dispatch('bonusScore', this.$store.getters.getEndTime)
        : 0;
    }
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
