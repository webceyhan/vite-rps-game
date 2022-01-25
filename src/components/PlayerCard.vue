<script setup lang="ts">

import { Player } from '../game'

defineProps<{ player: Player }>()

</script>

<template>
  <div class="card bg-dark text-muted border-primary border-2">
    <div class="card-body">
      <h4 class="card-title text-uppercase">{{ player.name }}</h4>
      <hr class="bg-primary mb-2" />
      <p class="text-white display-4 mb-2">{{ player.score }}</p>
      <p class="card-text text-capitalize placeholder-glow" style="height:25px">
        <span v-if="player.move">{{ player.move }}</span>
        <span v-else class="placeholder w-100 h-100"></span>
      </p>
    </div>
  </div>
</template>
