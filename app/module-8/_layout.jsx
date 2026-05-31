import { AuthProvider } from "@/components/contexts/auth-context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: "vertical",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="example" />
        <Stack.Screen name="sign-in" />
      </Stack>
    </AuthProvider>
  );
}
