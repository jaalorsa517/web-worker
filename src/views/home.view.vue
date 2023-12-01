<script setup lang='ts'>
function onClick() {
  fetch("https://pokeapi.co/api/v2/pokemon/6")
  location.assign("https://pokeapi.co/")
}

</script>
<template>
  <section>
    <h1>Home</h1>
    <p>Veremos que al dar click en el botón, se hace una petición con fetch y se redirecciona a la url de la API de
      pokemon. Lo que sucede es que la petición se cancela.</p>
    <button @click="onClick">
      Accionar y navegar
    </button>
  </section>
</template>
<style></style>