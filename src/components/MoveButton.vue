<script setup lang="ts">

import { computed } from 'vue';

// bugfix: :src="../assets/${move}.png" not working!

// workaround: preload all images
// this make rollup to copy all images to dist folder as well
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissor from '../assets/scissor.png';

// store in array (type definition required for ts to work properly)
const images: { [key: string]: any } = { rock, paper, scissor };

const props = defineProps<{ move: string }>()

// use images with computed value in dynamic way
const image = computed(() => images[props.move]);

</script>

<template>
  <button class="btn btn-primary rounded-circle p-1 position-relative">
    <img :src="image" class="img-fluid" />
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