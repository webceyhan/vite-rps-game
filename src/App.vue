<script setup lang="ts">

import { ref } from 'vue'

interface RuleMap {
  [key: string]: { [key: string]: number }
}

const rules: RuleMap = {
  // rock -> scissor -> paper
  rock: { scissor: 1, paper: -1 },
  scissor: { paper: 1, rock: -1 },
  paper: { rock: 1, scissor: -1 },
}

const moves = Object.keys(rules);

const randomMove = () => moves[Math.floor(Math.random() * moves.length)]

const compareMoves = (a: string, b: string) => {
  return rules[a][b] || 0;
}

const message = ref('start playing..')

const user = ref({
  score: 0,
  move: ''
});

const computer = ref({
  score: 0,
  move: ''
})


function onChoose(move: string) {
  user.value.move = move;
  computer.value.move = randomMove();

  const result = compareMoves(move, computer.value.move);

  switch (result) {
    case 1:
      user.value.score += 1;
      message.value = 'You won!';
      break;

    case -1:
      computer.value.score += 1;
      message.value = 'You lost!'
      break;

    default:
      message.value = "It's a TIE!"
      break;
  }

}

</script>

<template>
  <main class="py-5 p-md-5">
    <div class="container-fluid text-center">
      <h1 class="display-1">Rock Paper Scissors</h1>

      <hr class="mb-5" />

      <div class="row align-items-center justify-content-between">
        <!-- user score -->
        <div class="col-6 col-md-3 order-md-1">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>You</h4>
              <p class="display-3">{{ user.score }}</p>
              <p class="text-capitalize bg-dark m-0">{{ user.move }}</p>
            </div>
          </div>
        </div>

        <!-- game buttons -->
        <div class="col-12 col-md-6 d-flex order-1 order-md-2 py-5">
          <button
            v-for="move in moves"
            :key="move"
            @click="onChoose(move)"
            class="btn btn-primary btn-img rounded-circle p-2 mx-2"
          >
            <img :src="`/src/assets/${move}.png`" class="img-fluid rounded-circle" />
          </button>
        </div>

        <!-- computer score -->
        <div class="col-6 col-md-3 order-md-3">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>Computer</h4>
              <p class="display-3">{{ computer.score }}</p>
              <p class="text-capitalize bg-dark m-0">{{ computer.move }}</p>
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