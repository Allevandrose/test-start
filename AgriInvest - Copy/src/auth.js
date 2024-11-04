// src/auth.js
import { reactive } from "vue";
import api from "@/services/api";

export const AuthContext = reactive({
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: !!localStorage.getItem("token"),
  userRole: localStorage.getItem("userRole") || null,

  login(userData) {
    this.user = userData;
    this.isLoggedIn = true;
    this.userRole = userData.role;
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userRole", userData.role);
  },

  async logout() {
    try {
      await api.post("/logout"); // Logout endpoint, if available
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      this.user = null;
      this.isLoggedIn = false;
      this.userRole = null;
      localStorage.clear(); // Clear all localStorage items
    }
  },

  isAuthorized(role) {
    return this.userRole === role;
  },
});
