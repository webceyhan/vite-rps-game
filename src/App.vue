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
const roundAwaiting = ref(game.roundAwaiting)
const progress = ref(0);
const message = ref(game.message);
const player1 = ref(game.player1); // user
const player2 = ref(game.player2); // computer

watch(game, () => {
  // bugfix: workaround for ref(<primitive type>) issue!
  over.value = game.over;
  round.value = game.round;
  roundAwaiting.value = game.roundAwaiting;
  progress.value = game.progress;
  message.value = game.message;
})

function onStart() {
  game.start();
}

function onPlay(move: string) {
  game.playRound(move as any);
}

</script>

<template>
  <!-- Header -->
  <header class="bg-light bg-opacity-10 text-light text-center p-3 mb-4">
    <h1 class="display-3 m-0">Rock Paper Scissors</h1>
  </header>

  <div class="container text-center">
    <progress-bar class="mb-4" v-bind="{ over, round, progress }" />

    <!-- Info / Controls -->
    <main class="mb-4">
      <div class="row align-items-center justify-content-between g-4">
        <!-- player1 info -->
        <div class="col-6 col-lg-3 order-lg-1">
          <player-card :player="player1" />
        </div>

        <!-- game controls -->
        <div class="col-12 col-lg-6 d-flex justify-content-center order-1 order-lg-2">
          <!-- spinner -->
          <div
            v-if="roundAwaiting"
            class="spinner-border text-primary"
            style="width: 5rem; height: 5rem;"
          >
            <span class="visually-hidden">Loading...</span>
          </div>

          <!-- buttons -->
          <template v-else>
            <move-button
              v-for="move in MOVES"
              :key="move"
              :move="move"
              :disabled="round === 0 || over"
              @click="onPlay(move)"
              class="mx-1 mx-md-4"
            />
          </template>
        </div>

        <!-- player2 info -->
        <div class="col-6 col-lg-3 order-lg-3">
          <player-card :player="player2" />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer>
      <message-bar v-if="round != 0" :message="message" class="mb-4" />

      <button
        v-if="round === 0 || over"
        class="btn btn-lg btn-primary py-3 px-5"
        @click="onStart"
      >Start a New Game!</button>
    </footer>
  </div>
</template>
