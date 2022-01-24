<script setup lang="ts">

import { ref, reactive, watch } from 'vue'
import ProgressBar from './components/ProgressBar.vue'
import PlayerCard from './components/PlayerCard.vue'
import MoveButton from './components/MoveButton.vue'
import MessageBar from './components/MessageBar.vue'
import { Game, MOVES } from './game';

// initialize game
const game = reactive(new Game());

// assign vars
const over = ref(false);
const round = ref(0);
const progress = ref(0);
const message = ref(game.message);
const player1 = ref(game.player1); // user
const player2 = ref(game.player2); // computer

watch(game, () => {
  // bugfix: workaround for ref(<primitive type>) issue!
  over.value = game.over;
  round.value = game.round;
  progress.value = game.progress;
  message.value = game.message;
})

function onStart() {
  game.start();
}

function onChoose(move: string) {
  game.playRound(move as any);
}

</script>

<template>
  <main class="py-5 p-md-5">
    <div class="container-fluid text-center">
      <h1 class="display-1">Rock Paper Scissors</h1>

      <hr class="mb-5" />

      <ProgressBar class="mb-3" v-bind="{ over, round, progress }" />

      <div class="row align-items-center justify-content-between mb-3">
        <!-- player1 info -->
        <div class="col-6 col-md-3 order-md-1">
          <PlayerCard :player="player1" />
        </div>

        <!-- game buttons -->
        <div class="col-12 col-md-6 d-flex order-1 order-md-2 py-5">
          <MoveButton v-for="move in MOVES" :key="move" :move="move" @click="onChoose(move)" />
        </div>

        <!-- player2 info -->
        <div class="col-6 col-md-3 order-md-3">
          <PlayerCard :player="player2" />
        </div>
      </div>

      <!-- Footer -->
      <footer>
        <button
          v-if="round === 0 || over"
          class="btn btn-lg btn-primary py-3 px-5"
          @click="onStart"
        >Start a New Game!</button>
        <MessageBar v-else :message="message" />
      </footer>
    </div>
  </main>
</template>

<style>
.btn-img:hover > img {
  filter: opacity(0.9);
}
</style>