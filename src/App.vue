<script setup lang="ts">

import { ref, reactive, watch, computed } from 'vue'
import Layout from './components/Layout.vue';
import ProgressBar from './components/ProgressBar.vue'
import PlayerCard from './components/PlayerCard.vue'
import MoveButton from './components/MoveButton.vue'
import Message from './components/Message.vue'
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

const headerMessage = computed(() => {
  let text: string;

  if (!round.value) text = 'Ready';
  else if (over.value) text = 'Game Over!';
  else text = `Round - ${round.value}`;

  return { text, color: 'primary' } as any
})

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

  <layout>
    <template #header>
      <message :message="headerMessage" />
      <progress-bar v-bind="{ over, round, progress }" />
    </template>

    <template #player1>
      <player-card :player="player1" />
    </template>

    <template #player2>
      <player-card :player="player2" />
    </template>

    <template #controls>
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
    </template>

    <template #footer>
      <message v-if="round != 0" :message="message" class="mb-4" />

      <button
        v-if="round === 0 || over"
        class="btn btn-lg btn-primary py-3 px-5"
        @click="onStart"
      >Start a New Game!</button>
    </template>
  </layout>
</template>
