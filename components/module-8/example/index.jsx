import { useAuth } from "@/components/contexts/auth-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style-app";

export default function ExampleAuth() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="information-circle" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Session Management</Text>
        </View>

        <Text style={styles.description}>
          Status: {user ? `Logged In 👋 ${user?.username}` : "Not Logged In"}
        </Text>
        {user ? (
          <Button title="Click here to sign out" onPress={logout} />
        ) : (
          <Button
            title="Click here to sign in"
            onPress={() => router.push("/module-8/sign-in")}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
