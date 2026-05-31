import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await SecureStore.getItemAsync("accessToken");
      const userData = await SecureStore.getItemAsync("user");
      const expiresIn = await SecureStore.getItemAsync("expiresIn");

      if (token && userData && expiresIn) {
        // Cek apakah token sudah expired
        const currentTime = Math.floor(Date.now() / 1000);
        const expirationTime = parseInt(expiresIn);

        if (currentTime >= expirationTime) {
          // Token sudah expired
          console.log("Token has expired, logging out...");
          await logout();
          return;
        }

        // Token masih valid
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData, token, expiresIn) => {
    try {
      await SecureStore.setItemAsync("accessToken", token);
      await SecureStore.setItemAsync("expiresIn", expiresIn.toString());
      await SecureStore.setItemAsync("user", JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      await SecureStore.deleteItemAsync("expiresIn");
      await SecureStore.deleteItemAsync("user");
      setUser(null);
      router.push("/module-8/sign-in");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Helper function untuk cek apakah user sudah login
  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, checkAuth, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
