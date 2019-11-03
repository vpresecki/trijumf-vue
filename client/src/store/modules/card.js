export const card = {
  state: {
    cardDrawn: false
  },
  getters: {
    isCardDrawn: state => {
      return state.cardDrawn;
    }
  },
  mutations: {
    drawCard(state) {
      state.cardDrawn = true;
    },

    nextPlayer(state) {
      state.cardDrawn = false;
    }
  },
  actions: {
    drawCard({ commit }, state) {
      commit('drawCard', state);
    }
  }
};
