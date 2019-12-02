<template>
  <div>
    <transition name="modal">
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>IGRA JE GOTOVA</h2>
          </div>
          <div class="modal-body">
            <p>Pobjednik Trijumfa je tim {{ winnerName }}</p>
            <p>Čestitamo !!!!</p>
          </div>
          <div class="modal-footer">
            <h3>tu napiši nekaj pametno</h3>
          </div>
          <div>
            <div class="new-game">
              <router-link :to="{ name: 'home' }">
                <input
                  type="button"
                  class="new-game-button"
                  value="ZAPOČNI NOVU IGRU"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['winnerName'],
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>
