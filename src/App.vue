<script setup lang="ts">

</script>

<template>
  <main class="p-5">
    <div class="container text-center">
      <h1 class="display-1 mb-5">Rock Paper Scissors</h1>

      <div class="row justify-content-center">
        <div class="col-3">
          <a href="#" class="btn btn-primary btn-img rounded-circle p-2">
            <img src="./assets/rock.png" class="img-fluid rounded-circle" />
          </a>
        </div>

        <div class="col-3">
          <a href="#" class="btn btn-primary btn-img rounded-circle p-2">
            <img src="./assets/paper.png" class="img-fluid" />
          </a>
        </div>
        <div class="col-3">
          <a href="#" class="btn btn-primary btn-img rounded-circle p-2">
            <img src="./assets/scissors.png" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.btn-img:hover > img {
  filter: opacity(0.9);
}
</style>