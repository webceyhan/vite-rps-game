<script setup lang="ts">

import { Player } from '../game'

defineProps<{ player: Player }>()

</script>

<template>
  <div class="card bg-dark text-muted border-primary border-2">
    <div class="card-body">
      <h4 class="card-title text-uppercase">{{ player.name }}</h4>
      <hr class="bg-primary" />
      <p class="text-white display-4 mb-2">{{ player.score }}</p>
      <p class="card-text text-capitalize" style="min-height:25px">{{ player.move }}</p>
    </div>
  </div>
</template>
