<template>
  <div class="container mt-5 neumorphic-container">
    <h2 class="text-center mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control neumorphic-input"
          id="email"
          v-model="email"
          required
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted">Enter your registered email.</small>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control neumorphic-input"
          id="password"
          v-model="password"
          required
          minlength="6"
        />
        <small class="form-text text-muted">Password must be at least 6 characters.</small>
      </div>

      <button type="submit" class="btn neumorphic-button btn-block" :disabled="loading">
        <span v-if="loading">Logging in...</span>
        <span v-else>Login</span>
      </button>

      <div v-if="loginError" class="alert alert-danger mt-3" role="alert">
        {{ loginError }}
      </div>
    </form>
    <div class="text-center mt-3">
      <p>
        Don't have an account?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { AuthContext } from "@/auth";
import api from "@/services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginError: null,
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.loginError = null;

      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          const userData = response.data;
          AuthContext.login(userData); // Log in the user
          this.$router.push("/"); // Redirect to home page or specific route based on user role
        } else {
          this.loginError = "Invalid credentials";
        }
      } catch (error) {
        this.loginError = error.response?.data?.message || "An error occurred during login.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  background: #e0e5ec;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 12px 12px 20px #c8d0e7, -12px -12px 20px #ffffff;
}

.neumorphic-input {
  background: #e0e5ec;
  border: none;
  padding: 15px;
  box-shadow: inset 8px 8px 16px #c3c3c3, inset -8px -8px 16px #ffffff;
  border-radius: 30px;
}

.neumorphic-button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(45deg, #fef500, #18c729);
  box-shadow: 12px 12px 20px #c8d0e7, -12px -12px 20px #ffffff;
}
</style>
