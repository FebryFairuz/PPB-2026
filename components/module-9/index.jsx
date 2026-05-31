import { useAuth } from "@/components/contexts/auth-context";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Module9() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Module 8</Text>
      <Text style={styles.status}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: "#666",
  },
});
