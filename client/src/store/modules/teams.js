export const teams = {
  state: {
    teams: [
      {
        id: 1,
        name: '',
        score: 0,
        active: true
      },
      {
        id: 2,
        name: '',
        score: 0,
        active: false
      }
    ]
  },
  getters: {
    getTeams: state => {
      return state.teams;
    }
  },
  mutations: {
    addTeam: (state, newTeam) => {
      const team = state.teams.find(el => el.id === newTeam.id);
      if (team) {
        team.name = newTeam.name;
      } else {
        state.teams.push({
          id: newTeam.id,
          name: newTeam.name,
          score: 0,
          active: false
        });
      }
    },
    deleteTeam: state => {
      state.teams.pop();
    },
    changeActiveTeam: state => {
      let currentActive = state.teams.find(team => team.active === true);
      let indexOfActive = state.teams.indexOf(currentActive);
      if (indexOfActive === state.teams.length - 1) {
        currentActive.active = false;
        state.teams[0].active = true;
      } else {
        state.teams[indexOfActive + 1].active = true;
        currentActive.active = false;
      }
    },
    updateScore: (state, goodAnswer) => {
      if (goodAnswer) state.score += 1;
    },
    bonusScore: (state, endTime) => {
      let currentActive = state.teams.find(team => team.active === true);
      if (endTime >= 150) {
        currentActive.score += 10;
      } else if (endTime >= 120) {
        currentActive.score += 5;
      } else if (endTime >= 90) {
        currentActive.score += 2;
      } else if (endTime >= 60) {
        currentActive.score += 1;
      } else {
        currentActive += 0;
      }
    }
  },
  actions: {
    initTeam: ({ commit }) => {
      commit('initTeam');
    },
    addTeam: ({ commit }, team) => {
      commit('addTeam', team);
    },
    deleteTeam: ({ commit }) => {
      commit('deleteTeam');
    },
    changeActiveTeam({ commit }, state) {
      commit('changeActiveTeam', state);
    },
    updateScore({ commit }, state, goodAnswer) {
      commit('updateScore', state, goodAnswer);
    },
    bonusScore({ commit }, state, endTime) {
      commit('bonusScore', state, endTime);
    }
  }
};
