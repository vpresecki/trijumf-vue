<template>
  <transition mode="out-in" name="flip">
    <div class="card-section">
      <div @click="toggleComponent">
        <component :is="activeComponent"></component>
      </div>
    </div>
  </transition>
</template>

<script>
import DrawCard from './DrawCard';
import Words from './Words';
import { mapGetters } from 'vuex';

export default {
  methods: {
    toggleComponent() {
      this.activeComponent = 'app-words';
    }
  },
  computed: {
    ...mapGetters(['isCardDrawn']),
    activeComponent() {
      return this.$store.getters.isCardDrawn ? 'app-words' : 'app-draw-card';
    }
  },
  components: {
    appDrawCard: DrawCard,
    appWords: Words
  }
};
</script>

<style>
.flip-enter {
  transform: rotateY(0deg);
}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {
  transform: rotateY(0deg);
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}
</style>
