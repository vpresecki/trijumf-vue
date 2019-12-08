<template>
  <div class="time">
    <p id="timer">{{ convertTime }}</p>
    <component :winnerName="winnerName" :is="getWinner"></component>
    <button
      @click="
        nextPlayer(),
          setEndTime(convertTime),
          checkBonusScore(),
          updateScore(words),
          checkWinner(),
          changeActiveTeam(),
          emptyWords()
      "
      class="next-player-button"
    >
      Sljedeći igrač &raquo;
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Winner from './Winner';
export default {
  props: {
    words: Array
  },
  data() {
    return {
      isWinner: false,
      winnerName: ''
    };
  },
  methods: {
    ...mapActions([
      'nextPlayer',
      'setEndTime',
      'changeActiveTeam',
      'bonusScore',
      'updateScore'
    ]),
    checkBonusScore() {
      const scoredWords = this.words.filter(word => word.goodAnswer === true);
      scoredWords.length === 5
        ? this.$store.dispatch('bonusScore', this.$store.getters.getEndTime)
        : 0;
    },
    emptyWords() {
      this.words = [];
      this.$emit('emptyWords', this.words);
    },
    checkWinner() {
      Object.values(this.$store.getters.getTeams).forEach(team => {
        if (team.score > 10) {
          this.winnerName = team.name;
          this.isWinner = true;
        }
      });
    }
  },
  computed: {
    ...mapGetters(['getStartTime', 'getTeams', 'getEndTime']),
    convertTime() {
      let min = Math.floor(this.$store.getters.getStartTime / 60);
      let sec = this.$store.getters.getStartTime % 60;
      sec < 10 ? (sec = `0${sec}`) : sec;
      return `0${min}:${sec}`;
    },
    getWinner() {
      return this.isWinner ? 'app-winner' : false;
    }
  },
  watch: {
    convertTime: function(newTime, oldTime) {
      if (this.$store.getters.getStartTime < 0) {
        this.$store.dispatch('nextPlayer'),
          this.$store.dispatch('setEndTime', this.convertTime),
          this.checkBonusScore(),
          this.$store.dispatch('updateScore', this.words),
          this.checkWinner(),
          this.$store.dispatch('changeActiveTeam'),
          this.emptyWords();
        alert('Vrijeme isteklo');
      }
    }
  },
  components: {
    appWinner: Winner
  }
};
</script>
