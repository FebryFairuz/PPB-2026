import { AuthProvider } from "@/components/contexts/auth-context";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Exit App",
        "Are you sure you want to exit?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "Exit",
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false },
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);
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
        <Stack.Screen name="sign-in" />
      </Stack>
    </AuthProvider>
  );
}
