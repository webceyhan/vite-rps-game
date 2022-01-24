<script setup lang="ts">

defineProps<{
  round: number,
  progress: number
}>()

</script>

<template>
  <div>
    <h5 class="display-5 text-primary">Round - {{ round }}</h5>

    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </div>
</template>
