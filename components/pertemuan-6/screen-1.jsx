import { Link, useRouter } from "expo-router";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen1() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <Text style={styles.title}>First Screen</Text>
        <Link href={"/latihan-6/stacks/screen2"} push asChild>
          <Text style={{ fontSize: 18, color: "blue", marginVertical: 10 }}>
            Go to second screen
          </Text>
        </Link>
        <Button
          title="Go to thrid screen"
          onPress={() => router.push("/latihan-6/stacks/screen3")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
