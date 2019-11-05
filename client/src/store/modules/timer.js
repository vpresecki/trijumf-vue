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
      return state.endTime;
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
    }
  }
};
