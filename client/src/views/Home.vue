<template>
  <div class="page-wrapper">
    <div class="header">
      <h2 class="down">Trijumf</h2>
    </div>
    <div class="team-selection">
      <input
        v-for="(team, index) in getTeams"
        :key="team.id"
        type="text"
        id="team-1"
        class="left"
        :placeholder="`${placeholder} ${index + 1}`"
        v-model="teamName"
        @keypress.enter="addTeam({id: team.id, name: teamName})"
      />
      <div class="start-game">
        <form action="/game">
          <input type="submit" id="start-button" class="up" value="START" />
          <input
            type="button"
            id="start-button"
            class="up"
            value="DODAJ"
            @click="addTeam({id: getTeams.length+1, name: ''})"
          />
        </form>
      </div>
    </div>

    <div class="footer">
      <footer class="show">Copyright &copy; VEKY</footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      placeholder: 'Tim',
      teamName: ''
    };
  },
  methods: {
    ...mapActions(['initTeam', 'addTeam'])
  },
  computed: {
    ...mapGetters(['getTeams'])
  },
  created() {
    this.initTeam();
  }
};
</script>

<style src="../assets/styles/home.css"></style>
