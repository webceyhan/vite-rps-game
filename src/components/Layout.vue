<script setup lang="ts">

</script>

<template>
  <div class="container text-center">
    <header>
      <slot name="header"></slot>
    </header>

    <main class="my-4">
      <div class="row align-items-center justify-content-between g-4">
        <!-- player1 info -->
        <div class="col-6 col-lg-3 order-lg-1">
          <slot name="player1"></slot>
        </div>

        <!-- game controls -->
        <div class="col-12 col-lg-6 order-1 order-lg-2">
          <div class="d-flex justify-content-center">
            <slot name="controls"></slot>
          </div>
        </div>

        <!-- player2 info -->
        <div class="col-6 col-lg-3 order-lg-3">
          <slot name="player2"></slot>
        </div>
      </div>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
