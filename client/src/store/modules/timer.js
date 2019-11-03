export const timer = {
  state: {
    timer: null,
    totalTime: 3 * 60,
    resetButton: false
  },
  getters: {
    getTotalTime(state) {
      return state.totalTime;
    },
    getTimer(state) {
      return state.timer;
    }
  },
  mutations: {
    countdown(state) {
      if (state.totalTime >= 1) {
        state.totalTime--;
      } else {
        state.totalTime = 0;
        store.commit('resetTimer');
      }
    },
    resetTimer(state) {
      state.totalTime = 3 * 60;
      clearInterval(state.timer);
      state.timer = null;
      state.resetButton = false;
    },
    stopTimer(state) {
      clearInterval(state.timer);
      state.timer = null;
      state.resetButton = true;
    }
  },
  actions: {
    nextPlayer({ commit }, state) {
      commit('nextPlayer', { root: true }, state);
    },
    startTimer({ commit }, state) {
      state.timer = setInterval(() => commit('countdown', state), 1000);
      state.resetButton = true;
    },
    stopTimer({ commit }, state) {
      commit('stopTimer', state);
    }
  }
};
