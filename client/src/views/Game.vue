<template>
  <div>
    <div class="load"></div>
    <div class="page-wrapper">
      <h2>Trijumf</h2>
      <div class="game-board">
        <app-teams></app-teams>
      </div>
      <app-card></app-card>
    </div>
    <div class="clear"></div>
    <app-footer></app-footer>
    <div class="finish"></div>
  </div>
</template>

<script>
import Card from '../components/Card';
import Teams from '../components/Teams';
import Footer from '../components/Footer';
import { mapGetters } from 'vuex';
export default {
  components: {
    appCard: Card,
    appTeams: Teams,
    appFooter: Footer
  }
};
</script>

<style src="../assets/styles/game.css"></style>
