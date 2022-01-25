<script setup lang="ts">

import { Message } from '../game'

defineProps<{ message: Message }>()

</script>

<template>
  <h1 class="display-6" :class="`text-${message.color}`">{{ message.text }}</h1>
</template>
