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
          name: ''
        },
        {
          id: 2,
          name: ''
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
          name: newTeam.name
        });
      }
    }
  },
  actions: {
    initTeam: ({ commit }) => {
      commit('initTeam');
    },
    addTeam: ({ commit }, team) => {
      commit('addTeam', team);
    }
  }
};
