import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.217.18:3000/api";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,
  isCheckingAuth: true,

  // 🔐 REGISTER
  register: async (username, email, password) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);

      set({
        user: data.user,
        token: data.token,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, message: error.message };
    }
  },

  // 🔐 LOGIN
  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);

      set({
        user: data.user,
        token: data.token,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, message: error.message };
    }
  },

  // 🔄 AUTO LOGIN (call in root layout)
checkAuth: async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const userJson = await AsyncStorage.getItem("user");

    if (token && userJson) {
      set({
        token,
        user: JSON.parse(userJson),
      });
    } else {
      // 🔥 YE LINE MISSING THI
      set({
        token: null,
        user: null,
      });
    }
  } catch (e) {
    console.log("Auth check error", e);
    set({
      token: null,
      user: null,
    });
  } finally {
    set({ isCheckingAuth: false });
  }
},


  // 🚪 LOGOUT
  logout: async () => {
    set({ isLoading: true });
    await AsyncStorage.multiRemove(["token", "user"]);
    set({ token: null, user: null, isLoading: false });
  },
}));
