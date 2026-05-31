import { StyleSheet, Text, View } from "react-native";

export default function CodeBlock({ code }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  text: {
    fontFamily: "monospace",
    fontSize: 13,
    color: "#D1D5DB",
    lineHeight: 20,
  },
});