<script setup lang="ts">

import { ref, reactive, watch, computed } from 'vue'
import ProgressBar from './components/ProgressBar.vue'
import PlayerCard from './components/PlayerCard.vue'
import MoveButton from './components/MoveButton.vue'
import MessageBar from './components/MessageBar.vue'
import { Game, MOVES } from './game';

// initialize game
const game = reactive(new Game());

// assign vars
const round = ref(1);
const progress = ref(10)
const message = ref(game.message);
const player1 = ref(game.player1); // user
const player2 = ref(game.player2); // computer

watch(game, () => {
  // bugfix: workaround for ref(game.message) issue!
  message.value = game.message;
  round.value = game.round;
  progress.value = game.progress;
})

function onChoose(move: string) {
  game.playRound(move as any);
}

</script>

<template>
  <main class="py-5 p-md-5">
    <div class="container-fluid text-center">
      <h1 class="display-1">Rock Paper Scissors</h1>

      <hr class="mb-5" />

      <ProgressBar class="mb-3" v-bind="{ round, progress }" />

      <div class="row align-items-center justify-content-between">
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

      <div class="row justify-content-between">
        <MessageBar :message="message" />
      </div>
    </div>
  </main>
</template>

<style>
.btn-img:hover > img {
  filter: opacity(0.9);
}
</style>