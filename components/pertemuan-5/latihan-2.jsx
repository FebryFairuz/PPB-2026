import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Latihan2() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Boxes title={`Total Clicks:`} value={count} />

        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => setCount(count + 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Click Me!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Boxes = ({ title, value }) => {
  return (
    <View style={styles.counterDisplay}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.counterText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  counterDisplay: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 200,
  },
  label: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
  },
  counterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#2196F3",
  },
  clickButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FF5722",
  },
  resetButtonText: {
    color: "#FF5722",
    fontSize: 16,
    fontWeight: "600",
  },
  message: {
    marginTop: 30,
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
  },
});
