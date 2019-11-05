export const teams = {
  state: {
    teams: []
  },
  getters: {
    getTeams: state => {
      return state.teams;
    }
  },
  mutations: {
    initTeam: state => {
      state.teams.push(
        {
          id: 1,
          name: '',
          score: 0
        },
        {
          id: 2,
          name: '',
          score: 0
        }
      );
    },
    addTeam: (state, newTeam) => {
      const team = state.teams.find(el => el.id === newTeam.id);
      if (team) {
        team.name = newTeam.name;
      } else {
        state.teams.push({
          id: newTeam.id,
          name: newTeam.name,
          score: 0
        });
      }
    },
    deleteTeam: state => {
      state.teams.pop();
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
    }
  }
};
