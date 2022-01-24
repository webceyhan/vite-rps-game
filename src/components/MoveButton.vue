<script setup lang="ts">

import { rootUrl } from '../utils';

defineProps<{ move: string }>()

</script>

<template>
  <button class="btn btn-primary btn-img rounded-circle p-2 mx-2">
    <img :src="rootUrl(`assets/${move}.png`)" class="img-fluid rounded-circle" />
  </button>
</template>
