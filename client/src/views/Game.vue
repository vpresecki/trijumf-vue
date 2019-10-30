<template>
  <div>
    <div class="load"></div>
    <div class="page-wrapper">
      <h2>Trijumf</h2>
      <app-card></app-card>
      <div class="game-board">
        <app-teams></app-teams>
        <app-timer></app-timer>
      </div>
    </div>
    <div class="clear"></div>
    <app-footer></app-footer>
    <div class="finish"></div>
  </div>
</template>

<script>
import Card from '../components/Card';
import Teams from '../components/Teams';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
export default {
  data() {
    return {};
  },
  components: {
    appCard: Card,
    appTeams: Teams,
    appTimer: Timer,
    appFooter: Footer
  }
};
</script>

<style src="../assets/styles/game.css"></style>
