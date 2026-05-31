import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "react-native-reanimated";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color_list.green,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: color_list.white,
          borderTopWidth: 1,
          borderTopColor: color_list.green_light,
          height: "8%",
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Screen 1",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen2"
        options={{
          title: "Screen 2",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen3"
        options={{
          title: "Screen 3",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const color_list = {
  orange: "#e8ab30",
  green: "#49745e",
  green_light: "#49745e35",
  cream: "#f8f6f1",
  white: "#fff",
};
