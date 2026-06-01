import { AuthProvider } from "@/components/contexts/auth-context";
import { Stack } from "expo-router";

export default function RootLayout() {
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert(
  //       "Exit App",
  //       "Are you sure you want to exit?",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => null,
  //           style: "cancel",
  //         },
  //         {
  //           text: "Exit",
  //           onPress: () => BackHandler.exitApp(),
  //         },
  //       ],
  //       { cancelable: false },
  //     );
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
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
        <Stack.Screen name="search" />
        <Stack.Screen name="book/[id]" />
        <Stack.Screen
          name="read/[id]"
          options={{
            presentation: "transparentModal",
            headerShown: false,
            animation: "slide_from_bottom",
            gestureEnabled: true,
            gestureDirection: "vertical",
            fullScreenGestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="subscribe/[id]"
          options={{
            presentation: "transparentModal",
            headerShown: false,
            animation: "slide_from_bottom",
            gestureEnabled: true,
            gestureDirection: "vertical",
            fullScreenGestureEnabled: true,
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
