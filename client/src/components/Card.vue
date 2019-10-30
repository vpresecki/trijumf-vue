<template>
  <div>
    <div class="card-section">
      <div class="scene">
        <transition name="flip">
          <div class="card">
            <div class="draw-card card_face">
              <h3 class="content-align">IZVUCI KARTU</h3>
            </div>
            <div id="game-words" class="card_face card__face--back">
              <div class="content-align" id="width">
                <h3 class="word-0"></h3>
                <br />
                <h3 class="word-1"></h3>
                <br />
                <h3 class="word-2"></h3>
                <br />
                <h3 class="word-3"></h3>
                <br />
                <h3 class="word-4"></h3>
                <br />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
