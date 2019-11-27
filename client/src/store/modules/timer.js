export const timer = {
  state: {
    startTime: 180,
    endTime: undefined,
    interval: undefined
  },
  getters: {
    getStartTime(state) {
      return state.startTime;
    },
    getEndTime(state) {
      if (state.endTime) {
        let originalTime = state.endTime.split(':');
        let min = parseInt(originalTime[0]) * 60;
        let sec = parseInt(originalTime[1]);
        return `${min + sec}`;
      }
    }
  },
  mutations: {
    setEndTime(state, turnTime) {
      state.endTime = turnTime;
      clearInterval(state.interval);
      state.startTime = 180;
    },
    startTimeout(state) {
      state.interval = setInterval(() => {
        state.startTime > 0 ? state.startTime-- : (state.startTime = 0);
      }, 1000);
    },
    pauseTimer(state) {
      clearInterval(state.interval);
    }
  },
  actions: {
    nextPlayer({ commit }, state) {
      commit('nextPlayer', { root: true }, state);
    },
    setEndTime({ commit }, turnTime) {
      commit('setEndTime', turnTime);
    },
    startTimeout({ commit }, state) {
      commit('startTimeout', state);
    },
    pauseTimer({ commit }, state) {
      commit('pauseTimer', state);
    }
  }
};
