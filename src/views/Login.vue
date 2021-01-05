<template>
  <form @submit.prevent="doLogin" id="login">
    <aside>
      <header>
        <img src="../assets/icone.png" alt="House" />
        <p>
          House
        </p>
      </header>

      <footer>
        <strong>Bragança Paulista</strong>
        <span>São Paulo</span>
      </footer>
    </aside>

    <div class="input-block">
      <router-link class="voltar" to="/">
        <v-icon>
          <span class="material-icons"> keyboard_backspace </span>
        </v-icon>
      </router-link>

      <h1>Fazer login</h1>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" required v-model="login.email" />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" required v-model="login.senha" />
      </div>     

      <button type="submit" class="entrar-button">Entrar</button>
    </div>
  </form>
</template>

<script>
import "../styles/views/login.css";

import Houses from "../services/houses";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    doLogin() {
      let dataLogin = {
        email: this.login.email,
        senha: this.login.senha,
      };
      Houses.login(dataLogin)
        .then(() => {
          alert("Está logado!!");
          this.$router.push("/house/teste");
        })
        .catch(() => {
          alert("Falha no login!");
        });
    },
  },
};
</script>