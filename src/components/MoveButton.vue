<script setup lang="ts">

import { rootUrl } from '../utils';

defineProps<{ move: string }>()

</script>

<template>
  <button class="btn btn-primary rounded-circle p-1 position-relative">
    <img :src="rootUrl(`assets/${move}.png`)" class="img-fluid" />
    <span class="position-absolute top-100 bottom-0 start-50 translate-middle">
      <strong class="badge bg-black text-primary text-capitalize mt-2">{{ move }}</strong>
    </span>
  </button>
</template>

<style scoped>
.btn:hover > img {
  filter: opacity(0.7);
}

.btn > span {
  display: none;
}
.btn:hover > span {
  display: inline;
}
</style>