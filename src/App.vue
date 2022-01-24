<script setup lang="ts">

import { ref, reactive, watch } from 'vue'
import { Game, MOVES } from './game';

// initialize game
const game = reactive(new Game());

// assign vars
const round = ref(1);
const message = ref('');
const player1 = ref(game.player1); // user
const player2 = ref(game.player2); // computer

watch(game, () => {
  // bugfix: workaround for ref(game.message) issue!
  message.value = game.message
  round.value = game.round;
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
      
      <h5 class="display-5">Round {{round}}</h5>

      <div class="row align-items-center justify-content-between">
        <!-- player1 info -->
        <div class="col-6 col-md-3 order-md-1">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>{{ player1.name }}</h4>
              <p class="display-3">{{ player1.score }}</p>
              <p class="text-capitalize bg-dark m-0">{{ player1.move }}</p>
            </div>
          </div>
        </div>

        <!-- game buttons -->
        <div class="col-12 col-md-6 d-flex order-1 order-md-2 py-5">
          <button
            v-for="move in MOVES"
            :key="move"
            @click="onChoose(move)"
            class="btn btn-primary btn-img rounded-circle p-2 mx-2"
          >
            <img :src="`/src/assets/${move}.png`" class="img-fluid rounded-circle" />
          </button>
        </div>

        <!-- player2 info -->
        <div class="col-6 col-md-3 order-md-3">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>{{ player2.name }}</h4>
              <p class="display-3">{{ player2.score }}</p>
              <p class="text-capitalize bg-dark m-0">{{ player2.move }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-between">
        <h1 class="display-5">{{ message }}</h1>
      </div>
    </div>
  </main>
</template>

<style>
.btn-img:hover > img {
  filter: opacity(0.9);
}
</style>