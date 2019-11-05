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
        @blur="addTeam({id: team.id, name: $event.target.value})"
      />
      <div class="start-game">
        <router-link :to="{name: 'game'}" class="start-game">
          <input type="submit" id="start-button" class="up" value="START" />
        </router-link>
        <input
          type="button"
          class="up"
          value="DODAJ"
          v-if="getTeams.length < 4"
          @click="addTeam({id: getTeams.length+1, name: ''})"
        />

        <input
          type="button"
          class="up"
          value="OBRISI"
          v-if="getTeams.length > 2"
          @click.prevent="deleteTeam"
        />
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import Footer from '../components/Footer';
export default {
  data() {
    return {
      placeholder: 'Tim'
    };
  },
  methods: {
    ...mapActions(['initTeam', 'addTeam', 'deleteTeam'])
  },
  computed: {
    ...mapGetters(['getTeams'])
  },
  created() {
    this.initTeam();
  },
  components: {
    appFooter: Footer
  }
};
</script>

<style src="../assets/styles/home.css">
</style>
