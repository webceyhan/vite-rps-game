<script setup lang="ts">

</script>

<template>
  <main class="p-5">
    <div class="container-fluid text-center">
      <h1 class="display-1">Rock Paper Scissors</h1>

      <hr class="mb-5" />

      <div class="row align-items-center justify-content-between">
        <!-- user score -->
        <div class="col-3">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>You</h4>
              <p class="display-3 m-0">1</p>
            </div>
          </div>
        </div>

        <!-- game buttons -->
        <div class="col-6 d-flex">
          <a href="#" class="btn btn-primary btn-img rounded-circle p-2 mx-2">
            <img src="./assets/rock.png" class="img-fluid rounded-circle" />
          </a>

          <a href="#" class="btn btn-primary btn-img rounded-circle p-2 mx-2">
            <img src="./assets/paper.png" class="img-fluid" />
          </a>

          <a href="#" class="btn btn-primary btn-img rounded-circle p-2 mx-2">
            <img src="./assets/scissors.png" class="img-fluid" />
          </a>
        </div>

        <!-- computer score -->
        <div class="col-3">
          <div class="card bg-secondary text-white">
            <div class="card-body">
              <h4>Computer</h4>
              <p class="display-3 m-0">1</p>
            </div>
          </div>
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