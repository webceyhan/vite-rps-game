<script setup lang="ts">

defineProps<{ progress: number }>()

</script>

<template>
  <div class="progress bg-white bg-opacity-10">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>
