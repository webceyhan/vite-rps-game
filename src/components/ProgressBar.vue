<script setup lang="ts">

defineProps<{
  over: boolean,
  round: number,
  progress: number
}>()

</script>

<template>
  <div>
    <h1 class="display-6 text-primary">
      <span v-if="over">Game Over</span>
      <span v-else-if="round === 0">Ready</span>
      <span v-else>Round - {{ round }}</span>
    </h1>

    <div class="progress bg-white bg-opacity-10">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </div>
</template>
