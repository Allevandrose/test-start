import { ref } from "vue";
import apiClient from "@/utils/axios"; // Axios instance

export function useAuth() {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const role = ref(null);

  const register = async (userData) => {
    const response = await apiClient.post("/register", userData);
    return response.data;
  };

  const login = async (credentials) => {
    const response = await apiClient.post("/login", credentials);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    role.value = response.data.role;
    isAuthenticated.value = true;
    user.value = response.data.username;
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await apiClient.post("/refresh-token", {
      token: refreshToken,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    isAuthenticated.value = false;
    role.value = null;
  };

  return {
    user,
    isAuthenticated,
    role,
    register,
    login,
    logout,
    refreshAccessToken,
  };
}
