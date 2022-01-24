<script setup lang="ts">

import { Player } from '../game/player'

defineProps<{ player: Player }>()

</script>

<template>
  <div class="card bg-secondary text-white">
    <div class="card-body">
      <h4>{{ player.name }}</h4>
      <p class="display-3">{{ player.score }}</p>
      <p class="text-capitalize bg-dark m-0">{{ player.move }}</p>
    </div>
  </div>
</template>
