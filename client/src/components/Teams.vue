<template>
  <div class="teams">
    <div v-for="team in getTeams" :key="team.id" class="team">
      <h3>{{ team.name }}</h3>
      <span class="score-1">{{team.score}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getTeams'])
  }
};
</script>
