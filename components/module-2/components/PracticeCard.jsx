import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function PracticeCard({ text, iconColor = "#10B981" }) {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={20} color={iconColor} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F0FDF4",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: "#166534",
    marginLeft: 12,
    lineHeight: 20,
  },
});