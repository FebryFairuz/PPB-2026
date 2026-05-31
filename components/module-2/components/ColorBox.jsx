import { StyleSheet, Text, View } from "react-native";

export default function ColorBox({ color, text, width = 90, height = 90 }) {
  return (
    <View style={[styles.container, { backgroundColor: color, width, height }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});