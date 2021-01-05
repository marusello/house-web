<template>
  <aside class="app-sidebar">
    <img src="../assets/icone.png" alt="House" />
    <footer>
      <button type="button">
          <router-link to="/app">
            <v-icon><span class="material-icons"> keyboard_backspace </span></v-icon>
          </router-link>
      </button>
    </footer>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar'
};
</script>

<style>
</style>