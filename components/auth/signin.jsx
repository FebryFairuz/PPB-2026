// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LOG_IN } from "../apis/user-services";
import { useAuth } from "../contexts/auth-context";
import { Header } from "./components";
import { Buttons, InputText, TextPassword } from "./formUI";
import { style_auth } from "./styles";

export default function Signin() {
  const [email, setEmail] = useState("febrid@ibik.ac.id");
  const [password, setPassword] = useState("Dosen@kesatuan");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSignIn = async () => {
    // Validasi input
    if (!email.trim()) {
      Alert.alert("Error", "Email cannot be empty");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Password cannot be empty");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      const payload = { email, password };
      const response = await LOG_IN(payload);

      console.log("Login response:", response);

      if (response.success === false) {
        Alert.alert("Error", response.message || "Login failed");
        return;
      }

      if (response.data && response.data.token) {
        // Simpan token dan user data menggunakan AuthContext
        const loginResult = await login(
          response.data.data,
          response.data.token,
          response.data.expiresIn,
        );

        if (loginResult.success) {
          Alert.alert("Success", `Welcome back, ${email}!`, [
            {
              text: "OK",
              onPress: () => {
                router.replace("/module-9/apps");
              },
            },
          ]);
        } else {
          Alert.alert("Error", "Failed to save login data");
        }
      } else {
        Alert.alert("Error", "Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", error.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="auto" barStyle={"dark-content"} hidden={false} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style_auth.container}
      >
        <ScrollView
          contentContainerStyle={style_auth.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={style_auth.content}>
            {/* Header */}
            <Header title={"Sign in"} />

            {/* Form */}
            <View style={style_auth.form}>
              {/* email Input */}
              <InputText data={email} setData={setEmail} placeholder="Email" />

              {/* Password Input */}
              <TextPassword password={password} setPassword={setPassword} />

              {/* Forgot Password */}
              <TouchableOpacity style={style_auth.forgotPassword}>
                <Text style={style_auth.forgotPasswordText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              {/* Sign In Button */}
              <Buttons
                style={[
                  style_auth.signInButton,
                  isLoading && style_auth.buttonDisabled,
                ]}
                onPress={handleSignIn}
                disabled={isLoading}
              >
                <Text style={style_auth.signInButtonText}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Text>
              </Buttons>

              {/* Divider */}
              <View style={style_auth.divider}>
                <View style={style_auth.dividerLine} />
                <Text style={style_auth.dividerText}>OR</Text>
                <View style={style_auth.dividerLine} />
              </View>

              {/* Social Login Buttons */}
              <Buttons style={style_auth.socialButton}>
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text style={style_auth.socialButtonText}>
                  Continue with Google
                </Text>
              </Buttons>

              <Buttons style={style_auth.socialButton}>
                <Ionicons name="logo-facebook" size={20} color="#4267B2" />
                <Text style={style_auth.socialButtonText}>
                  Continue with Facebook
                </Text>
              </Buttons>

              {/* Sign Up Link */}
              <View style={style_auth.signUpContainer}>
                <Text style={style_auth.signUpText}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.replace("/signup")}>
                  <Text style={style_auth.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
