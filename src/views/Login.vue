<template>
  <div id="login">
    <aside>
      <header>
        <img src="../assets/icone.png" alt="House" />
      </header>

      <footer>
        <strong>Bragança Paulista</strong>
        <span>São Paulo</span>
      </footer>
    </aside>

    <div class="input-block">
      <h1>Fazer login</h1>

      <label htmlFor="email">Email</label>
      <input type="text" v-model="emailField" />

      <label htmlFor="senha">Senha</label>
      <input type="text" v-model="senhaField" />

      <button class="entrar-button" type="submit">Entrar</button>
    </div>
  </div>
</template>

<script>
import "../styles/views/login.css";

export default {
  data() {
    return {
      emailField: "",
    };
  },
};
</script>