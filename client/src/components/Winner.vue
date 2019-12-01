<template>
  <div>
    <transition name="modal">
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>IGRA JE GOTOVA</h2>
          </div>
          <div class="modal-body">
            <p>Pobjednik Trijumfa je tim {{ winnerName }}</p>
            <p>Čestitamo !!!!</p>
          </div>
          <div class="modal-footer">
            <h3>tu napiši nekaj pametno</h3>
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
