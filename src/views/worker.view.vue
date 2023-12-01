<script setup lang='ts'>
function onClick() {
  const worker = new Worker("worker.js")
  worker.postMessage("https://pokeapi.co/api/v2/pokemon/6")
  location.assign("https://pokeapi.co/")
  worker.terminate()
}

</script>
<template>
  <section>
    <h1>Worker</h1>
    <p>Veremos que al dar click en el botón, se hace una petición con fetch y se redirecciona a la url de la API de
      pokemon. Lo que sucede es que la petición se realiza con éxito.</p>
    <button @click="onClick">
      Accionar y navegar
    </button>
  </section>
</template>
<style></style>