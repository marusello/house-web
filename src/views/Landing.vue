<template>
  <div id="page-landing">
    <div class="content-wrapper">
      <img src="../assets/icone.png" alt="House" />
       <p class="nome">House</p>

      <main>
        <h1>Realize a locação do seu imovél rapidamente</h1>
        <p>Feche contrato direto com o proprietário</p>
      </main>

      <div class="location">
        <strong>Bragança Paulista</strong>
        <span>São Paulo</span>
      </div>

      <router-link to="/login" class="enter-login">
        <v-icon><span  class="material-icons"> login </span></v-icon>
      </router-link>
      <router-link to="/app" class="enter-app">
        <v-icon><span class="material-icons"> arrow_right_alt </span></v-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import "../styles/views/landing.css";

export default {};
</script>

<style>
</style>